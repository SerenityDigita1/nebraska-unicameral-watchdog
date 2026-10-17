# Backtrack

Pre-change default branch: `main`

Pre-change SHA: `5d0dd1384bdc503b24499b38aa3033101073de79`

Commit subject at that SHA: Add mixed-economy series, parts 1 and 2 (#8)

Recorded: 2026-10-17, before Part 3 of the series was added.

Working branch for this change: `cursor/same-rules-part-3-3124`

Parts 1 and 2 are already on `main` at that SHA. This note replaces the earlier backtrack for `becb18b43575570d744b3f742b5b329703381ac7`, which was the commit before those two parts.

## Files touched

New:

- `content/same-rules-for-every-dollar-contracts-audits.md`
- `data/same-rules.js`
- `app/same-rules-for-every-dollar-contracts-audits/page.jsx`
- `app/same-rules-for-every-dollar-contracts-audits/opengraph-image.jsx`

Modified:

- `BACKTRACK.md`
- `content/is-it-socialism-mixed-economy-nebraska.md`
- `content/where-the-money-goes-tax-breaks-buybacks-pay.md`
- `data/where-the-money-goes.js`
- `data/topics.js`

Not modified on purpose:

- `app/sitemap.js` builds the sitemap from directories under `app/` that contain a page file. `/same-rules-for-every-dollar-contracts-audits` is included as soon as the page exists.
- `components/MarkdownArticle.jsx` and `components/SeriesNav.jsx` already render the series. Part 3 uses them as Parts 1 and 2 do.

## Revert

These steps return the tree to the pre-change commit above. Do not force-push `main`.

### Pull request still open, not merged

```bash
git checkout main
git reset --hard 5d0dd1384bdc503b24499b38aa3033101073de79
git push origin --delete cursor/same-rules-part-3-3124
```

Then close the pull request without merging.

To drop only the local branch and keep the remote branch until the pull request is closed:

```bash
git checkout main
git branch -D cursor/same-rules-part-3-3124
git reset --hard 5d0dd1384bdc503b24499b38aa3033101073de79
```

### Restore the touched paths without moving HEAD

Run this from a checkout that still contains the change:

```bash
git checkout 5d0dd1384bdc503b24499b38aa3033101073de79 -- \
  BACKTRACK.md \
  content/is-it-socialism-mixed-economy-nebraska.md \
  content/where-the-money-goes-tax-breaks-buybacks-pay.md \
  data/where-the-money-goes.js \
  data/topics.js
rm -rf \
  app/same-rules-for-every-dollar-contracts-audits \
  content/same-rules-for-every-dollar-contracts-audits.md \
  data/same-rules.js
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
