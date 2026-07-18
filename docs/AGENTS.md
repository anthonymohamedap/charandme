# AGENTS.md
*Operating protocol for any AI agent working on this repository. Read this first, every session.*

## 1. What this is
A private app for two people — a shared memory space. Not social media, not a messenger, not a journal, not a habit tracker. Its philosophy: **lower the cost of keeping the ordinary; let time do the rest.** You are here to extend it, never to average it toward every other app.

## 2. Precedence Law
```
1. docs/canon/design-foundation.md   — wins over everything
2. docs/canon/master.txt             — philosophy, FORBIDDEN, success criteria
3. docs/canon/emotional-journey.md   — emotional intent per surface
4. docs/V1_PLAN.md                   — current scope
5. Everything else, including code   — derived. Conflicts with canon are bugs.
```
Canon is frozen. Never edit it. If a task requires changing it, stop and ask Anthony.

## 3. Context loading
| Task | Load |
|---|---|
| Any task | AGENTS.md · PROMPT_LIBRARY.md Part 3 (Non-Negotiables) + Part 4 (design anchor) |
| Build/change a screen | + emotional-journey § for that surface (including its "what must NOT exist") |
| Write any user-visible string | + design-foundation §4 (voice and copy) |
| Anything with dates/time/the daily hour | + V1_PLAN §3 rules; never invent a time rule locally |
| Styling/tokens/components | + design-foundation §6–§12 |

## 4. Hard prohibitions
The full list is PROMPT_LIBRARY.md Part 3. Load it every session. The ones agents violate most, in good faith:
- No loading spinners — waiting states are typographic or nothing.
- No bounce or spring curves. The curve is `cubic-bezier(0.22, 0.61, 0.36, 1)`.
- No green checkmarks — a confirmation is a sentence.
- No exclamation marks, no "Oops", no Title Case, anywhere.
- No counters, badges, streaks, scores, or numbers of any kind in the UI.
- Never "optimize away" a documented delay. Latency is intimacy here.
- The machine may arrange; it may never author. No AI-written words between the couple.

## 5. The four questions
Every change must answer yes to all four:
1. Does it help keep an ordinary thing?
2. Does it get better with age?
3. Would it survive a bad week?
4. Does it help the couple focus on each other, not the interface?

## 6. Stop and ask a human when a task would
Add a feature not in V1_PLAN · introduce a color, token, or font not in the system · add an animation not described in canon · add any metric, counter, or analytics event · make anything visible to a third party · touch canon.

## 7. Vocabulary
Lamplight `#D9A441` = Anthony. Dusk `#6B5A8E` = her. Overlap `#8A6A6E` = both. The object is the **day** (a page); things kept are **entries** (a line, a photo, an answer) — never "posts", "content", or "memories" in UI copy. Users are "the two of you", never "users".

## 8. Definition of done, per screen
All states built (empty · loading · populated · error · offline · one-partner-only) · copy follows design-foundation §4 · contrast ≥4.5:1 (7:1 long-form) · touch targets ≥44pt · reduced motion respected · screenshot self-critiqued against Part 3 before presenting.
