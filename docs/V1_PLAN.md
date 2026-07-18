# V1 Plan
*A private app for two people: Anthony and her. Both iPhone. Built by Claude Code against the canon. Core loop only.*

Decisions locked: personal build (no other users, ever, unless we decide later) · both iPhone · core loop v1 · Claude Code implements.

---

## 1. What v1 is

Six surfaces, taken directly from emotional-journey.md §1–§5:

| # | Surface | Journey § | One line |
|---|---|---|---|
| 1 | First launch | §1 | Three lines in serif, one button: **Begin** |
| 2 | Onboarding | §2 | One question: *What do they call you?* |
| 3 | Pairing | §3 | One single-use key, the Overlap moment, then **choose your hour** together |
| 4 | Home — the page | §4 | Today's date spoken in words, the weather line, what you both kept, "Nothing yet." No scroll. The bottom is the bottom. |
| 5 | Keep | §4 | Two ways in v1: **a line** (note) and **a photo**. Sound and song come in v1.1. |
| 6 | The daily question | §5 | At your hour, both phones, same small question. Locked until you've both answered. |

**Deferred to v1.1** (not cut — the compounding test keeps them): one thing from before · developing camera · timeline / book of days · sound & song · dictionary · milestones · endings.

**Not in any version:** everything in NON_NEGOTIABLES (see PROMPT_LIBRARY.md Part 3).

---

## 2. Stack

| Layer | Choice | Why |
|---|---|---|
| App | **Expo (React Native, TypeScript)** | Master brief names RN; Claude Code works well with it; EAS handles builds without a Mac workflow. |
| Backend | **Supabase** (free tier) | Postgres + auth + photo storage + realtime for two users costs €0. Row-level security so only your two accounts see anything. |
| Daily question | Supabase **Edge Function + cron** | Fires at *your hour*, picks the question, sends push to both phones. |
| Push | **expo-notifications** | The quiet buzz at your hour. No other notification exists in v1. |
| Fonts | **Newsreader** (display) + **Source Serif 4** (long-form) + **Inter** (UI) | The canon's open-source path. GT Alpina/Söhne can replace them later if you ever want to buy licenses. |
| Distribution | **TestFlight** | Both phones install from a link; updates push automatically. |

**The one cost: Apple Developer Program, $99/year.** Required for TestFlight and push notifications. The free alternative is a PWA (home-screen web app) — workable, but haptics and the your-hour notification get worse, and those are load-bearing in this product. Recommendation: pay the $99.

---

## 3. Data model (sketch — Claude Code refines in DATA_MODEL.md)

```
couple      id · created_at · hour (their chosen time + timezone rule)
person      id · couple_id · display_name ("what they call you") · accent (lamplight|dusk)
day         id · couple_id · date            ← the one object. A page.
entry       id · day_id · person_id · kind (line|photo|answer) · body · media_url · kept_at
question    id · text · asked_on (per couple) ← small, about the day, never about the relationship
answer      = entry(kind:answer) · locked until both exist, then both reveal
```

Rules that live in code, sourced from canon: a day flips per TIME_MODEL logic (v1: the couple's chosen timezone, one shared day) · answers are invisible until both are in · no entry is ever auto-enhanced, cropped, or deduplicated · deletion is real deletion.

---

## 4. Build phases

**Phase 0 — Setup (you + me, ~1 evening)**
Apple Developer account · GitHub repo · Supabase project · Expo project scaffold · move docs into the repo:

```
/docs
  canon/           master.txt · design-foundation.md · emotional-journey.md   (frozen)
  PROMPT_LIBRARY.md · V1_PLAN.md · AGENTS.md
/app               (Expo project — Claude Code works here)
CLAUDE.md          → "Read /docs/AGENTS.md before anything."
```

**Phase 1 — Foundation**
Design tokens (the Part-4 palette, night first) · fonts loaded · base components: the page surface, serif/sans text, the entry row with its accent hairline, the sheet. Verified against DESIGN_FOUNDATION with screenshots before any feature is built.

**Phase 2 — Arrival**
First launch → onboarding → pairing → the Overlap moment → choose your hour. Two real accounts: yours and hers.

**Phase 3 — The everyday**
The page (home) · keep a line · keep a photo (native aspect ratio, paper mat, warm shadow) · sync between your phones.

**Phase 4 — The question**
Question bank (~90 questions to start — small, about the texture of the day) · the your-hour push · the lock · the mutual reveal.

**Phase 5 — Polish & ship**
The two haptics · dissolve transitions (0.98→1.00, the hand curve) · every empty/error/offline state as canon copy · TestFlight build on both phones.

Each phase = one or a few Claude Code sessions, each opened with the PROMPT_LIBRARY Part-2 session opener, each ending with the screenshot critique loop.

---

## 5. Acceptance (v1 is done when)

- You both open it at your hour, answer the same question, and see each other's answer.
- A kept line or photo appears on the other phone with the right accent hairline.
- The home screen ends. No scroll, no numbers, no badge anywhere.
- Every screen passes the Part-3 Non-Negotiables checked against a screenshot.
- A good session is forty seconds.
