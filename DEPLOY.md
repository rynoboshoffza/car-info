# Deploy to GitHub Pages (about 10 minutes)

The site is the `docs/` folder. Everything else in this folder (chat exports, `PRIVATE-dealer-key.md`) is git-ignored and never published.

## One-time setup

1. **Add your WhatsApp link.** Open `docs/assets/site-data.js`, find `whatsappUrl: ""` and paste your invite link between the quotes (e.g. `https://chat.whatsapp.com/XXXXXXXX`). The "Join the group" buttons appear automatically.
2. **Create the repo.** On github.com: New repository, name it (e.g. `owner-notes`), choose **Public** (free Pages needs a public repo), leave "Add a README" unticked, click Create.
3. **Install Git** if you don't have it: https://git-scm.com/download/win
4. **Push the folder.** In a terminal, from this project folder (the one that contains `docs/`, not inside `docs/`):

```bash
git init
git add .
git status
```

5. **Check `git status`.** You must NOT see `chat.txt`, `chat.md` or `PRIVATE-dealer-key.md` in the list. If you do, stop and fix `.gitignore` first. Then:

```bash
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

6. **Turn on Pages.** In the repo: Settings → Pages → Build and deployment → Source: **Deploy from a branch** → Branch: `main`, Folder: `/docs` → Save.
7. **Wait ~1 minute**, then open `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

## Every update afterwards

1. Give Claude the new chat export; it edits the pages and `docs/assets/site-data.js` (last-processed-message timestamp, changelog).
2. Publish:

```bash
git add docs
git commit -m "Update from chat export"
git push
```

The site refreshes within a minute or two. Use `git add docs` (not `git add .`) so a stray chat file can never be staged.

## If something goes wrong
- **404 on the site:** check Pages is set to `main` and `/docs`, and wait a few minutes.
- **Styles missing:** make sure you opened the `github.io/REPO/` URL, not the raw file.
- **Chat file got committed by mistake:** tell Claude before pushing. Once pushed to a public repo, assume it has been seen; the history needs scrubbing and the invite link/numbers may need to be considered exposed.
