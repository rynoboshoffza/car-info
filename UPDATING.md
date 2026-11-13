# Updating the site

The site lives in `docs/` (plain HTML/CSS/JS, no build step). Raw chat exports stay outside `docs/` and are git-ignored, because they contain phone numbers.

## Publishing
See `DEPLOY.md` for the step-by-step GitHub Pages guide and where to paste the WhatsApp link (`docs/assets/site-data.js`, `whatsappUrl`).

## Dealers
Dealers are never named, not even by codename. `dealers.html` summarises experiences at province level and explains why. When processing a delta, fold new dealer feedback into those summaries without adding any branch, group or staff detail that could identify a single dealership.

## Processing a chat delta
1. Save the new export in this folder (e.g. `chat-2026-11-20.txt`) or in `chats/`.
2. Ask Claude: "Update the site with this delta." It should:
   - add new findings to the relevant model pages (dealer truths, charging, stock, tips, tyres, issues),
   - mark answered items in `known-issues.html` open questions and refresh stock/ETA data,
   - update `docs/assets/site-data.js`: `lastUpdated`, `chatCovered`, and add a `changelog` entry.
3. The "Updated …" badge in the header and the footer read from `site-data.js`, so nothing else needs touching.

## Editorial rules
- Anonymise: no phone numbers, member names, salesperson names, or dealership/branch names. Dealers are summarised by province only.
- Label claims: `tag report` (owner report), `tag open` (unverified/open), `tag fact` (spec/official).
- Dealer comments are single anecdotes, framed as such.

## Adding another car model
1. Copy `docs/chery-q/` to `docs/<new-slug>/` and replace the content.
2. Add an entry to `models` in `docs/assets/site-data.js` (slug, name, tagline, pages). The home page cards and sub-navigation update automatically.
3. Set each page's `<body data-model="<new-slug>" data-page="<page-slug>">`.
