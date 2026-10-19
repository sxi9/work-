# DDW Ransomware Victim Entry Workflow (ZeroFox Wagtail / Needles)

This repo is the shared memory for creating ransomware-victim "Needles page" entries in
the ZeroFox intel Wagtail admin (https://intel-api.zerofox.com/wagtail/admin/). When the
analyst (hkumar@zerofox.com) pastes a leak-site screenshot or raw leak text plus a group
name, produce (1) the filled text template and (2) a ready-to-run browser console script
(see `wagtail-autofill.js`). Follow every rule below exactly — they were refined over many
entries and the examples in `victims-log.md`.

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
- Title format: `[Group] Ransomware: [Victim Name]`.

## Content paragraph (Draftail "Content" block) — exact pattern
> On [Month D, YYYY], ZeroFox observed an update on the [Group] ransomware leak site
> targeting [Victim Name], a [country]-based [short description]. ZeroFox has detected
> close to 9,950 ransomware and digital extortion victims in the past year, of which
> [regional stat clause].

- NEVER use "likely referencing" — always the direct "targeting X, a Y-based Z" form.
- Description is ONE short plain phrase ("a U.S.-based office furniture manufacturer"),
  no founding dates, revenue, or capability lists. Base the description on INDEPENDENT
  RESEARCH of the victim's website/LinkedIn, not just the leak screenshot text.
- When the name is self-explanatory (university, hospital, school), NO description —
  just the country: "targeting Wellington College International School Bangkok, Thailand."
- A recent rebrand goes in parentheses: "targeting Europ Assistance South Africa
  (rebranded as AZOZA), a South Africa-based provider of ...".
- Drop the leading "the" before group names that start with "The":
  "an update on **The Gentlemen** ransomware leak site" but "an update on **the Wallstreet**
  ransomware leak site".

### Regional stat clauses (figure and clauses per published 2026-10-19 entries; dashboard
percentages are ROUNDED to friendly numbers — 6–7% → "over 5 percent", 8–9% → "close to
10 percent", 12.5% → "over 10 percent" — and region names are written out in prose)
| Region (Wagtail value) | Clause |
|---|---|
| us_canada (~50%) | "over 50 percent are based in the U.S.-Canada region" |
| eu_russia (~24%) | "over 20 percent are based in the EU-Russia region" (no published example yet — confirm with analyst) |
| apac (~12.5%) | "over 10 percent are based in the Asia-Pacific region" |
| south_america (~6%) | "over 5 percent are based in the South America region" |
| mid-east_africa (~5%) | "nearly 5 percent are based in the Middle East and Africa region" |
| anzac (~2%) | "nearly 2 percent are based in the ANZAC region" |

## Code block (raw leak text)
- Language: **HTML**. Content = text extracted from the screenshot in EXACT visual order,
  top to bottom: listing name line, then description paragraph (domains/zoominfo link lead
  the paragraph as shown), then the timer/button line ("Activates in H:MM:SS" or
  "Ends in5d 11h ...") LAST. Nothing reordered, reworded, or dropped. If screenshot text is
  cut off mid-sentence, transcribe as shown and tell the analyst to complete it from the
  live listing.

## Fixed field values (every entry)
- TLP: GREEN (select value "1")
- Reliability: C - Fairly Reliable (value "3")
- Confidence: 3 - Possibly true (value "3")
- Threat type: Ransomware
- Language(s): English
- Tags: "DDW Ransomware", "DDW Victims", "PII Packages", "PII Sites", plus the country tag
- Source Name(s) and Actor(s): the group name (tag widget auto-quotes multi-word names)
- Image block: leak-site screenshot, titled exactly like the page title (added manually by analyst)

## IOCs
- Every domain in the leak text → its own **Domain** IOC (bare domain, e.g. k2machine.cz).
- Every ZoomInfo link → **Profile** IOC as full URL (https://www.zoominfo.com/c/...).
- No other IOC types unless the analyst asks.

## Region / Industry mapping
Authoritative mapping: `Industry_and_Geography_Tags.xlsx` rules (country → region column):
- US, Canada, **Mexico, Central America, Caribbean** → us_canada
- Europe incl. Czech Republic, France, UK, **Turkey, Russia** → eu_russia
- APAC incl. Taiwan, China, Japan, India → apac
- Middle East OR Africa → mid-east_africa (Wagtail merges both sheet columns)
- Australia / New Zealand → anzac ; South America → south_america
Industry: check the victim's LinkedIn for their industry; pick the Wagtail top-level whose
sub-industries fit (law firms → legal_consulting; workwear retailer → retail_cpg;
machine/equipment makers → manufacturing). **Multiple Industry blocks are used when the
company spans several** (published examples: AirQ = defense_aerospace + manufacturing;
Europ Assistance South Africa = professional_services + insurance). Cable TV equipment
distributor/repair (Tulsat) = communications, NOT technology.

## Threat group registry (onion source URLs)
| Group | Source URL | Notes |
|---|---|---|
| Wallstreet | http://4dwiv37h7hhuhjpvtn72hme4ylcv3qoe65arfc6mbweal7als6ma7pyd.onion/ | single word, no quotes |
| The Gentlemen | http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/ | multi-word → quoted in tags; no "the" before name in content |

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

## Per-victim deliverable to the analyst
1. The filled text template (title, fields, content paragraph, code block, IOCs, tags).
2. The full console script with ALL variables pre-filled (contentText as a plain literal
   string, never assembled from template variables).
3. Flags for anything assumed (missing group/date), truncated leak text, or judgment-call
   industry picks.
