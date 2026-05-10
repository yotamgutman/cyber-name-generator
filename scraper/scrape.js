/**
 * Threat Name Scraper
 * Fetches known group/campaign/malware names from:
 *  1. MITRE ATT&CK STIX data (GitHub CDN)
 *  2. Wikipedia malware list
 *
 * Output: ../data/scraped-names.json
 * Usage: node scrape.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT_FILE = path.join(__dirname, '..', 'data', 'scraped-names.json');

// ── HTTP fetch helper ──

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    console.log(`  Fetching: ${url}`);
    https.get(url, { headers: { 'User-Agent': 'ThreatNameScraper/1.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchJSON(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error from ${url}: ${e.message}`)); }
      });
    }).on('error', reject);
  });
}

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    console.log(`  Fetching: ${url}`);
    https.get(url, { headers: { 'User-Agent': 'ThreatNameScraper/1.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchHTML(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// ── MITRE ATT&CK scraper ──
// Uses the official MITRE CTI STIX JSON (hosted on GitHub)
// intrusion-set => groups, malware/tool => malware

async function scrapeMitre() {
  console.log('\n[MITRE ATT&CK] Fetching STIX bundle...');

  // The full bundle is large (~50MB). Use the smaller domain-specific files.
  const BASE = 'https://raw.githubusercontent.com/mitre/cti/master/enterprise-attack';

  const groups = [];
  const malware = [];
  const campaigns = [];

  try {
    // Groups (intrusion-sets)
    console.log('  Loading groups...');
    const groupBundle = await fetchJSON(`${BASE}/intrusion-set/*.json`.replace('*.json', ''));
    // Actually fetch the full bundle and filter
    const fullBundle = await fetchJSON(`${BASE}/enterprise-attack.json`);

    for (const obj of fullBundle.objects) {
      if (!obj.name) continue;

      if (obj.type === 'intrusion-set') {
        groups.push(obj.name);
        if (obj.aliases) groups.push(...obj.aliases);
      }
      if (obj.type === 'malware' || obj.type === 'tool') {
        malware.push(obj.name);
        if (obj.x_mitre_aliases) malware.push(...obj.x_mitre_aliases);
      }
      if (obj.type === 'campaign') {
        campaigns.push(obj.name);
        if (obj.aliases) campaigns.push(...obj.aliases);
      }
    }

    console.log(`  Groups found: ${groups.length}`);
    console.log(`  Malware/Tools found: ${malware.length}`);
    console.log(`  Campaigns found: ${campaigns.length}`);
  } catch (e) {
    console.error(`  MITRE fetch failed: ${e.message}`);
    console.error('  Continuing with partial data...');
  }

  return { groups, malware, campaigns };
}

// ── Wikipedia scraper ──
// Parses table cells from the Wikipedia malware/APT list pages

function extractWikipediaNames(html) {
  const names = [];
  // Match linked titles in table rows: >Name<
  const linkPattern = /<td[^>]*>(?:<[^>]+>)*([A-Z][A-Za-z0-9\s\-\.]{2,40})(?:<\/[^>]+>)*<\/td>/g;
  let m;
  while ((m = linkPattern.exec(html)) !== null) {
    const name = m[1].trim();
    if (name.length > 2 && name.length < 50 && !/^\d+$/.test(name)) {
      names.push(name);
    }
  }

  // Also match wiki internal links: title="..."
  const titlePattern = /title="([A-Z][A-Za-z0-9\s\-\.]{2,40})"/g;
  while ((m = titlePattern.exec(html)) !== null) {
    const name = m[1].trim();
    if (!name.startsWith('File:') && !name.startsWith('Wikipedia:') &&
        !name.startsWith('Help:') && !name.startsWith('Talk:') &&
        name.length > 2 && name.length < 50) {
      names.push(name);
    }
  }

  return [...new Set(names)];
}

async function scrapeWikipedia() {
  console.log('\n[Wikipedia] Fetching malware and APT lists...');
  const pages = [
    'https://en.wikipedia.org/w/index.php?title=List_of_most_significant_computer_viruses_and_worms&action=raw',
    'https://en.wikipedia.org/w/index.php?title=Advanced_persistent_threat&action=raw',
  ];

  const names = [];
  for (const url of pages) {
    try {
      const html = await fetchHTML(url);
      const found = extractWikipediaNames(html);
      names.push(...found);
      console.log(`  Found ${found.length} names from ${url.split('title=')[1].split('&')[0]}`);
    } catch (e) {
      console.error(`  Wikipedia fetch failed: ${e.message}`);
    }
  }

  return [...new Set(names)];
}

// ── Dedup & clean ──

function clean(names) {
  return [...new Set(
    names
      .map(n => n.trim())
      .filter(n => n.length >= 3 && n.length <= 80)
      .filter(n => !/^\d+$/.test(n))
      .filter(n => !/^(the|a|an|and|or|of|in|on|for|with|from|to|by)$/i.test(n))
  )].sort();
}

// ── Main ──

async function main() {
  console.log('=== Threat Name Scraper ===');
  console.log(`Output: ${OUT_FILE}`);

  const mitre = await scrapeMitre();
  const wikiNames = await scrapeWikipedia();

  const result = {
    generatedAt: new Date().toISOString(),
    sources: ['MITRE ATT&CK CTI', 'Wikipedia'],
    groups: clean(mitre.groups),
    campaigns: clean(mitre.campaigns),
    malware: clean([...mitre.malware, ...wikiNames.filter(n => {
      // heuristic: wikipedia names with tech-sounding patterns are likely malware
      return /[A-Z]{2,}|bot|rat|worm|virus|locker|stealer|dropper/i.test(n);
    })]),
    stats: {
      groups: 0,
      campaigns: 0,
      malware: 0,
    },
  };

  result.stats.groups = result.groups.length;
  result.stats.campaigns = result.campaigns.length;
  result.stats.malware = result.malware.length;

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(result, null, 2));

  console.log('\n=== Done ===');
  console.log(`Groups:    ${result.stats.groups}`);
  console.log(`Campaigns: ${result.stats.campaigns}`);
  console.log(`Malware:   ${result.stats.malware}`);
  console.log(`Saved to:  ${OUT_FILE}`);
  console.log('\nTo use in the website, copy the arrays into generator.js KNOWN_NAMES.');
}

main().catch(e => {
  console.error('Fatal:', e);
  process.exit(1);
});
