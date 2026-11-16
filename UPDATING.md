# Updating the site

The site lives in `docs/` (plain HTML/CSS/JS, no build step). It covers the Chery Q only. Raw chat exports stay outside `docs/` and are git-ignored (any file with "chat" in its name), because they contain phone numbers.

## Processing a chat delta
1. Save the new export in this folder (any name containing "chat", e.g. `20-11-chat.masked.md`).
2. Ask Claude: "Update the site with this delta." It should:
   - add new findings to the relevant tab: Dealer truths, Charging, Providers, Conflicting info, Stock & shipping, Tyres & wheels, Tips, Issues & questions, Links;
   - move answered open questions out of Issues & questions, and add any new disagreements to Conflicting info;
   - update `docs/assets/site-data.js`: set `lastMessage` to the timestamp of the last message processed (`YYYY-MM-DDTHH:MM`) and add a `changelog` entry with the same value in `through`.
3. The header and footer read the timestamp from `site-data.js`. Nothing else needs touching.

## WhatsApp link
Paste the invite link into `whatsappUrl` in `docs/assets/site-data.js`. It appears once, as the "Join WhatsApp group" button in the header.

## Editorial rules
- Information only: no intros, slogans or advice padding.
- Anonymise: no phone numbers, member names, salesperson names, or dealership/branch names. Dealers are summarised by province only.
- Providers (third-party businesses) may be named for positive or neutral, factual feedback only. No contact details; owners ask in the group.
- Say "one owner" or "several owners". Don't present a single anecdote as general fact.
- Mark disagreement in Conflicting info rather than picking a winner.

## Publishing
See `DEPLOY.md`.
