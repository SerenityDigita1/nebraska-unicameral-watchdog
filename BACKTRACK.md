# Backtrack

Pre-change default branch: `main`

Pre-change SHA: `becb18b43575570d744b3f742b5b329703381ac7`

Commit subject at that SHA: Ping Discord on newsletter signups

Recorded: 2026-10-17, before the socialism series pages were added.

Working branch for this change: `cursor/add-socialism-series-3124`

## Files touched

New:

- `BACKTRACK.md`
- `content/is-it-socialism-mixed-economy-nebraska.md`
- `content/where-the-money-goes-tax-breaks-buybacks-pay.md`
- `lib/article-markdown.mjs`
- `components/MarkdownArticle.jsx`
- `components/SeriesNav.jsx`
- `data/is-it-socialism.js`
- `data/where-the-money-goes.js`
- `app/is-it-socialism-mixed-economy-nebraska/page.jsx`
- `app/is-it-socialism-mixed-economy-nebraska/opengraph-image.jsx`
- `app/where-the-money-goes-tax-breaks-buybacks-pay/page.jsx`
- `app/where-the-money-goes-tax-breaks-buybacks-pay/opengraph-image.jsx`

Modified:

- `data/topics.js`

Not modified on purpose:

- `app/sitemap.js` builds the sitemap from directories under `app/` that contain a page file. The two new routes are included as soon as those pages exist.
- `app/layout.jsx` already sets `metadataBase` and the default Open Graph image. Each new article sets its own title, description, Open Graph, and Twitter metadata the same way `/ricketts-iran` does.

## Revert

These steps return the tree to the pre-change commit above. Do not force-push `main`.

### Pull request still open, not merged

```bash
git checkout main
git reset --hard becb18b43575570d744b3f742b5b329703381ac7
git push origin --delete cursor/add-socialism-series-3124
```

Then close the pull request without merging.

To drop only the local branch and keep the remote branch until the pull request is closed:

```bash
git checkout main
git branch -D cursor/add-socialism-series-3124
git reset --hard becb18b43575570d744b3f742b5b329703381ac7
```

### Restore the touched paths without moving HEAD

Run this from a checkout that still contains the change:

```bash
git checkout becb18b43575570d744b3f742b5b329703381ac7 -- data/topics.js
rm -rf \
  app/is-it-socialism-mixed-economy-nebraska \
  app/where-the-money-goes-tax-breaks-buybacks-pay \
  content/is-it-socialism-mixed-economy-nebraska.md \
  content/where-the-money-goes-tax-breaks-buybacks-pay.md \
  lib/article-markdown.mjs \
  components/MarkdownArticle.jsx \
  components/SeriesNav.jsx \
  data/is-it-socialism.js \
  data/where-the-money-goes.js \
  BACKTRACK.md
```

### After a squash merge onto main

```bash
git checkout main
git pull origin main
git revert <squash-commit-sha> --no-edit
git push origin main
```

### After a merge commit onto main

```bash
git checkout main
git pull origin main
git revert -m 1 <merge-commit-sha> --no-edit
git push origin main
```
