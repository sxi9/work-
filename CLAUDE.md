# DDW Ransomware / Extortion Victim Entry Workflow (ZeroFox Wagtail / Needles)

This repo is the shared memory for creating ransomware- and extortion-victim "Needles page"
entries in the ZeroFox intel Wagtail admin (https://intel-api.zerofox.com/wagtail/admin/).
When the analyst (hkumar@zerofox.com, or the current session user; the published examples
below were saved under Wagtail user "Sivasastha") pastes a leak-site screenshot or raw leak
text plus a group name, produce (1) the filled text template and (2) a ready-to-run browser
console script (see `wagtail-autofill.js`). Follow every rule below exactly — they were
refined over many entries and the examples in `victims-log.md`.

## Input the analyst gives per victim
- Leak-site screenshot (or raw text) and the threat group name. Date defaults to today.
- If the group is missing, ask or default to the most recent group used, and say so.

## Naming rules
- **Victim name = the name as shown on the victim's own LinkedIn or website copyright
  line**, with corporate suffixes stripped (no Inc, LLC, LLP, Ltd, Ltée, s.r.o., SAS, AB,
  GmbH, etc.). Examples: "Machine sro" → **K2 Machine**; "Campbell Rhea" → **CampbellRhea**
  (website spells it one word); **Taiwan Otsuka Pharmaceutical Co.** (published name keeps
  "Co."). Do independent research on the victim's site/LinkedIn — do not rely only on the
  leak screenshot.
- Keep the brand's own casing and punctuation: **polisee** (lowercase, title "Vexy
  Ransomware: polisee"), **Data-Core Systems** (hyphen), **Envision EyeCare** (leak wrote
  "EnVision Eye Care"), **Brenner Basistunnel BBT SE** (SE kept — it is part of the name).
- Unidentifiable target: use the listing name as shown and put the disambiguator in
  parentheses: title `NightSpire Ransomware: Colorado (Texas)`, target tag "Colorado (Texas)".
- Title format by group:
  - Ransomware groups (Wallstreet, The Gentlemen, n0n, NightSpire, Vexy, INC):
    `[Group] Ransomware: [Victim Name]`.
  - INC: the title and content say "INC" (`INC Ransomware: Coopecaja`, "the INC ransomware
    leak site") but the Source Name(s) and Actor(s) tags are **"INC Ransom"**.
  - Everest (data-extortion group, not ransomware): `Everest: [Victim Name]` — no
    "Ransomware" word anywhere in the title.

## Content paragraph (Draftail "Content" block) — exact pattern
> On [Month D, YYYY], ZeroFox observed an update on the [Group] ransomware leak site
> targeting [Victim Name], a [country]-based [short description]. ZeroFox has detected
> close to 10,000 ransomware and digital extortion victims in the past year, of which
> [stat clause].

- NEVER use "likely referencing" — always the direct "targeting X, a Y-based Z" form.
- **Everest**: "ZeroFox observed an update on the Everest leak site targeting ..." — no
  "ransomware" before "leak site". The stats sentence is unchanged.
- **Unidentifiable target** (published NightSpire example): `targeting "Colorado Texas."
  However, at the time of reporting, the intended target remains unclear due to the lack of
  unique identifiers.` then the stats sentence. No "a [country]-based ..." description.
- Description is ONE plain descriptive phrase ("a U.S.-based office furniture manufacturer").
  A short "specializing in / offering / serving ..." tail is acceptable (published: "a
  U.S.-based IT consulting and technology services company specializing in digital
  transformation, AI, automation, and business process outsourcing"; "a Costa Rica-based
  savings and credit cooperative offering financial services to public and private sector
  workers"; "a U.S.-based optometry and eye care clinic network serving the El Paso, Texas
  area"). Still no founding dates, revenue, headcount, or capability lists. Base it on
  INDEPENDENT RESEARCH of the victim's website/LinkedIn, not just the leak screenshot text.
- Country adjective is the plain country name: Germany-based, Japan-based, South Korea-based,
  Costa Rica-based, "an Italy-based", U.S.-based, Canada-based.
- When the name is self-explanatory (university, hospital, school), NO description —
  just the country: "targeting Wellington College International School Bangkok, Thailand."
- A recent rebrand goes in parentheses: "targeting Europ Assistance South Africa
  (rebranded as AZOZA), a South Africa-based provider of ...".
- Drop the leading "the" before group names that start with "The":
  "an update on **The Gentlemen** ransomware leak site" but "an update on **the Wallstreet**
  ransomware leak site", "the n0n ransomware leak site", "the Vexy ransomware leak site".

### Victim-count figure (moves with the dashboard — use the latest published figure)
| Entry date | Figure |
|---|---|
| 2026-10-15 | "more than 9,850" |
| 2026-10-16 | "close to 9,900" |
| 2026-10-19 | "close to 9,950" |
| 2026-10-20 | "close to 10,000" (current default — analyst-confirmed wording; dashboard "# Unique Needles" read 10k, about 10,010 from the regional counts. "Close to" is used even when the count is just above the round number) |

### Where the figures come from (the Needles victim dashboard)
The analyst reads the figure and the percentages off the internal Needles dashboard and pastes
a screenshot when they change (first pasted 2026-10-20). Filters on that screenshot: Created At
= "Last year"; Threat Type = "ransomware" + "data_breach"; Actor/Industry/Region/Confidence/
Reliability/TLP unfiltered. Cards used:
- "# Unique Needles" → the victim-count figure (10k on 2026-10-20 → "close to 10,000").
- "Needles by Region" pie → the regional clause. 2026-10-20 reading: us_canada 5.04k (50.35%),
  eu_russia 2.39k (23.82%), apac 1.26k (12.60%), south_america 618 (6.17%), mid-east_africa
  491 (4.90%), anzac 191 (1.91%). The legend has a second page (probably "global") — not read.
- "Needles by Threat Type" pie: ransomware 8.63k (86.26%), data_breach 1.38k (13.74%). Not used
  in any clause so far.
- The sector alternative (technology ≈ 10 percent) comes from the industry chart further down.
Rounding rule as published: round to the nearest friendly number, say "over" when the dashboard
value sits above it (50.35 → "over 50", 12.60 → "over 10", 6.17 → "over 5") and "nearly" when it
sits just below (23.82 → "nearly 25", 4.90 → "nearly 5", 1.91 → "nearly 2"). When a new dashboard
screenshot is pasted, add a row to the figure table above and refresh this reading.

### Stat clauses (per published entries; dashboard percentages are ROUNDED to friendly
numbers and region names are written out in prose)
| Region (Wagtail value) | Clause |
|---|---|
| us_canada (~50%) | "over 50 percent are based in the U.S.-Canada region" |
| eu_russia (~24%) | "nearly 25 percent are based in the Europe-Russia region" (published: HPC Hamburg 10-15, Brenner Basistunnel 10-19) |
| apac (~12.5%) | "over 10 percent are based in the Asia-Pacific region" (The Gentlemen entries 10-19) — the Everest entries of the same date used "nearly 15 percent are based in the Asia-Pacific region". Default to "over 10 percent"; flag the choice and confirm with the analyst. |
| south_america (~6%) | "over 5 percent are based in the South America region" |
| mid-east_africa (~5%) | "nearly 5 percent are based in the Middle East and Africa region" |
| anzac (~2%) | "nearly 2 percent are based in the ANZAC region" |

**Industry-sector alternative**: the clause may cite the sector instead of the region —
"of which nearly 10 percent are from the technology sector" (published Vexy entries
polisee, Japan and Data-Core Systems, U.S., both industry technology, 10-19). Only the
technology figure is published; use it when the analyst asks for a sector clause.

## Contents block order (analyst rule, 2026-10-20)
**Content first, then the HTML Code block, then the Image block.** The Content paragraph is
always Contents block 0 and the Code block is block 1; the Image block is added by the analyst
after them. The scripts enforce this (Content → `contents-0-value`, Code → `contents-1-value-*`),
so never add the Code or Image block before running a script — it would shift the indexes. The
text template handed to the analyst lists them in the same order: content paragraph, then code block.

## Code block (raw leak text)
- Language: **HTML**. Content = text extracted from the screenshot in EXACT visual order,
  top to bottom: listing name line, then description paragraph (domains/zoominfo link lead
  the paragraph as shown), then the timer/button line ("Activates in H:MM:SS" or
  "Ends in5d 11h ...") LAST. Nothing reordered, reworded, or dropped. If screenshot text is
  cut off mid-sentence, transcribe as shown and tell the analyst to complete it from the
  live listing.
- Paste the full listing text even when it runs to tens of thousands of words (Everest
  write-ups such as "bbt-se.com 812 GB DataBase" + the whole CONTENTS document). The first
  line is the listing header exactly as shown ("tkni.co.kr 263 GB DataBase").
- Leak write-ups contain backslash paths; the console script keeps `leakText` as
  `String.raw` for that reason (see script facts).
- Storm listings are dashboard-style pages: transcribe, in visual order, the sector tag
  ("Aerospace & Defense", "Energy", "FinTech"), timer, listing name, "City · State · Country",
  "Posted N day ago", the progress-bar dates, the description paragraph (ends with "N-M
  Employees"), the STATUS / VIEWS / LIMIT DAY / POSTED cards, and the "Files on record" block;
  include "← Back" when the capture shows it. The Storm sector tag is NOT the Wagtail industry
  (Baltimore Tank Lines was tagged "Energy" but is a liquid-bulk trucking carrier → logistics).
- Pear listings are cards: name line with the red "ANNOUNCED" badge transcribed as text ("Caretaker
  Landscape and Tree Management ANNOUNCED"), one-line description, "Data Volume: 544 Gb", "Show more",
  "Date Company Notified: MM/DD/YYYY", "Site: domain", "Industry: ...", "Location: USA", "Revenue: $56.6M",
  "Details". "Show more" means the description is truncated — expand it on the live listing. The Pear
  "Industry" line is the leak site's label, not the Wagtail industry.
- DragonForce listings are a "Publication (www.victim.com)" modal: header line, victim handle in caps
  ("OAKGROVETECH"), "Publicated files: click here to go", the www and bare domain lines, data size,
  "Description" heading, the write-up (keep its blank line and em dashes), and the post date last
  ("2 October 2026"). The embedded screenshot of the victim's own website is an image — not transcribed.

## Fixed field values (every entry)
- TLP: GREEN (select value "1")
- Reliability: C - Fairly Reliable (value "3")
- Confidence: 3 - Possibly true (value "3")
- Threat type: **Ransomware** for ransomware groups; **Data Breach** for Everest.
- Language(s): English
- Tags: **"DDW Ransomware"** (ransomware groups) or **"DDW Communications"** (Everest), plus
  "DDW Victims", "PII Packages", "PII Sites", plus the country tag (multi-word countries are
  auto-quoted: "United States", "South Korea", "Costa Rica").
- Source Name(s) and Actor(s): the group tag (auto-quoted when multi-word; INC uses
  "INC Ransom").
- Source URL(s): the **victim-specific listing URL** where the site has one (see registry
  patterns), not just the site root.
- Image block: leak-site screenshot added manually by the analyst, titled
  `[Group]_[VictimNameNoSpaces]_1` — `n0n_EvolutionSpine_1`, `Vexy_Data-CoreSystems_1`,
  `INC_Coopecaja_1`, `Everest_BrennerBasistunnelBBTSE_1` (HPC kept underscores for spaces:
  `n0n_HPC_Hamburg_Port_Consulting_1`). Earlier Gentlemen entries titled the image like the
  page title; use `Group_Victim_1` going forward.
- Relations: if the victim already has a Needle from another group, add a Relation to it
  (published: Vexy Data-Core Systems → "FSOCIETY Ransomware: Data-Core Systems"). Search
  Needles for the victim name before finishing and tell the analyst what you found.

## IOCs
- Every domain in the leak text → its own **Domain** IOC (bare domain, e.g. k2machine.cz).
- Every ZoomInfo link → **Profile** IOC as full URL (https://www.zoominfo.com/c/...).
- No other IOC types unless the analyst asks.
- Observation: the published n0n, NightSpire and Everest examples carried no IOC rows even
  where the leak text named a domain (bbt-se.com, tkni.co.kr, bend.co.jp); INC and Vexy had
  one domain row. Still produce the Domain/Profile IOCs — the analyst can drop them.

## Region / Industry mapping
Authoritative mapping: `Industry_and_Geography_Tags.xlsx` rules (country → region column;
the sheet itself is not in this repo — the summary below is what future sessions have):
- US, Canada, **Mexico, Central America (Costa Rica confirmed), Caribbean** → us_canada
- Europe incl. Czech Republic, France, UK, Germany, Italy, **Turkey, Russia** → eu_russia
- APAC incl. Taiwan, China, Japan, South Korea, Thailand, India → apac
- Middle East OR Africa → mid-east_africa (Wagtail merges both sheet columns)
- Australia / New Zealand → anzac ; South America (Brazil) → south_america
- Unidentifiable target: region from the best geographic hint in the listing ("Colorado
  Texas" → us_canada); **no Industry block at all**.
Industry: check the victim's LinkedIn for their industry; pick the Wagtail top-level whose
sub-industries fit (law firms → legal_consulting; workwear retailer → retail_cpg;
machine/equipment makers → manufacturing). **Multiple Industry blocks are used when the
company spans several** (published examples: AirQ = defense_aerospace + manufacturing;
Europ Assistance South Africa = professional_services + insurance; HPC Hamburg Port
Consulting = legal_consulting + logistics; Evolution Spine spinal-implant maker =
manufacturing + healthcare; Taekwang network-security distributor/IT services = technology
+ security). Single-block examples: Brenner Basistunnel tunnel-project company =
construction; Coopecaja savings & credit cooperative = financial_services; polisee
policy-intelligence platform and Data-Core IT consulting = technology; Envision EyeCare
optometry clinics and dental practices = healthcare; Chugoku Bend expansion-joint maker =
manufacturing. Cable TV equipment distributor/repair (Tulsat) = communications, NOT
technology. Trucking carriers and ship-management contractors = logistics (the only
transport-type value confirmed to exist in Wagtail); a government-vessel contractor also gets
defense_aerospace (Patriot Maritime = logistics + defense_aerospace). Judgment calls awaiting
the analyst's published choice (2026-10-20): commercial landscaping (Caretaker) = professional_services
(construction is the alternative); wireless-concealment-system maker (Solar Communications International)
= manufacturing + communications; real-estate investment sponsor (Macfarlan Capital Partners) = financial_services
(use a real-estate value too if Wagtail has one); defense training/intelligence contractor (Oak Grove
Technologies) = defense_aerospace + professional_services.

## Threat group registry (onion source URLs)
| Group | Source URL pattern | Notes |
|---|---|---|
| Wallstreet | http://4dwiv37h7hhuhjpvtn72hme4ylcv3qoe65arfc6mbweal7als6ma7pyd.onion/ | single word, no quotes |
| The Gentlemen | http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/ | multi-word → quoted in tags; no "the" before name in content |
| n0n | http://nongzecboljwv3yfndkggsybsglfrkffw7bvk2zemuteoxe6etpusnad.onion/#v-<victim-slug> | per-victim fragment: #v-hpc-hamburg.de, #v-evospine, #v-envision; Ransomware |
| NightSpire | http://nspirep7orjq73k2x2fwh2mxgh74vm2now6cdbnnxjk2f5wn34bmdxad.onion/database/<id> | e.g. /database/1895; Ransomware |
| INC Ransom | http://incblog6qu4y4mm4zvw5nrmue6qbwtgjsxpw6b7ixzssu36tsajldoad.onion/blog/disclosures/<hash> | title/content "INC"; Source/Actor tag "INC Ransom"; Ransomware |
| Vexy | http://vexytsr3chimdz6siwaqi2lvxxwfkxvffkpwyanr2llequ2hkm56jvqd.onion/blog | blog root used for both published entries; Ransomware |
| Everest | http://everestndkvzcibcje2cqxhre2hmmybl3rn2gwzwsblz7gx6uryn5rad.onion/news/<victim-slug> | Data Breach; title "Everest: X"; tag "DDW Communications"; e.g. /news/brenner-base-tunnel (two other published Everest entries left Source URL blank — fill it when the listing URL is known) |
| Storm | http://yqhecvqtdvq6p7duqcgw2qca77spbgakxcoibtx6zpvfshltsbbbhfqd.onion/ | Ransomware; title "Storm Ransomware: X"; each listing is its own detail page ("← Back" link) but the per-victim path has not been captured yet — use the site root unless the analyst copies the listing URL from the address bar; first entries 2026-10-20 (Patriot Maritime, Baltimore Tank Lines, Merit Financial Group) |
| Pear | http://pearsmob5sn44ismokiusuld34pnfwi6ctgin3qbvonpoob4lh3rmtqd.onion/ | Ransomware per analyst ("pear ransomware"); title "Pear Ransomware: X", group cased "Pear" (trackers write pear/PEAR; the group styles itself "Pure Extraction And Ransom (PEAR) Team" and Halcyon calls it data-theft-only, so switch to the Everest format only if the analyst says so). Cards have a "Details" link to a per-victim page — path not captured yet, site root used; first entries 2026-10-20 (Caretaker Landscape and Tree Management, Solar Communications International, Macfarlan Capital Partners) |
| DragonForce | http://xjhmtitnrdrgzw4vmsghirdoo2fk35a3tzj4enlmah4pvehdspydsiyd.onion/blog | Ransomware (RaaS); one word, capital F ("DragonForce", analyst wrote "dragon force"); listings open as a "Publication (www.victim.com)" modal on the blog — per-victim path not captured, /blog used; first entry 2026-10-20 (Oak Grove Technologies) |

## Console script (`wagtail-autofill.js`)
Fill the variables block at the top per victim and paste the whole file into the browser
console (F12) on the Wagtail add/edit page. Hard-won implementation facts — do not regress:
1. Region/Industry/Threat are single-block-type StreamFields: clicking + inserts the block
   DIRECTLY (no chooser menu). Wait for the select to appear, then set it. The Contents
   StreamField DOES open a chooser menu (Content / Code / Image options).
2. The Content block is Draftail (Draft.js + React). Setting the hidden input value does
   NOTHING (editor state overwrites it on save). Write via a synthetic ClipboardEvent
   'paste' with DataTransfer (handled inside Draft state — safe). `execCommand('insertText')`
   is fallback only: it triggers a React removeChild crash that can wipe the editor.
   Clear existing text with selectAll ONLY when the editor is non-empty. If all else fails,
   `copy(text)` puts the paragraph on the clipboard for manual Ctrl+V.
3. IOCs are a Django InlinePanel: click #id_iocs-ADD, then target the LAST
   [data-inline-panel-child] row's select[name$="-type"] / input[name$="-value"].
4. The script is idempotent: re-running on a partially filled page skips filled fields.
5. A VERIFY summary prints at the end; "⚠️ NOT SYNCED" on Content → click the block,
   type a space, delete it, then save.
6. `leakText` MUST be a `String.raw` template. Leak write-ups contain Windows paths like
   `\02.02.NC_Chiuse\094.pdf`; a plain template literal throws "Octal escape sequences are
   not allowed in template strings" and the whole script never runs. `String.raw` still
   parses a backtick and `${`, so inside the text write a backtick as `${'`'}` and a literal
   `${` as `${'${'}`.
7. Per-group variables: `sourceActorName` (INC → "INC Ransom"), `titleSeparator` (Everest
   → ": "), `threatType` ("ransomware"; Everest → Data Breach), `ddwTag` ("DDW Ransomware";
   Everest → "DDW Communications"), `industryValues` (`[]` for an unidentifiable target).
   The Data Breach select value has not been read from the live page — check the option
   value in F12 before an Everest entry; the script now prints the available option values
   if the one given does not exist.
8. The body is ONE function, `fillNeedle(cfg, win)`: every DOM, jQuery, event constructor and
   timer call goes through `win`, so the same code can fill a tab opened by the batch runner.
   It returns the VERIFY summary (title, region, industries, threat, content sync, code, IOCs,
   imageTitle, warnings) and prints it in `win`'s console. The pasted script ends with the
   single-victim call after the `// ---- single-victim run` marker; make-batch.js cuts there.
   Per-victim scripts in `scripts/` = header + variables + the base body from the `// ----`
   marker; regenerate them all whenever the base body changes (scratch script: take each
   file up to the marker, append the base from the marker; check `node --check` + a diff of
   the body against the base).

## Batch runs (`wagtail-batch.js`, `make-batch.js`, `batch/`)
The analyst wants to open the add page for every victim and apply the console code in one go,
with console code only (no extension, no local tooling). Build ONE paste-ready file per batch
here in the repo:
```
node make-batch.js batch/2026-10-20.js scripts/storm_*.js scripts/pear_*.js scripts/dragonforce_*.js
```
`make-batch.js` evaluates each victim script's variables block (up to the `// ----` marker) with
`vm`, embeds the configs as JSON (`QUEUE`), copies `fillNeedle()` out of `wagtail-autofill.js` and
drops both into the `wagtail-batch.js` panel template (lines starting `// [TEMPLATE]` are
stripped). Commit the built file under `batch/` and hand its path to the analyst.
How the analyst uses it: paste the whole file into the console on ANY Wagtail admin page → a
green panel lists the queue → set the "Add Needle" page URL once (prefilled when pasted on the
add page; remembered in localStorage key `zfNeedleAddUrl`) → "Open & fill next" opens a new tab
on that URL (`window.open`, same origin), waits for `#id_title`, `#contents-root` and
`jQuery.fn.tagit` (up to 2 min; cross-origin SecurityErrors during an SSO redirect are swallowed),
then runs `fillNeedle(cfg, newTab)` from the opener. The analyst adds the Image block, a Relation
if needed, reads VERIFY in the new tab's console, saves the draft, returns and clicks again.
"Fill this tab" fills the next victim into the current add page; "Skip" moves on; re-pasting the
file restarts the queue. Browsers may ask once to allow pop-ups for the admin host. Saving stays
manual on purpose: the screenshot upload and the Relation cannot be scripted.
Verified 2026-10-20 against a mock of the Wagtail form (same ids, Draftail-style paste handler,
StreamField + buttons, IOC InlinePanel) with Playwright: 7 victims filled in 7 fresh tabs, content
synced, code block and IOC rows set, no page errors. The real admin has only been exercised with
the single-victim scripts so far — the first live batch run should start with one victim.

## Per-victim deliverable to the analyst
1. The filled text template (title, fields, content paragraph, code block, IOCs, tags).
2. The full console script with ALL variables pre-filled (contentText as a plain literal
   string, never assembled from template variables).
   For two or more victims also build and commit `batch/<date>.js` with make-batch.js and
   give the analyst that one file (see "Batch runs").
3. Flags for anything assumed (missing group/date), truncated leak text, judgment-call
   industry picks, the stat-clause choice where two published variants exist (APAC,
   region vs sector), and any prior Needle on the same victim that needs a Relation.
