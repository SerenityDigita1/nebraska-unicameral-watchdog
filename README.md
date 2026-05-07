# changemytrajectory.com — Nebraska Legislature Watchdog

A civic tool that tracks the Nebraska unicameral, translates legalese into
plain English, and follows the money. Built to inform everyday Nebraskans —
and to support a future run for office.

---

## Quick start (do this first)

1. **Put this folder in VS Code**
   Open VS Code → File → Open Folder → select this folder

2. **Install dependencies**
   Open the terminal (Ctrl+` or View → Terminal) and run:
   ```
   npm install
   ```

3. **Add your Anthropic API key**
   - Get a free key at https://console.anthropic.com
   - Open `.env.local`
   - Replace `your_api_key_here` with your actual key
   - Save the file

4. **Start the dev server**
   ```
   npm run dev
   ```
   Then open http://localhost:3000 in your browser.
   The bill translator will work immediately.

---

## Deploy to Vercel (go live in 5 minutes)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → import your repo
3. In Vercel project settings → Environment Variables → add:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your API key from console.anthropic.com
4. Deploy — Vercel gives you a live URL instantly
5. Point changemytrajectory.com to it in your domain registrar's DNS settings
   (Vercel has a step-by-step guide for this)

---

## Using Claude Code to build on this

Once you have Claude Code installed (`npm install -g @anthropic-ai/claude-code`),
open this folder in your terminal and run `claude`. Then try prompts like:

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
