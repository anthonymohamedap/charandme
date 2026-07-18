# Prompt Library
*Condensed prompt-engineering guide for this project. Fills the `ai/PROMPT_LIBRARY.md` slot from DOCUMENTATION_ARCHITECTURE.md. Derived — canon always wins.*

---

## Part 1 — The 10 rules that actually matter

1. **Constraints, not adjectives.** Never "make it beautiful/premium." Say: 2 fonts max, 1 accent color per person, 5% accent ceiling, whitespace as separator, no bold weights.
2. **References, not taste.** Name what to match (Apple, Linear, Stripe, mid-century magazine spots, 1970s editorial) — AI can't invent taste, only imitate it.
3. **Forbid explicitly.** The FORBIDDEN list is the highest-leverage part of any prompt. Generic AI output happens when you don't ban it. Paste the Non-Negotiables block (Part 3) into every session.
4. **Lock the system, then reference it.** Never let AI reinvent tokens/type/spacing per screen. Point at DESIGN_SYSTEM values; instruct "consume, never invent."
5. **One objective per conversation.** "Today: the notebook surface only. Nothing else." Focus beats scope every time.
6. **Docs over prompts.** Stable .md files > 2,000-line prompts. Start sessions with: "Read the canon files. They are frozen. Extend, never rewrite."
7. **Precedence Law in every session.** DESIGN_FOUNDATION > MASTER > USER_JOURNEY > ADRs > everything else. Derived output that conflicts with canon is a bug.
8. **Separate thinking from output.** Research → ideate multiple concepts → compare → reject → then spec. Never ask for the final answer first.
9. **Force self-critique.** "Critique this as Apple HIG, as a first-time user, as an accessibility expert. Revise." First drafts are never shipped.
10. **Iterate visually.** AI cannot judge its own UI. Render → screenshot → feed back → improve. Loop until nothing feels generic.

Also: ask for every state (empty · loading · error · offline · aged · one-partner-only · dead), give the AI a role, define measurable success criteria.

---

## Part 2 — Session opener (paste at the start of every AI session)

```
ROLE
You are a senior product designer/engineer from the teams behind Apple HIG,
Linear, and Pentagram. You are not a UI generator.

CANON — frozen, read before anything:
- DESIGN_FOUNDATION.md   (wins all conflicts)
- master.txt             (philosophy, FORBIDDEN, success criteria)
- emotional-journey.md   (emotional intent per surface)
Extend them. Never rewrite them. If output conflicts with canon, the output is wrong.

THE FOUR QUESTIONS — every change must answer yes:
1. Does it help keep an ordinary thing?
2. Does it get better with age?
3. Would it survive a bad week?
4. Does it help the couple focus on each other, not the interface?

STOP AND ASK a human before: adding a feature, a token, a fifth color,
an undocumented animation, any counter/score/streak/metric, or anything
a third person could see.

TODAY'S OBJECTIVE: [one surface or document. nothing else.]
```

---

## Part 3 — Non-Negotiables block (paste into every tool: Claude, Cursor, v0, etc.)

```
NEVER — product: feed · likes · followers · third viewer · streaks · scores ·
gamification · engagement mechanics · AI writing on the couple's behalf ·
red badges · re-engagement notifications · "Year in Review" unasked.

NEVER — visual: pure #000 or #FFF · red for destruction (use #9C4B3F + a word) ·
success green (confirmation is a sentence, not a checkmark) · gradients as
surfaces · glassmorphism · neumorphism · Material/Bootstrap/Tailwind defaults ·
purple/blue SaaS gradients · oversized FABs · three-card marketing rows ·
template hero sections · stock illustration · illustrated people · emoji-heavy
UI · handwriting typefaces · hearts · pink · cursive · pill shapes · accent
above 5% of screen pixels · bold weights in UI (Regular + Medium only).

NEVER — motion: bounce/springs · confetti · sparkles · parallax on scroll ·
elastic overscroll on content · loading spinners (waiting is typographic or
nothing) · ambient shimmer/breathing backgrounds. Curve: cubic-bezier(0.22,
0.61, 0.36, 1). Dissolve, don't slide.

NEVER — copy: exclamation marks · "Oops" · Title Case · the word "memory" as
a noun in UI · machine-authored sentiment · apologetic empty states.
```

---

## Part 4 — Design-system anchor (paste when generating any UI)

```
Metaphor: paper under lamplight. One warm light source, above-left. Matte,
opaque surfaces. Content sits ON the surface; interface never sits on content.
Night mode is the primary mode, designed first.

Color (night): Room #131110 · Surface #1C1917 · Raised #242019 ·
Ink #EDE6DA · Muted #A0958A · Whisper #6A6158
Color (day): Paper #F4F0E8 · Aged #E9E2D6 · Ink #1A1613 · Muted #6B6259 · Whisper #CFC6B8
Accents (light, never fills, ≤5% of screen): Lamplight #D9A441 = you ·
Dusk #6B5A8E = them · Overlap #8A6A6E = both. Identity, not decoration.

Type: serif = the couple's words (GT Alpina / Lyon; OSS: Newsreader + Source
Serif 4). Sans = the machine (Söhne / Suisse; OSS: Inter). Never mixed in a
line. Sans has 3 sizes only: 15/13/11pt. Hierarchy from size + space, never
weight + color.

Layout: 8pt base, 28pt vertical rhythm (notebook rule). Asymmetric margins
with a gutter. One idea per screen. Three elevations only: page, card, sheet.
Corners: 4pt paper / 2pt photos. Nothing is a pill or circle (except a record
and a face).

Motion: interface 180–320ms, narrative 600–1200ms (≤5 uses in whole product).
Stillness at rest — the screen is a photograph. Haptics: one soft tick (kept),
one low double-tap (arrived). Nothing else vibrates.

Copy: sentence case · plain verbs (Keep, Add, Write, Open) · dates spoken
("two winters ago") · empty states are invitations ("Nothing from today yet.")
```

---

## Part 5 — Workflow templates

**New document** (one per session):
```
Generate <DOC>.md using canon + <dependencies>. It owns only <topic> — for
everything else, link, never restate. Rules must be numbered and falsifiable.
Then critique it as [Apple HIG / a contractor in month 14 / an agent with a
small context window] and revise. Do not stop at the first draft.
```

**New surface/screen**:
```
Load: emotional-journey §<n> (including "what must NOT exist"), DESIGN_SYSTEM,
COMPONENT_LIBRARY, MOTION_SPEC. Build only <surface>. Cover all states:
empty · first-ever · loading · populated · error · offline · one-partner-only ·
aged · dead. Cite the canon line for every design decision.
```

**Visual iteration loop**:
```
1. Generate  2. Render + screenshot  3. Feed screenshot back:
"What here still looks AI-generated or template-like? What violates the
Non-Negotiables? What would Linear's team cut?"  4. Revise  5. Repeat until
someone could recognize the product from three screens.
```

**Ideation** (before any spec):
```
Research how <problem> is felt in real life → brainstorm 10 concepts →
apply the compounding test (more valuable in year 3 than week 1, or cut)
and the plagiarism test (if BeReal/Instagram/Apple Journal could ship it
unchanged, it's not ours) → compare trade-offs → recommend one → then spec.
```

---

## Part 6 — Success criteria (end every major prompt with these)

- Recognizable from three screens alone.
- Still beautiful in ten years.
- Typography and spacing carry more personality than color or decoration.
- The interface disappears behind the relationship.
- A good session is forty seconds; the app runs out.
- Zero "template," "AI-generated," or placeholder feeling anywhere.
