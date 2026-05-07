# Nebraska Unicameral Watchdog

**Tracking the Nebraska Legislature — translated into plain English for everyday Nebraskans.**

Nebraska's unicameral is the only single-chamber state legislature in the country. 49 senators. No second chamber to slow things down. What they pass becomes law — and most Nebraskans never hear about it until it affects them.

This site changes that.

---

## What this site does

- **Bills & Debates** — Follow the most important bills moving through the 109th Legislature, explained in plain language. No legalese.
- **Translate a Bill** — Paste any bill text and get an instant plain-English breakdown: what it does, who it helps, who it hurts.
- **Governor's Desk** — Track what Gov. Pillen has signed, vetoed, or line-item vetoed — and what that means for Nebraskans.
- **Follow the Money** — See which PACs and donors are funding Nebraska legislative races, and what they're buying.

---

## Who built this

Built by a Nebraskan who believes people deserve to know what their government is actually doing — and who's paying for it.

---

## What's coming next

- [ ] Live bill data pulled automatically from Nebraska Legislature public records
- [ ] Senator lookup by zip code — find your senator and see their voting record
- [ ] NADC campaign finance integration — searchable donor data by senator
- [ ] Weekly email digest of what happened in Lincoln
- [ ] Social sharing — "share this bill explained in plain English"
- [ ] About page — the story behind the watchdog

---

## Technical setup (for developers)

Built with Next.js, Tailwind CSS, and the Claude AI API. Deployed on Vercel.

To run locally:
```
npm install
npm run dev
```

Add your Anthropic API key to `.env.local` to enable the bill translator:
```
ANTHROPIC_API_KEY=your_key_here
```
