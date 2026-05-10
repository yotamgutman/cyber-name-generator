# Threat Name Generator

Generate plausible, original names for threat groups, campaigns, and malware — with a built-in exclusion list of 700+ real known names.

**[Live demo →](https://yotamgutman.github.io/cyber-name-generator)**

Built by [Cyber Marketing Pros](https://cybermarketingpros.com).

---

## Features

- **3 types**: Group, Campaign, Malware
- **6 flavours**: Natural, Mythological, Technical, Literature, Mesh-up, Random
- **717+ known names** seeded from MITRE ATT&CK, Malpedia, and public threat intel — used as exclusion list so generated names never collide with real ones
- **Community exclusion list** — anyone can submit known names via GitHub Issues; approved names are merged into `data/community-names.json` and loaded automatically

---

## Usage

Open `index.html` in any browser, or serve locally:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## Submitting a known name

If you know of a real threat group, campaign, or malware name that should be excluded from generation, open an issue using the **Submit a Known Threat Name** template:

**[Submit a name →](https://github.com/yotamgutman/cyber-name-generator/issues/new?template=name-submission.yml)**

Requirements:
- The name must appear in published public reporting (include a source URL)
- Aliases and alternate spellings are welcome

Once reviewed, the name is added to `data/community-names.json` via PR and becomes active for all users immediately.

---

## Updating the name database

A Node.js scraper pulls live data from MITRE ATT&CK:

```bash
cd scraper
node scrape.js
```

Output is written to `data/scraped-names.json`. Copy new entries into the `KNOWN_NAMES` block in `generator.js` to update the bundled seed.

---

## Sources

| Source | Content |
|---|---|
| [MITRE ATT&CK](https://attack.mitre.org) | Groups, campaigns, software |
| [Malpedia](https://malpedia.caad.fkie.fraunhofer.de) | Malware families, threat actors |
| [Macworld Mac malware list](https://www.macworld.com/article/672879) | macOS-specific malware |
| Community submissions | `data/community-names.json` |

---

## License

MIT
