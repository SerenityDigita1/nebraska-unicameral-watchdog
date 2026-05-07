# changemytrajectory.com — Nebraska Legislature Watchdog

A civic tool that tracks the Nebraska unicameral, translates legalese into
plain English, and follows the money. Built to inform everyday Nebraskans —
and to support a future run for office.

---

## the goal of this tool

Try prompts like:

- "Add a live feed that pulls today's bills from nebraskalegislature.gov"
- "Build an About page where I can write about why I'm running for office"
- "Add a senator lookup — user enters their zip code and sees their senator
   and how they've voted"
- "Build a NADC scraper that shows top donors for a given senator"
- "Add a newsletter signup so supporters can get weekly watchdog updates"

---

## File structure

```
changemytrajectory/
├── app/
│   ├── page.jsx              ← homepage
│   ├── layout.jsx            ← root layout
│   ├── globals.css           ← Tailwind
│   └── api/
│       └── translate/
│           └── route.js      ← Claude API call (server-side, key is safe)
├── components/
│   └── NebraskaWatchdog.jsx  ← the main dashboard component
├── .env.local                ← your API key (never commit this)
├── package.json
└── next.config.mjs
```

---

## What's next (Phase 2 + 3)

- [ ] Live bill data from Nebraska Legislature public search
- [ ] Senator lookup by zip code
- [ ] Voting record tracker per senator
- [ ] NADC campaign finance integration
- [ ] About / campaign page for your run for office
- [ ] Weekly email digest of what happened in Lincoln
- [ ] Social sharing — "share this bill explained in plain English"
