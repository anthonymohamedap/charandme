# Setup — your steps, in order
*Everything I could prepare is already in this folder. These are the steps only you can do. Roughly one evening.*

## 1. Accounts (~30 min)

| Account | Where | Cost | Why |
|---|---|---|---|
| Apple Developer | developer.apple.com/programs | ~~$99/year~~ **done — you have one** | TestFlight + the your-hour push. |
| GitHub | github.com | free | The repo Claude Code works in. |
| Supabase | supabase.com | free | Database, photo storage, auth. |
| Expo | expo.dev | free | Builds the app in the cloud (EAS) — no Xcode needed. |


## 2. Install tools (~15 min)

1. **Node.js** — nodejs.org, LTS version.
2. **Git** — git-scm.com.
3. **Claude Code** — in a terminal (PowerShell): `npm install -g @anthropic-ai/claude-code`

## 3. Supabase project (~15 min)

1. Create a new project (region: eu-central / Frankfurt). Save the database password somewhere safe.
2. In the dashboard, open **SQL Editor** → paste the contents of `supabase/schema.sql` → Run.
3. Same again with `supabase/seed_questions.sql`.
4. **Storage** → create a private bucket named `photos`.
5. **Authentication → Users** → create two users manually (your email + hers, with passwords). No sign-up flow needed — there will only ever be two accounts.
6. From **Project Settings → API**, copy the *Project URL* and *anon key* — Claude Code will ask for them.

## 4. Repo (~10 min)

In a terminal, inside this folder:
```
git init
git add .
git commit -m "canon, plan, schema"
```
Then create an empty repo on GitHub and push (GitHub shows the two commands after creating it).

## 5. Start Claude Code — Phase 1

In this folder, run `claude`, then paste:

```
Read CLAUDE.md and docs/AGENTS.md, then docs/V1_PLAN.md.

Today's objective — Phase 1, Foundation, nothing else:
1. Scaffold the Expo app in /app (TypeScript, Expo Router).
2. Implement the design tokens from docs/PROMPT_LIBRARY.md Part 4 — night
   mode first. No other colors may exist in the codebase.
3. Load fonts: Newsreader (display serif), Source Serif 4 (long-form serif),
   Inter (UI sans, sizes 15/13/11 only, Regular and Medium only).
4. Build the base components: the page surface (paper grain at 3–5%, warm
   light above-left), serif and sans text primitives on the 28pt rhythm, the
   entry row with its accent hairline (lamplight/dusk), and the sheet.
5. Make a token gallery screen so I can see everything on my phone via
   Expo Go and judge it against the canon.

Do not build any feature surface yet. When done, self-critique against
docs/PROMPT_LIBRARY.md Part 3 and tell me what still feels generic.
```

Review the gallery on your phone. Iterate until the foundation feels right — everything else inherits from it.

## 6. The phases after that

Open each with the Part-2 session opener from `docs/PROMPT_LIBRARY.md`, one phase per session:
- **Phase 2** — first launch, onboarding, pairing, choose your hour (needs the Supabase URL + anon key)
- **Phase 3** — the page, keep a line, keep a photo
- **Phase 4** — the daily question, the lock, the your-hour push (needs Apple Developer approved + EAS build on real phones)
- **Phase 5** — haptics, dissolves, every empty state, TestFlight for both of you

## Decisions made

**Language: English** (decided before Phase 2). All copy follows the voice rules in design-foundation §4. The question bank in `supabase/seed_questions.sql` is still yours to edit — cut ones that don't fit your life, add ones that do.
