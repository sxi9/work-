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
- **Victim name = legal name with corporate suffix stripped** (no Inc, LLC, LLP, Ltd, Ltée,
  s.r.o., SAS, AB, GmbH, Co., etc.). Example: leak lists "Machine sro", legal name
  "K2 Machine s.r.o." → use **K2 Machine** everywhere (title, target tag, content, image title).
- Title format: `[Group] Ransomware: [Victim Name]`.

## Content paragraph (Draftail "Content" block) — exact pattern
> On [Month D, YYYY], ZeroFox observed an update on the [Group] ransomware leak site
> targeting [Victim Name], a [country]-based [short description]. ZeroFox has detected more
> than 9,850 ransomware and digital extortion victims in the past year, of which
> [regional stat clause].

- NEVER use "likely referencing" — always the direct "targeting X, a Y-based Z" form.
- Description is ONE short plain phrase ("a U.S.-based office furniture manufacturer"),
  no founding dates, revenue, or capability lists.
- Drop the leading "the" before group names that start with "The":
  "an update on **The Gentlemen** ransomware leak site" but "an update on **the Wallstreet**
  ransomware leak site".

### Regional stat clauses (from DarkOps Needles Insights Superset dashboard, pulled 2026-10-16;
refresh when the analyst sends a new dashboard screenshot — total was 9.9k unique needles)
| Region (Wagtail value) | Clause |
|---|---|
| us_canada (50.39%) | "over 50 percent are based in the U.S.-Canada region" |
| eu_russia (23.87%) | "over 23 percent are based in the EU-Russia region" |
| apac (12.51%) | "over 12 percent are based in the APAC region" |
| south_america (6.14%) | "over 6 percent are based in the South America region" |
| mid-east_africa (4.89%) | "nearly 5 percent are based in the Mid-East/Africa region" |
| anzac (1.94%) | "nearly 2 percent are based in the ANZAC region" |

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
Industry: pick the Wagtail top-level whose sub-industries fit (e.g. law firms →
legal_consulting; workwear retailer → retail_cpg; machine/equipment makers → manufacturing).
Semiconductor-adjacent metal-parts makers = manufacturing (flag technology as alternative).

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
