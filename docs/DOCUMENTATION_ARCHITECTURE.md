# Documentation Architecture

*The design of the documentation system. Not the documentation itself.*

This document defines every markdown file the project should contain, what each one owns, what it must never own, and the order in which they should be written. It invents no philosophy. Everything below is downstream of three existing documents and exists only to make them executable by people and agents who were not in the room.

---

## 0. The canon, and what it actually is

Three documents already exist. Before designing anything around them, they must be named accurately, because two of them are commonly misread.

| File | What it really is | Words | Status |
|---|---|---|---|
| **MASTER.md** | A **commissioning brief**. It states the team, the product's identity, the core philosophy, the design goals, a hard `FORBIDDEN` list, and success criteria — and then *commissions* a nine-part design language (§1 Principles → §9 Future Scalability) **that does not exist yet.** | ~860 | Canon. Frozen. |
| **DESIGN_FOUNDATION.md** | The **brand and design constitution**. 13 sections: brand philosophy, emotional principles, design language, UI personality, visual identity, typography, color, motion, icons, illustration, photography, materials, accessibility — plus a `What we will never ship` list. | ~3,900 | Canon. Frozen. |
| **USER_JOURNEY.md** *(currently `emotional-journey.md`)* | The **emotional specification**. 23 surfaces from first launch to year five, each with emotional goal / why it exists / before / after / primary action / what must not exist / how it compounds. Plus the **10 signature moments**. | ~8,100 | Canon. Frozen. |

**Three consequences follow, and they shape the entire architecture.**

**1. MASTER.md is a brief, so half of this architecture is its deliverable.** MASTER §2 (Foundations) → `DESIGN_SYSTEM.md`. §3 (Interaction System) → `INTERACTION_SYSTEM.md`. §4 (Component Library) → `COMPONENT_LIBRARY.md`. §5 (Content System) → `COPY_GUIDE.md` + `BRAND_IDENTITY.md`. §6 (Motion) → `MOTION_SPEC.md`. §7 (Emotional Rhythm) → `EMOTIONAL_RHYTHM.md`. §8 (Brand Identity) → `BRAND_IDENTITY.md`. §9 (Future Scalability) → `DESIGN_GOVERNANCE.md`. Every design document below carries a **"Discharges"** field naming the MASTER section it satisfies. When all nine are written, MASTER's request is closed and MASTER becomes purely a constitution.

**2. The canon already declares its own precedence.** MASTER: *"If anything conflicts with the Design Foundation, the Design Foundation always wins."* This is not my rule; it is the canon's. It is encoded as **Precedence Law** below and every agent must know it.

**3. There is exactly one duplication inside the canon, and I cannot fix it by rewriting.** MASTER's `# FORBIDDEN` list and DESIGN_FOUNDATION's `## What we will never ship` overlap (both ban gamification, streaks, engagement mechanics, cuteness) but are *not identical* (MASTER additionally bans glassmorphism, neumorphism, Material defaults, stock illustration, three-card marketing layouts; DESIGN_FOUNDATION additionally bans pure black/white, success green, gradients-as-surfaces, a handwriting typeface, bounce). Since canon is frozen, the resolution is a **derived, non-authoritative index** — `NON_NEGOTIABLES.md` — which merges both lists as *pointers with citations*, adds nothing, and is regenerated whenever canon changes. It is the file you paste into every AI tool. It is the only document permitted to restate canon, and only by reference.

---

## 1. Precedence Law

Every agent and every human resolves conflict in this order. No exceptions, no negotiation.

```
1. DESIGN_FOUNDATION.md      — wins over everything, per MASTER's own instruction
2. MASTER.md                 — philosophy, scope, FORBIDDEN, success criteria
3. USER_JOURNEY.md           — emotional intent per surface
4. decisions/ADR-*.md        — the only legal way to extend or overturn canon
5. Everything else           — derived. If derived conflicts with canon, derived is a bug.
```

**Canon is frozen.** No document, agent, or pull request may edit MASTER.md, DESIGN_FOUNDATION.md, or USER_JOURNEY.md. If reality demands a change to canon, it happens through an **ADR** that is explicitly labelled `AMENDS CANON`, requires a named human owner, and — once accepted — is appended to the canon file as a dated amendment block rather than a silent rewrite. The canon must remain readable as a historical object; this is a product about not overwriting the past, and its documentation should behave the same way.

---

## 2. Tier model

Documents live in one of five tiers. A tier tells you a document's authority, its volatility, and how carefully it must be reviewed.

| Tier | Name | Authority | Volatility | Change requires |
|---|---|---|---|---|
| 0 | **Canon** | Absolute | Never | ADR labelled `AMENDS CANON` + human owner |
| 1 | **Constitution & Governance** | Derived-authoritative | Rare | ADR |
| 2 | **Specification** | Authoritative within its domain | Per feature | Design + product review |
| 3 | **Implementation** | Authoritative for code | Per sprint | Code review |
| 4 | **Operational & Ephemeral** | Informational | Continuous | Anyone |

The rule that keeps this honest: **a lower tier may never contradict a higher tier, and a higher tier may never contain detail that belongs to a lower one.** Canon says *"the curve is a hand, not a spring"*; the token `--ease-hand: cubic-bezier(0.22,0.61,0.36,1)` lives in Tier 2. Canon says *why*; Tier 2 says *what*; Tier 3 says *how*.

---

## 3. The single-owner table

Before any specification: every topic in this product, and the one file that owns it. This is the anti-duplication contract. If you are about to write about a topic in a file that is not its owner, **link instead.**

| Topic | Sole owner | Everyone else must |
|---|---|---|
| Why the product exists | MASTER.md | link |
| Brand philosophy, prohibitions, aesthetic intent | DESIGN_FOUNDATION.md | link |
| What a surface should make you *feel* | USER_JOURNEY.md | link |
| Merged prohibition index | NON_NEGOTIABLES.md | link |
| Vocabulary (Overlap, Lamplight, Dusk, the stack…) | GLOSSARY.md | link |
| Token names and values | DESIGN_SYSTEM.md | consume |
| Component anatomy, states, variants | COMPONENT_LIBRARY.md | consume |
| Durations, curves, choreography | MOTION_SPEC.md | consume |
| Gestures, touch targets, focus/pressed/disabled | INTERACTION_SYSTEM.md | consume |
| Every user-visible string's *rules* | COPY_GUIDE.md | consume |
| What a feature *does* (behavior, states, acceptance) | `features/<surface>.md` | link |
| How time behaves (aging, resurfacing, delay windows) | TIME_MODEL.md | consume |
| Entities and their fields | DATA_MODEL.md | consume |
| Endpoints and payloads | API_CONTRACT.md | consume |
| Encryption, keys, threat model | SECURITY_AND_PRIVACY.md | link |
| Conflict resolution, two-device semantics | SYNC_AND_OFFLINE.md | consume |
| Export, deletion, the printed book, endings | DATA_LIFECYCLE.md | link |
| What we refuse to measure | SUCCESS_SIGNALS.md | link |
| Features we have rejected, and why | ANTI_ROADMAP.md | link |
| Any decision with a trade-off | `decisions/ADR-*.md` | link |

---

## 4. The tree

```
/
├── README.md                        T1  human entry point + map
├── AGENTS.md                        T1  agent entry point + context loading protocol
├── NON_NEGOTIABLES.md               T1  merged prohibition index (derived from canon)
├── GLOSSARY.md                      T1  the product's private language
├── DOC_STYLE_GUIDE.md               T1  how to write these documents
├── CHANGELOG.md                     T4  what shipped, when
│
├── canon/
│   ├── MASTER.md                    T0  ← exists
│   ├── DESIGN_FOUNDATION.md         T0  ← exists
│   └── USER_JOURNEY.md              T0  ← exists (rename of emotional-journey.md)
│
├── decisions/
│   ├── ADR_INDEX.md                 T1
│   ├── ADR_TEMPLATE.md              T1
│   └── ADR-0001-….md …             T1
│
├── product/
│   ├── PRODUCT_SCOPE.md             T2
│   ├── FEATURES.md                  T2  registry / index only
│   ├── TIME_MODEL.md                T2  ★ the keystone cross-cutting doc
│   ├── SUCCESS_SIGNALS.md           T2
│   ├── ROADMAP.md                   T4
│   ├── ANTI_ROADMAP.md              T2
│   ├── RESEARCH.md                  T4
│   └── features/
│       ├── onboarding-pairing.md    T2
│       ├── home.md                  T2
│       ├── daily-question.md        T2
│       ├── camera.md                T2
│       ├── developing.md            T2
│       ├── notebook.md              T2
│       ├── dictionary.md            T2
│       ├── music.md                 T2
│       ├── timeline.md              T2
│       ├── day-page.md              T2
│       ├── milestones.md            T2
│       ├── search.md                T2
│       ├── widgets.md               T2
│       ├── notifications.md         T2
│       ├── settings.md              T2
│       └── endings.md               T2
│
├── ux/
│   ├── INFORMATION_ARCHITECTURE.md  T2
│   ├── INTERACTION_SYSTEM.md        T2  ← MASTER §3
│   ├── COPY_GUIDE.md                T2  ← MASTER §5
│   └── ACCESSIBILITY.md             T2
│
├── design/
│   ├── DESIGN_SYSTEM.md             T2  ← MASTER §2
│   ├── COMPONENT_LIBRARY.md         T2  ← MASTER §4
│   ├── MOTION_SPEC.md               T2  ← MASTER §6
│   ├── EMOTIONAL_RHYTHM.md          T2  ← MASTER §7
│   ├── BRAND_IDENTITY.md            T2  ← MASTER §8
│   ├── DESIGN_GOVERNANCE.md         T1  ← MASTER §9
│   └── DESIGN_QA_CHECKLIST.md       T3
│
├── engineering/
│   ├── TECH_ARCHITECTURE.md         T2
│   ├── DATA_MODEL.md                T2
│   ├── API_CONTRACT.md              T2
│   ├── SYNC_AND_OFFLINE.md          T2
│   ├── SECURITY_AND_PRIVACY.md      T2
│   ├── MEDIA_PIPELINE.md            T2
│   ├── DATA_LIFECYCLE.md            T2
│   ├── IMPLEMENTATION_GUIDE.md      T3  ★ the spec→code contract
│   ├── CODING_STANDARDS.md          T3
│   └── PERFORMANCE_BUDGET.md        T3
│
├── frontend/
│   ├── FRONTEND_GUIDE.md            T3
│   └── TOKEN_PIPELINE.md            T3  ★ the anti-drift mechanism
│
├── backend/
│   └── BACKEND_GUIDE.md             T3
│
├── qa/
│   └── QA_STRATEGY.md               T3
│
├── deployment/
│   ├── RELEASE_PROCESS.md           T3
│   └── OBSERVABILITY_AND_INCIDENTS.md T3
│
├── ai/
│   └── PROMPT_LIBRARY.md            T3
│
├── marketing/
│   ├── BRAND_NARRATIVE.md           T2
│   ├── PRICING_AND_BUSINESS_MODEL.md T2
│   └── GTM_PLAN.md                  T4
│
├── future/
│   ├── LONGEVITY_AND_ARCHIVE.md     T2
│   └── FUTURE_CONSIDERATIONS.md     T4
│
└── (generated stubs — never hand-edited)
    ├── CLAUDE.md                    → pointer to AGENTS.md
    ├── .cursor/rules/project.mdc    → pointer to AGENTS.md
    └── .github/copilot-instructions.md → pointer to AGENTS.md
```

**On the tool stubs.** Claude Code, Cursor and Copilot each look for their own file. Writing three sets of rules is three sources of truth and guaranteed drift. Instead, each stub is ~15 lines, generated by a script from `AGENTS.md` + `NON_NEGOTIABLES.md`, and contains nothing but the Precedence Law, the prohibition index, and the instruction *"read AGENTS.md before doing anything."* They are build artifacts, not documents.

---

## 5. Document specifications

Every card uses the requested format. `Discharges` appears where a document closes a MASTER commission.

---

### TIER 1 — Constitution & Governance

---

#### `README.md`

- **Purpose** — Get a human from zero to oriented in five minutes.
- **Description** — The front door. States what the product is in three sentences (quoting nothing — linking to MASTER), the Precedence Law, the tier model, the map of every document, and the reading paths: *"I'm a new engineer" / "I'm a designer" / "I'm a PM" / "I'm an AI agent → go to AGENTS.md."*
- **Why it exists** — Without it, the first thing a newcomer does is read 13,000 words of canon in the wrong order and form a fuzzy impression instead of a precise one.
- **Source of Truth** — Repository structure and reading paths. Nothing else.
- **Depends On** — All. It is the last document to stabilize.
- **Referenced By** — Nothing (it's the root).
- **Sections** — What this is · Precedence Law · The three canon documents · Reading paths by role · Full document map · How to propose a change (→ ADR) · Repository conventions.
- **Writing Guidelines** — Under 800 words. Zero philosophy — the moment README starts explaining *why* the product exists, it has become a competing MASTER. Link, never summarize.
- **Update Rules** — Update in the same PR as any file addition, removal, or move. A stale map is worse than no map.
- **Size** — 600–800 words.
- **Example Usage** — A contractor joins in month 14 and needs to know what to read before touching the camera screen.
- **AI Agent Responsibilities** — Read once at session start if `AGENTS.md` is unavailable. Never cite README as authority for a product claim.

---

#### `AGENTS.md`

- **Purpose** — The operating protocol for every AI agent that touches this repository.
- **Description** — Defines *which documents an agent must load for which class of task*, the Precedence Law, the escalation rule, and the behaviours that are forbidden regardless of instruction. This is the highest-leverage document in the entire system: it is the difference between an agent that extends the product and an agent that quietly averages it toward every other app.
- **Why it exists** — The failure mode of AI-assisted development on a product like this is not bad code. It is *taste regression*: an agent adds a bounce because springs feel modern, a green checkmark because success is green, a streak counter because retention. Each is individually defensible and collectively fatal. The canon forbids all three. The agent will not know unless told, every session, before it starts.
- **Source of Truth** — Agent behaviour, context-loading rules, escalation protocol.
- **Depends On** — MASTER.md · DESIGN_FOUNDATION.md · NON_NEGOTIABLES.md · GLOSSARY.md.
- **Referenced By** — All tool stubs · IMPLEMENTATION_GUIDE.md · PROMPT_LIBRARY.md.
- **Sections** —
  1. Read this first · 2. Precedence Law · 3. **The context-loading matrix** (below) · 4. Hard prohibitions (link to NON_NEGOTIABLES) · 5. The four questions every change must answer · 6. **When to stop and ask a human** · 7. Vocabulary discipline · 8. How to write a commit / PR description · 9. What an agent may never do.
- **The context-loading matrix** — the core of the document:

  | Task | Must load |
  |---|---|
  | Any task | AGENTS · NON_NEGOTIABLES · GLOSSARY |
  | Build/change a screen | + canon §for that surface in USER_JOURNEY · `features/<surface>.md` · DESIGN_SYSTEM · COMPONENT_LIBRARY · MOTION_SPEC · INTERACTION_SYSTEM |
  | Write copy | + COPY_GUIDE · DESIGN_FOUNDATION §4 |
  | Touch a component | + COMPONENT_LIBRARY · DESIGN_SYSTEM · ACCESSIBILITY |
  | Anything time-related | + TIME_MODEL |
  | Backend/API | + DATA_MODEL · API_CONTRACT · SECURITY_AND_PRIVACY · SYNC_AND_OFFLINE |
  | Propose a feature | + PRODUCT_SCOPE · ANTI_ROADMAP · SUCCESS_SIGNALS |

- **The four questions** — taken from canon, not invented: *Does it help keep an ordinary thing? Does it get better with age? Would it survive a bad week? Does it help the couple focus on each other, or on the interface?*
- **The stop-and-ask rule** — An agent must halt and request a human when a task would: add a feature not in FEATURES.md; introduce a token not in DESIGN_SYSTEM.md; add a fifth colour; add an animation not in MOTION_SPEC.md; add any counter, score, streak or metric; place any content where a third party could see it; or require amending canon.
- **Writing Guidelines** — Imperative, terse, scannable. Assume it is read by a machine with a budget. Under 1,200 words — an agent protocol that doesn't fit in a small context window is a protocol that gets truncated.
- **Update Rules** — Any new document must be added to the context-loading matrix in the same PR, or it will never be read by an agent and will rot.
- **Size** — 1,000–1,200 words.
- **Example Usage** — Cursor is asked to "add a nice loading spinner to the timeline." The agent loads AGENTS → NON_NEGOTIABLES → sees *"never: loading spinners; waiting states are typographic or nothing"* → proposes a typographic waiting state instead and cites the canon line.
- **AI Agent Responsibilities** — Load first, every session, without being asked. Re-read after any canon amendment.

---

#### `NON_NEGOTIABLES.md`

- **Purpose** — One merged, citable index of everything this product will never do.
- **Description** — The union of MASTER's `# FORBIDDEN` list and DESIGN_FOUNDATION's `## What we will never ship`, plus the *"what must NOT exist"* clauses scattered across USER_JOURNEY's 23 surfaces. Every line is a pointer: **the prohibition, the source, the section.** It adds no new rules and has no independent authority.
- **Why it exists** — The prohibitions are the product's actual defensibility, and they are currently spread across three files and 23 subsections. An agent given a 4,000-token budget will not find them. This is the file you paste into every tool, and the file a reviewer runs down before approving a PR.
- **Source of Truth** — **None — it is derived.** This is stated at the top of the file in bold. If it ever conflicts with canon, canon wins and the index is a bug.
- **Depends On** — MASTER.md · DESIGN_FOUNDATION.md · USER_JOURNEY.md.
- **Referenced By** — AGENTS.md · all tool stubs · DESIGN_QA_CHECKLIST.md · QA_STRATEGY.md · every PR template.
- **Sections** — Status: derived, non-authoritative · **Product prohibitions** (no feed, no likes, no followers, no third viewer, no streaks, no scores, no gamification, no engagement mechanics, no AI authoring on behalf of the couple) · **Visual prohibitions** (no pure black/white, no red for destruction, no success green, no gradients as surfaces, no glassmorphism, no neumorphism, no Material defaults, no purple/blue SaaS gradients, no oversized FABs, no stock illustration, no emoji-heavy UI, no handwriting typeface, 5% accent ceiling) · **Motion prohibitions** (no bounce, no confetti, no hearts, no sparkles, no parallax on scroll, no elastic overscroll on content, no loading spinners, no ambient shimmer) · **Copy prohibitions** (no exclamation marks, no "Oops", no machine-authored sentiment) · **Metric prohibitions** (see SUCCESS_SIGNALS) · **Per-surface prohibitions** (table, one row per USER_JOURNEY surface).
- **Writing Guidelines** — One line per prohibition. Format: `NEVER <thing> — <source file> §<n>`. No prose, no softening, no "generally". A prohibition with a hedge is not a prohibition.
- **Update Rules** — **Regenerate, never edit.** Changes only enter through canon amendments or ADRs. A quarterly job re-derives it from the canon files and diffs; any drift is a bug.
- **Size** — 700–900 words. It must stay small enough to paste in full.
- **Example Usage** — QA reviewing a build runs the visual list against three screenshots. An agent asked for "a fun confirmation animation" finds the answer in one grep.
- **AI Agent Responsibilities** — Load into context on every task, no exceptions. Cite the specific line when declining a request.

---

#### `GLOSSARY.md`

- **Purpose** — Fix the product's vocabulary so that twelve contributors across four years use one word for one thing.
- **Description** — Every proper noun in the system, defined once, with its canonical capitalization and its forbidden synonyms. **Lamplight** (`#D9A441`, you), **Dusk** (`#6B5A8E`, them), **Overlap** (`#8A6A6E`, both), the **stack**, the **developing morning**, the **dictionary**, the **book of days**, the **side**, the **book** (the printed one), **Room / Surface / Raised / Paper / Ink / Muted / Whisper**.
- **Why it exists** — This is a product whose most beloved feature is *a dictionary of a couple's private language*. It would be an unusual failure for the team building it to lack one. Practically: an agent that reads "the amber accent" in a spec and "Lamplight" in a token file will duplicate the concept. Naming drift is the leading indicator of system drift.
- **Source of Truth** — Terminology and naming. It **does not** own values — hexes appear only as identifiers, and DESIGN_SYSTEM owns the token.
- **Depends On** — All three canon docs.
- **Referenced By** — Everything. Every document links here on first use of a term.
- **Sections** — Product concepts · Surfaces (the 23, canonical names) · Colour & material terms · Time terms · Data-model terms (entity ↔ product-word mapping: `Entry` = "something kept") · **Banned synonyms** (never "post", "content", "feed", "user" in user-facing copy — the words are "entry", "kept", "the two of you") · Naming conventions for new terms.
- **Writing Guidelines** — Term · one-sentence definition · where it comes from (canon §) · what it is *not*. Alphabetical.
- **Update Rules** — A new term may only be added alongside the document that introduces it. Renaming a term requires an ADR and a repo-wide find-and-replace in the same PR.
- **Size** — 800–1,200 words, growing slowly.
- **Example Usage** — A backend engineer names a table `posts`. Review catches it: the product has no posts. It is `entries`.
- **AI Agent Responsibilities** — Load on every task. Never invent a name for an existing concept; if a concept has no name, stop and ask.

---

#### `DOC_STYLE_GUIDE.md`

- **Purpose** — Make the documentation itself consistent, machine-parseable, and pleasant.
- **Description** — Heading conventions, the required front-matter block (`tier`, `owner`, `status`, `last_reviewed`, `depends_on`, `discharges`), how to cite canon (`DESIGN_FOUNDATION §7`), how to write a spec card, how to write acceptance criteria, when to use a table versus prose.
- **Why it exists** — Structured front-matter is what lets an agent (and a CI script) build the dependency graph automatically instead of trusting a hand-drawn diagram to stay true for four years. It also makes staleness detectable: `last_reviewed` older than the canon's last amendment = flagged.
- **Source of Truth** — Documentation conventions.
- **Depends On** — None.
- **Referenced By** — Every document; enforced by a docs-lint CI job.
- **Sections** — Front-matter schema · Heading rules · Citation format · Cross-linking rules (link, never restate) · Spec-card template · Acceptance-criteria format (Given/When/Then) · Tone (documentation is plain and unornamented — the *product* is lyrical; the docs are not) · Diagrams-as-code (Mermaid) · What never belongs in a doc.
- **Writing Guidelines** — Short. Show one good example and one bad example of each rule.
- **Update Rules** — ADR required; a change here reformats the whole repository.
- **Size** — 700–1,000 words.
- **Example Usage** — CI rejects a new feature spec with no `depends_on` block.
- **AI Agent Responsibilities** — Load whenever *authoring or editing a document*. Emit correct front-matter without being asked.

---

#### `decisions/ADR_INDEX.md` + `ADR_TEMPLATE.md` + `ADR-NNNN-*.md`

- **Purpose** — Make every consequential decision, and every rejection, permanently legible.
- **Description** — Numbered, append-only Architecture Decision Records. Never deleted, never edited after acceptance — only superseded, with a link forward. The index is a one-line-per-ADR table: number, title, status, date, tier affected.
- **Why it exists** — In a product whose defining position is *"feature velocity is an anti-value"*, the most valuable institutional knowledge is **why we said no**. Without ADRs, a rejected idea returns every eighteen months with a new champion and no memory of the argument, and eventually someone approves it on a Friday. ADRs are how a product stays itself across staff turnover — and they are the only mechanism by which canon may legally be amended.
- **Source of Truth** — Decision history and rationale. Nothing else.
- **Depends On** — Canon (every ADR must argue against it).
- **Referenced By** — ANTI_ROADMAP.md (which is a *view* over the rejection ADRs, not a second store) · TECH_ARCHITECTURE.md · every doc that says "we chose X".
- **Sections (per ADR)** — Number & title · Status (Proposed / Accepted / Superseded by #N / **AMENDS CANON**) · Date · Deciders · Context · **The four questions, answered** · Options considered · Decision · Consequences · What this forecloses.
- **Writing Guidelines** — One decision per ADR. Past tense. State the losing option fairly enough that a future reader can genuinely reconsider it — a strawman in an ADR is a landmine for your successor.
- **Update Rules** — Append-only. Status may change to *Superseded*; the body never changes.
- **Size** — Index: 1 line/ADR. Each ADR: 400–800 words.
- **Example Usage** — Month 30, a new PM proposes streaks. ADR-0006 already contains the argument, the evidence, and the decision. The conversation takes ten minutes instead of a quarter.
- **AI Agent Responsibilities** — Search `decisions/` before proposing anything. **Draft an ADR whenever a task forces a trade-off** — do not silently pick. Never edit an accepted ADR.

---

### TIER 2 — Product

---

#### `product/PRODUCT_SCOPE.md`

- **Purpose** — The boundary. What this product is, what it is adjacent to, and what it will never be.
- **Description** — Turns MASTER's identity statement (*not social media, not dating, not a messenger, not a journal, not a habit tracker*) into an operational scope: the surfaces that exist, the audience (two people, and only ever two), the platforms, the release scope, and the **non-goals** with reasons.
- **Why it exists** — MASTER states the negation philosophically; a team needs it as a checklist. Scope creep in this product isn't a schedule risk, it's an *identity* risk: each of the five things it isn't is exactly what it would drift into under normal commercial pressure.
- **Source of Truth** — Scope boundaries, non-goals, audience, supported platforms.
- **Depends On** — MASTER.md · USER_JOURNEY.md.
- **Referenced By** — FEATURES.md · ROADMAP.md · ANTI_ROADMAP.md · GTM_PLAN.md · AGENTS.md.
- **Sections** — What it is (one paragraph, linking canon) · The five things it is not, and the nearest competitor for each · In scope v1 · Explicit non-goals · Audience & the two-person constraint · Platforms · What "done" means for v1 · The scope-change procedure (→ ADR).
- **Writing Guidelines** — Every non-goal must state *what it would cost us*, not just that we won't do it. "No group accounts — three people is an audience, and an audience makes people perform."
- **Update Rules** — Scope changes require an ADR. Review at each release.
- **Size** — 1,200–1,600 words.
- **Example Usage** — An investor asks for a "friends" feature. The answer, with reasoning, is already written.
- **AI Agent Responsibilities** — Load before proposing or estimating any feature. Refuse out-of-scope work by citing the specific non-goal.

---

#### `product/FEATURES.md`

- **Purpose** — The registry. One row per surface; the map to the specs.
- **Description** — **Index only — it contains no feature detail whatsoever.** A table: surface · spec file · USER_JOURNEY § · status · owner · release · signature moment (Y/N). This is the single most abused document type in software; its discipline here is enforced by a hard rule: **if a sentence in FEATURES.md would also be true in a feature spec, delete it from FEATURES.md.**
- **Why it exists** — Twenty-three surfaces need an addressable index, and agents need one file that tells them which spec to open. What they don't need is a 6,000-word document that half-describes every feature and contradicts the specs within a quarter.
- **Source of Truth** — The list of features and their status. Not their behaviour.
- **Depends On** — PRODUCT_SCOPE.md · USER_JOURNEY.md.
- **Referenced By** — Every `features/*.md` · ROADMAP.md · QA_STRATEGY.md · AGENTS.md.
- **Sections** — The registry table · Status definitions · How to add a feature (scope check → ADR → spec → registry row) · How to retire one.
- **Writing Guidelines** — A table. Resist prose. Resist it again next quarter.
- **Update Rules** — One row per spec, always in the same PR as the spec.
- **Size** — 400–600 words. It should never grow.
- **Example Usage** — Claude Code is told "implement the dictionary." It opens FEATURES.md, finds `features/dictionary.md`, and loads that plus USER_JOURNEY §9.
- **AI Agent Responsibilities** — Use as a router. **Never** treat as a source of behaviour.

---

#### `product/features/<surface>.md` × 16

*(onboarding-pairing · home · daily-question · camera · developing · notebook · dictionary · music · timeline · day-page · milestones · search · widgets · notifications · settings · endings)*

- **Purpose** — The complete, buildable behavioural specification of one surface.
- **Description** — The bridge from emotion to engineering, and the document most work is done against. It answers *what the thing does* — states, data, rules, edge cases, acceptance criteria — and **never re-argues why**. The why is one link away, in USER_JOURNEY, and it is better written there than any restatement would be.
- **Why it exists** — USER_JOURNEY tells you the developing morning should feel like *"neither of you saw them first."* It does not tell you what happens when one partner is in Seoul and the other in Lisbon, or what "dawn" means to a server, or what the camera does when storage is full at 11:58pm. Those questions have exactly one correct home, and if it isn't this file they will be answered — differently — in three codebases.
- **Source of Truth** — Behaviour, states, edge cases, and acceptance criteria for its surface. **Nothing else in the repository may define these.**
- **Depends On** — USER_JOURNEY §<n> (mandatory link in front-matter) · TIME_MODEL · DATA_MODEL · COMPONENT_LIBRARY · COPY_GUIDE · INTERACTION_SYSTEM · MOTION_SPEC · ACCESSIBILITY.
- **Referenced By** — IMPLEMENTATION_GUIDE · QA_STRATEGY · API_CONTRACT · FRONTEND_GUIDE · COMPONENT_LIBRARY (usage examples).
- **Sections** —
  1. **Canon link** — `USER_JOURNEY §n`, plus the surface's *"what must NOT exist"* list, quoted as a pointer.
  2. Surface summary (3 sentences max).
  3. Entry points & exits.
  4. **States** — empty · first-ever · loading (typographic!) · populated · error · offline · one-partner-only · aged (>1yr) · dead (partner has left).
  5. Primary action, and the single most important thing a person can do here.
  6. **Behavioural rules** — numbered, testable, unambiguous.
  7. **Time behaviour** → link TIME_MODEL, don't restate.
  8. Data touched → link DATA_MODEL.
  9. Components used → link COMPONENT_LIBRARY.
  10. Copy inventory → strings + rule links (COPY_GUIDE).
  11. **Edge cases** — timezones, both partners acting simultaneously, deleted media, storage limits, clock skew, a partner who never answers.
  12. **Accessibility notes** specific to this surface.
  13. **Acceptance criteria** — Given/When/Then, directly runnable as QA cases.
  14. Rejected alternatives → link ADRs.
- **Writing Guidelines** — Numbered rules, not paragraphs. Every rule must be falsifiable. **If you find yourself writing beautifully, you're writing in the wrong file** — the lyricism belongs to canon; this file is a contract.
- **Update Rules** — The spec changes *before* the code, never after. A PR that changes behaviour without changing the spec is rejected in review. Emotional intent may only change via canon amendment.
- **Size** — 800–2,000 words each. `camera`, `developing`, `timeline`, `endings` will be the long ones.
- **Example Usage** — QA writes the entire test suite for the dictionary from §13 without asking anyone a question.
- **AI Agent Responsibilities** — Load the spec *and* its canon section together — the spec alone is enough to build the feature and not enough to build it *well*. Refuse to implement behaviour the spec does not define; instead, propose the rule and ask.

---

#### `product/TIME_MODEL.md` ★

- **Purpose** — Define, deterministically, how time works in this product.
- **Description** — The single home for every temporal rule: the delay before photographs develop and how "dawn" is computed for two people in two timezones; the daily question's cadence and how the stack accretes; how surfaces and materials *age* (paper warms, older content recedes); how anniversaries, "this day last year", and the year-late milestone are resolved; what happens across DST, leap days, clock skew, and a partner who travels.
- **Why it exists** — **This is the keystone of the architecture.** Time is not a feature of this product; time is the *mechanism* of this product — "let time do the rest" is the second half of its philosophy. Temporal logic touches the camera, the daily question, the timeline, widgets, notifications, milestones, aging, and the printed book. If each feature spec defines its own notion of "a day", the product will be subtly, unfixably inconsistent — and the inconsistency will surface years later, in a person's archive, which is the one place this product cannot afford to be wrong. Extracting time into one document is the highest-value structural decision in this system.
- **Source of Truth** — All temporal semantics.
- **Depends On** — USER_JOURNEY §5, §7, §11, §13, §23 · DESIGN_FOUNDATION §12 (materials/aging).
- **Referenced By** — Nearly every feature spec · DATA_MODEL · SYNC_AND_OFFLINE · BACKEND_GUIDE · DESIGN_SYSTEM (aging tokens) · QA_STRATEGY.
- **Sections** — The canonical day (definition, boundary, timezone authority) · Two people, two timezones: the resolution rule · The developing window · The daily question cadence & the stack · Resurfacing rules (what returns, when, how often, and the anti-spam ceiling) · **The aging model** (what changes at 1 month / 1 year / 5 years, and the token curve that expresses it) · Anniversaries & retroactive milestones · Clock skew, DST, leap years, travel · Server time vs device time vs *felt* time · Testability: how to fast-forward five years in a test harness.
- **Writing Guidelines** — Pseudocode and tables. Every rule must be implementable identically on iOS, Android, and server without a conversation.
- **Update Rules** — Extremely conservative. A change here rewrites people's histories. Any change requires an ADR **and** a migration note in DATA_LIFECYCLE.
- **Size** — 1,500–2,500 words.
- **Example Usage** — An engineer implements widgets and needs to know whether "today" flips at local midnight for each partner independently. It's rule 2.3.
- **AI Agent Responsibilities** — Load for *any* task touching dates, schedules, resurfacing, or aging. Never invent a time rule locally.

---

#### `product/SUCCESS_SIGNALS.md`

- **Purpose** — Define what we measure, what we refuse to measure, and what "working" means.
- **Description** — Deliberately not called `METRICS.md`. Canon states the product has no metrics visible to the couple and that engagement is an anti-goal; this document makes that operational: the small set of health signals we may collect (crash-free rate, sync success, media integrity, delivery of the developing moment), the signals we **refuse** (DAU, session length, retention curves as a goal, per-partner activity comparison — which would be a scoreboard in a product that forbids scores), and the qualitative evidence we use instead.
- **Why it exists** — Every organization eventually asks "how's it doing?", and if there is no pre-agreed answer, someone will install an analytics SDK and the product will begin, quietly, to optimize for the thing it was built to refuse. This is the single most likely path to the product's corruption, and it should be closed in writing before there is any pressure on it.
- **Source of Truth** — Measurement policy. What may and may not be instrumented.
- **Depends On** — MASTER.md · DESIGN_FOUNDATION §1 · SECURITY_AND_PRIVACY.
- **Referenced By** — OBSERVABILITY_AND_INCIDENTS (which *implements* the allowed list) · NON_NEGOTIABLES · GTM_PLAN · ROADMAP.
- **Sections** — Why this product does not have a metrics dashboard · Permitted health signals (exhaustive) · **Forbidden measurements (exhaustive)** · Why retention is an outcome and never a target · Qualitative evidence: what we listen for · The one number that matters (memories still legible at year five) · Instrumentation review procedure.
- **Writing Guidelines** — Two lists, both exhaustive and closed. Anything not on the permitted list is forbidden by default.
- **Update Rules** — Adding a permitted signal requires an ADR with a named human. No exceptions, including "just temporarily."
- **Size** — 800–1,200 words.
- **Example Usage** — Growth proposes an activation funnel. The document already says no, and says why in the product's own terms.
- **AI Agent Responsibilities** — Refuse to add any analytics, event tracking, or telemetry not on the permitted list. Cite this file.

---

#### `product/ANTI_ROADMAP.md`

- **Purpose** — The permanent, public record of what we have chosen not to build.
- **Description** — A *view over the rejection ADRs* — one line per rejected idea, linking to the ADR that killed it. It stores no rationale of its own (the ADR owns that); it exists to make the rejections browsable, because a rejection you cannot find is a rejection that will be re-litigated.
- **Why it exists** — Canon is explicit: *"We do not add features… Feature velocity is, for this product, an anti-value. The product manager who resists shipping is the one doing the job."* A product with that stance needs its refusals to be first-class artifacts, as visible as the roadmap. Most products treat "no" as an absence; here it is the substance.
- **Source of Truth** — **None — it is a view.** Rationale lives in ADRs.
- **Depends On** — decisions/ · PRODUCT_SCOPE · MASTER.
- **Referenced By** — ROADMAP · GTM_PLAN · AGENTS · FUTURE_CONSIDERATIONS.
- **Sections** — How to read this · Rejected: social & sharing · Rejected: engagement mechanics · Rejected: AI-in-product (canon: *the machine may arrange; it may never author*) · Rejected: monetization patterns · Rejected: UI patterns · **The graveyard is not a backlog** — a statement that nothing here is "later."
- **Writing Guidelines** — `Idea — Rejected YYYY-MM — ADR-00NN — one-line summary.` No arguing in this file.
- **Update Rules** — Append when an ADR rejects something. An item may only move out via a superseding ADR.
- **Size** — 400–800 words, growing.
- **Example Usage** — A new designer's first instinct is a "relationship score." This file, plus one ADR, ends the discussion respectfully and permanently.
- **AI Agent Responsibilities** — Search before proposing. Never propose something already here without explicitly acknowledging the prior rejection and arguing against it.

---

#### `product/ROADMAP.md` · `product/RESEARCH.md`

- **ROADMAP** (T4) — Sequence and release contents only; no feature detail (that's the specs), no commitments to dates that would create shipping pressure — a product that treats velocity as an anti-value should not have a roadmap that manufactures urgency. Sections: release themes · v1 scope · what is deliberately deferred and why (→ ANTI_ROADMAP for what is *never*) · dependencies. 600–900 words. Owner: PM. Updated each cycle. Agents: read for sequencing only, never as authority on behaviour.
- **RESEARCH** (T4) — The evidence file: interviews, diary studies, what couples actually said, longitudinal signals. Exists so that canon's claims stay tethered to reality and so that a future amendment can be argued from evidence rather than taste. Append-only. 1,000+ words, growing. Agents: cite, never infer.

---

### TIER 2 — UX

---

#### `ux/INFORMATION_ARCHITECTURE.md`

- **Purpose** — The map of the product: surfaces, hierarchy, navigation model, and the route table.
- **Description** — Formalizes USER_JOURNEY §0 ("the architecture, in one paragraph") into a navigable structure: what the root surfaces are, what is a push vs. a sheet vs. a modal, how deep the product is allowed to be, the back-behaviour contract, deep links, widget and notification entry points.
- **Why it exists** — Navigation is the fastest way to betray a design philosophy. Canon says *"dissolve, don't slide — sliding is a filing-cabinet metaphor"* and *"the interface should disappear."* That has direct structural consequences (shallow hierarchy, few root surfaces, almost no tab-switching) which must be written down once, before twenty screens each invent their own answer.
- **Source of Truth** — Navigation model, surface hierarchy, routes, deep links.
- **Depends On** — USER_JOURNEY · DESIGN_FOUNDATION §3 · MASTER (navigation philosophy).
- **Referenced By** — Every feature spec · FRONTEND_GUIDE · COMPONENT_LIBRARY (navigation components) · MOTION_SPEC (transitions map to hierarchy).
- **Sections** — Navigation philosophy (link canon) · Surface map (Mermaid) · Root surfaces & why there are so few · Push vs sheet vs dissolve: the decision rule · Maximum depth · Back & dismiss contract · Deep links & entry points (widgets, notifications, lock screen) · Route table · State preserved across launches.
- **Writing Guidelines** — Diagram first, table second, prose last.
- **Update Rules** — Adding a root surface requires an ADR. Adding a leaf requires design review.
- **Size** — 900–1,400 words.
- **Example Usage** — An agent must decide whether the dictionary entry opens as a sheet or a page. The decision rule answers it without a meeting.
- **AI Agent Responsibilities** — Load for any navigation or routing work. Never add a route not in the table.

---

#### `ux/INTERACTION_SYSTEM.md` — *Discharges MASTER §3*

- **Purpose** — Every interaction primitive, specified.
- **Description** — Touch targets, gestures, scroll behaviour, focus/hover/pressed/disabled states, haptics, and the product's four unusual philosophies: **loading** (typographic or nothing), **success** (a sentence, never a checkmark), **error** (plain, non-anxious, never "Oops"), **offline** (a normal state, not a failure). Plus the two ideas canon flags as most contested and most important: **deliberate latency** and **irreversibility**.
- **Why it exists** — MASTER commissions it explicitly, and it is where the philosophy either survives or dies. Canon: *"Latency is a feature, not a bug to fix."* A performance-minded engineer will delete that delay in month three unless it is specified as a requirement with a rationale attached, in the document they actually read.
- **Source of Truth** — Interaction primitives, states, haptics, latency & irreversibility rules.
- **Depends On** — DESIGN_FOUNDATION §2, §3, §8 · MASTER §3 · ACCESSIBILITY.
- **Referenced By** — COMPONENT_LIBRARY · every feature spec · FRONTEND_GUIDE · DESIGN_QA_CHECKLIST.
- **Sections** — Interaction philosophy (link canon) · Touch targets & hit areas · Gesture vocabulary (deliberately tiny) · Scroll behaviour (and the ban on elastic overscroll of content) · The five states of every interactive element · **Haptics: punctuation, not applause** (the two permitted haptics, and nothing else) · Loading philosophy · Success philosophy · Error philosophy · Offline philosophy · **Deliberate latency: where, how long, why, and how to defend it in review** · **Irreversibility: what cannot be undone, and the confirmation grammar for it** · Reduced motion · Keyboard & pointer (for the future).
- **Writing Guidelines** — Every rule carries a one-line *why* citing canon — because these are the rules most likely to be "optimized away" by someone acting in good faith.
- **Update Rules** — Design review. Latency and irreversibility rules require an ADR to change.
- **Size** — 1,600–2,200 words.
- **Example Usage** — An engineer files a performance ticket: "the camera has a 400ms delay after capture." This document is the answer: it's intentional, here's the canon line, close the ticket.
- **AI Agent Responsibilities** — Load for any interactive work. **Never "optimize" a documented delay.** Never add a haptic, gesture, or spinner.

---

#### `ux/COPY_GUIDE.md` — *Discharges MASTER §5 (copy half)*

- **Purpose** — Own every rule that governs a user-visible word.
- **Description** — Voice, tone, microcopy patterns, date and time formatting (canon: *"A Tuesday in March," "two winters ago"* — human formats by default, machine formats only where precision is functional), empty states as invitations, errors that are plain, the ban on exclamation marks, the ban on the app speaking *for* the couple, emoji policy, and multilingual typography.
- **Why it exists** — Copy is the product's second-most-visible material after typography, and it is written by the most people (engineers, designers, agents), which makes it the fastest-drifting surface in any product. Canon's rules here are strict and unusual — *not one exclamation mark, anywhere* — and unwritten strictness is not strictness.
- **Source of Truth** — All copy rules and formats. **Not** the strings themselves (those live in the feature specs and the i18n files).
- **Depends On** — DESIGN_FOUNDATION §4 · MASTER §5 · GLOSSARY.
- **Referenced By** — Every feature spec · COMPONENT_LIBRARY · BRAND_NARRATIVE (which inherits voice, and may not invent a second one) · notifications spec.
- **Sections** — Voice (link canon) · Tone by context: everyday / tender / bittersweet / factual · Sentence patterns & length · **Date & time formats** (the human/machine decision table) · Empty states · Errors · Confirmations · Notifications (the hardest copy in the product — a knock, not an alert) · Buttons & labels · Words we never use (→ GLOSSARY banned synonyms) · Punctuation law · Emoji policy · Multilingual & typographic notes.
- **Writing Guidelines** — Every rule paired with a real *good* and a real *bad* example. The bad examples are what people actually learn from.
- **Update Rules** — Copy lead owns. Changes reviewed against DESIGN_FOUNDATION §4 verbatim.
- **Size** — 1,200–1,800 words.
- **Example Usage** — An agent generates `"Oops! Something went wrong 😅"`. The lint rule and this document both catch it.
- **AI Agent Responsibilities** — Load whenever emitting a user-visible string. **Never write in the product's lyrical voice on the couple's behalf** — canon: the machine may arrange, it may never author.

---

#### `ux/ACCESSIBILITY.md`

- **Purpose** — Turn DESIGN_FOUNDATION §13 and USER_JOURNEY §20 into testable requirements.
- **Description** — The implementation-level companion to canon's accessibility principles: WCAG targets and measured contrast pairs for every token combination, VoiceOver/TalkBack labelling conventions (including how Lamplight/Dusk identity is conveyed *non-visually* — canon requires that colour never carry meaning alone), Dynamic Type behaviour at the largest sizes, reduced-motion mappings (dissolves become cuts; narrative moments still *happen*), touch target minimums, and the colour-vision rationale for the amber/violet pair.
- **Why it exists** — Canon states the principles beautifully and does not state a contrast ratio. Principles are not testable; requirements are. Separating them means the principle never has to be re-argued and the requirement can be tightened without touching canon.
- **Source of Truth** — Accessibility requirements, contrast tables, semantics conventions.
- **Depends On** — DESIGN_FOUNDATION §13, §7 · USER_JOURNEY §20 · DESIGN_SYSTEM (tokens) · MOTION_SPEC (reduced motion).
- **Referenced By** — COMPONENT_LIBRARY (every component has an a11y block) · every feature spec · QA_STRATEGY · DESIGN_QA_CHECKLIST.
- **Sections** — Standard & target level · **Contrast matrix** (every legal fg/bg token pair, measured) · Never colour alone: how you/them/Overlap are conveyed in text and semantics · Screen reader: reading order, labels, traits, live regions · Dynamic Type: the type scale at 310% · Reduced motion mapping table · Motor: targets, gestures, alternatives to every gesture · Cognitive: plain language, no time pressure (note: the developing delay is *not* a time limit on the person) · Audio content: the dictionary's voice clips need transcripts · Testing procedure · Known gaps.
- **Writing Guidelines** — Requirements are `MUST` / `SHOULD`. Every `MUST` is testable by a person in under a minute.
- **Update Rules** — Any new token or component adds a row here in the same PR.
- **Size** — 1,200–1,600 words.
- **Example Usage** — QA verifies that a day marked by both partners announces "kept by both of you", not just a colour change.
- **AI Agent Responsibilities** — Load for every UI task. Emit semantics with the component, never as a follow-up.

---

### TIER 2 — Design

---

#### `design/DESIGN_SYSTEM.md` — *Discharges MASTER §2*

- **Purpose** — The values. Tokens, scales, and the material system.
- **Description** — Canon gives intent and hexes in prose; this gives the machine-readable system: token names, values, semantic aliases, the type scale, the spacing scale, grid, radii, elevation, the lighting model, texture/grain, surface hierarchy, night/day themes, responsive rules, and the **aging tokens** (how paper warms across years, per TIME_MODEL).
- **Why it exists** — There must be exactly one place where `#D9A441` becomes `--accent-lamplight` and where "5% accent ceiling" becomes an enforceable lint rule. Without it, hexes appear inline in components within a month and the ceiling becomes decorative.
- **Boundary with canon (critical)** — **DESIGN_FOUNDATION owns intent and prohibition; DESIGN_SYSTEM owns names and values.** This file may not explain *why* Lamplight is amber — it links. It may not contradict the 5% ceiling — it *encodes* it. If canon and system disagree, the system is wrong.
- **Source of Truth** — All token names and values.
- **Depends On** — DESIGN_FOUNDATION §6, §7, §12 · MASTER §2 · TIME_MODEL (aging) · ACCESSIBILITY (contrast).
- **Referenced By** — COMPONENT_LIBRARY · MOTION_SPEC · TOKEN_PIPELINE · FRONTEND_GUIDE · every feature spec · BRAND_IDENTITY.
- **Sections** — Token naming convention · Primitive colour tokens · **Semantic colour tokens** (`--identity-you`, `--identity-them`, `--identity-both`) · Night theme · Day theme · **The 5% accent ceiling as an enforceable rule** · Type scale (serif = the couple, sans = the machine — the two never mix in a line) · Figure styles (oldstyle in prose, lining in UI) · Spacing scale & layout rhythm · Grid · Radii · Elevation & shadow (light, not depth) · Lighting model · Texture & grain · Surface hierarchy (Room → Surface → Raised) · **Aging tokens** · Responsive rules · Deprecation policy.
- **Writing Guidelines** — Tables. Every token: name, value(night), value(day), meaning, permitted uses, **forbidden uses**. The forbidden column is the one that matters.
- **Update Rules** — New tokens require design review; **new colours require an ADR** (there are two accents and one overlap; a third accent is a canon amendment). Values change only with a TOKEN_PIPELINE regeneration.
- **Size** — 2,000–2,800 words. The largest Tier 2 design doc.
- **Example Usage** — An agent needs the colour for a divider in dark mode: `--whisper`, `#6A6158`, and the forbidden column tells it never to use it for text.
- **AI Agent Responsibilities** — **Never emit a raw hex, px, or duration.** Tokens only. If a needed token doesn't exist, stop and ask.

---

#### `design/COMPONENT_LIBRARY.md` — *Discharges MASTER §4*

- **Purpose** — Every reusable component, fully specified, implementation-free.
- **Description** — MASTER lists 25 components (buttons, cards, photos, photo stacks, notebook pages, journal entries, language cards, audio player, music memories, timeline, camera UI, navigation, bottom sheets, dialogs, search, filters, inputs, date pickers, milestones, widgets, profile, settings, notifications, context menus). Each gets: purpose · hierarchy · layout · spacing · interaction · animation · accessibility · edge cases · variants · usage rules — plus the tokens it consumes and the components it composes.
- **Why it exists** — It is the vocabulary layer. Without it, "the same card" is built four times, four ways, and the interface stops disappearing — which is the one thing canon requires of it.
- **Structural note** — At 25 components × ~400 words this approaches 10,000 words, past the point of usability. **Split**: `COMPONENT_LIBRARY.md` is the index + shared anatomy rules + the composition model; each component gets `design/components/<name>.md`. Same reasoning that splits FEATURES.md from its specs; same discipline.
- **Source of Truth** — Component anatomy, states, variants, usage rules.
- **Depends On** — DESIGN_SYSTEM · INTERACTION_SYSTEM · MOTION_SPEC · ACCESSIBILITY · COPY_GUIDE.
- **Referenced By** — Every feature spec · FRONTEND_GUIDE · DESIGN_QA_CHECKLIST · QA_STRATEGY.
- **Sections (index)** — Composition model · Naming convention · Shared anatomy · The state contract (default/pressed/focus/disabled/loading/empty/error) · Component registry table · When to make a new component (and the strong bias against it) · Deprecation.
- **Sections (per component)** — Purpose · When to use / when not to · Anatomy (diagram) · Tokens consumed · Layout & spacing · Variants · States · Interaction (→ INTERACTION_SYSTEM) · Animation (→ MOTION_SPEC) · Accessibility (→ ACCESSIBILITY) · Content rules (→ COPY_GUIDE) · Edge cases (long text, missing media, 310% type, one-partner-only, five-year-old content) · Usage rules · Anti-examples.
- **Writing Guidelines** — No code. Diagrams and tables. **Every component must show its "aged" state** — this product's components must look right holding five-year-old content, and a library that only shows fresh data is lying about the product.
- **Update Rules** — New components require design review + a registry row. Anti-examples are added whenever a misuse is caught in review — this is how the document learns.
- **Size** — Index 800–1,200; each component 300–600. Total ~10,000.
- **Example Usage** — Claude Code builds the dictionary entry card from `components/language-card.md` alone, and it's right the first time.
- **AI Agent Responsibilities** — **Always compose from existing components before creating one.** Never invent a variant. Implement every listed state, including aged and empty.

---

#### `design/MOTION_SPEC.md` — *Discharges MASTER §6*

- **Purpose** — Turn canon's motion principles into exact, implementable choreography.
- **Description** — Canon gives the law: dissolve don't slide; `cubic-bezier(0.22,0.61,0.36,1)`; two tempos (interface 180–320ms, narrative 600–1200ms); **no bounce anywhere**; stillness is a designed state; haptics are punctuation. This file gives every named transition its duration, curve, sequence, and the exact list of the ~5 narrative moments in the entire product — plus their reduced-motion equivalents.
- **Why it exists** — "Cinematic, never playful" is a principle an agent cannot execute. `--duration-narrative: 900ms` is. And the narrative moments are *rationed by canon* — "used perhaps five times in the entire product, never twice in a row" — which means there must be a single register of them, or the ration is meaningless.
- **Source of Truth** — Durations, curves, choreography, the narrative-moment register.
- **Depends On** — DESIGN_FOUNDATION §8 · MASTER §6 · DESIGN_SYSTEM (motion tokens) · INFORMATION_ARCHITECTURE (transitions follow hierarchy) · ACCESSIBILITY.
- **Referenced By** — COMPONENT_LIBRARY · every feature spec · FRONTEND_GUIDE · DESIGN_QA_CHECKLIST.
- **Sections** — Motion law (link canon) · Motion tokens · The transition catalogue (surface→surface, each with duration, curve, sequence) · Sheets: heavy to lift, quick to fall · Photo interactions · Camera transitions · Timeline movement · **The narrative-moment register — the exhaustive list, with a hard cap** · Waiting states (typographic; there is no spinner) · Confirmation (a sentence) · Errors · **Stillness: what must be true when nothing is happening** (no shimmer, no drift, no breathing gradient) · Haptic map (the two permitted) · **Reduced-motion mapping table** · Prohibitions.
- **Writing Guidelines** — Every entry: trigger · what moves · what does not · duration · curve · haptic (usually none) · reduced-motion equivalent. Prose is useless here.
- **Update Rules** — Adding a narrative moment requires an ADR — the ration is a design decision, not a preference. Any spring, bounce, or overshoot is rejected at review by definition.
- **Size** — 1,400–2,000 words.
- **Example Usage** — An agent implements the developing morning reveal and needs the exact choreography for the one narrative moment it's allowed.
- **AI Agent Responsibilities** — Never introduce motion not in the catalogue. Never use a spring. Always implement the reduced-motion equivalent in the same commit.

---

#### `design/EMOTIONAL_RHYTHM.md` — *Discharges MASTER §7*

- **Purpose** — Specify the emotional pacing *across* surfaces and across time.
- **Description** — USER_JOURNEY gives the emotional state of each surface in isolation. This maps the *sequence*: what a day feels like end to end, what a week feels like, what year one feels like versus year five; where quiet must sit next to warmth; and — most usefully — where the product must **not** produce emotion, so that the moments which do are not blunted by proximity.
- **Why it exists** — MASTER commissions it, and it is the one design concern that is genuinely absent from canon. Emotion in this product is *rationed*, exactly like the narrative motion moments; something must hold the ration across the whole product, or every surface will locally optimize for feeling and the result will be exhausting. This is the doc that says: *most of this product must be flat, so that five things can land.*
- **Source of Truth** — Cross-surface emotional pacing and the emotional budget.
- **Depends On** — USER_JOURNEY (all) · DESIGN_FOUNDATION §2 · MOTION_SPEC (narrative register).
- **Referenced By** — MOTION_SPEC · feature specs · DESIGN_QA_CHECKLIST · notifications spec.
- **Sections** — The emotional register (quiet · reflective · warm · nostalgic · bittersweet · comforting — and where each belongs) · **The emotional budget: why most surfaces must be flat** · The rhythm of a day · of a week · of a year · of year five · How type, space, motion and colour combine to produce each state · **Where emotion is forbidden** (settings, errors, pairing failures, anything transactional) · Bittersweetness: the one register competitors won't touch, and the rules for handling it (endings, a partner who stops, a memory that hurts) · The 10 signature moments, placed on the rhythm map.
- **Writing Guidelines** — A timeline diagram plus prose. This is the one derived document permitted to be beautiful — but it must still end in rules.
- **Update Rules** — Design + product jointly. New signature moments require an ADR.
- **Size** — 1,000–1,500 words.
- **Example Usage** — A designer wants a lovely animation on the settings screen. This document says settings is deliberately affect-free, and says why.
- **AI Agent Responsibilities** — Consult before adding *any* emotional flourish. Default to flat.

---

#### `design/BRAND_IDENTITY.md` — *Discharges MASTER §8, §5 (visual half)*

- **Purpose** — The full identity system beyond the interface.
- **Description** — Expands DESIGN_FOUNDATION §5 (the two rings), §9 (icons), §10 (illustration), §11 (photography) into a production system: logo construction and clear space, app icon, motifs, iconography rules and the icon inventory (canon caps it at *fewer than a dozen icons in the entire product*), illustration rules (objects and rooms — **never people**; the couple supplies the faces), photography direction, the printed book's typography, and marketing/social asset rules.
- **Why it exists** — MASTER commissions it. Also: the identity leaves the app — the printed book, the App Store page, the website — and the moment it leaves, it meets people (marketers, printers, contractors) who have not read canon and who will default to stock illustration and a gradient. This is the document handed to them.
- **Source of Truth** — Logo, icon, illustration, photography, print, and marketing asset rules.
- **Depends On** — DESIGN_FOUNDATION §5, §9, §10, §11 · DESIGN_SYSTEM.
- **Referenced By** — COMPONENT_LIBRARY (icons) · BRAND_NARRATIVE · GTM_PLAN · DATA_LIFECYCLE (the printed book).
- **Sections** — The mark: construction, clear space, misuse · App icon · Brand shapes & motifs · **Icon system + the complete icon inventory + the sub-twelve cap** · Illustration rules (and the human-figure prohibition) · Photography direction · **The printed book**: format, type, paper, binding · Marketing visuals · Social assets · Presentation style · Third-party brief (what a contractor must read before designing anything).
- **Writing Guidelines** — Show misuse. The identity is defined as much by its violations as its rules.
- **Update Rules** — Creative director owns. Adding an icon requires a review against the cap — the cap is a feature.
- **Size** — 1,400–2,000 words.
- **Example Usage** — An agency is briefed for the App Store screenshots and does not produce a three-card marketing layout, because it was told not to, in writing, with an example.
- **AI Agent Responsibilities** — Never generate or specify a new icon without checking the inventory and the cap. Never place a human figure in an illustration.

---

#### `design/DESIGN_GOVERNANCE.md` — *Discharges MASTER §9*

- **Purpose** — Keep the design system coherent across years and contributors.
- **Description** — Naming conventions, component hierarchy rules, token strategy, versioning, the review process, deprecation, and the **expansion guidelines**: how anything new enters the system without diluting it.
- **Why it exists** — MASTER commissions it, and this is the document that decides whether the system survives contact with time. Canon's stated five-year goal is that *the app has not changed*. A design system with no governance does not stay still; it accretes. Governance is how "no" scales after the founders have stopped reviewing every PR.
- **Source of Truth** — Design system process, versioning, expansion rules.
- **Depends On** — DESIGN_SYSTEM · COMPONENT_LIBRARY · MASTER §9.
- **Referenced By** — DESIGN_SYSTEM · COMPONENT_LIBRARY · TOKEN_PIPELINE · CONTRIBUTING flow in README.
- **Sections** — Naming conventions (tokens, components, files) · Component hierarchy (primitive → composed → surface) · Token strategy & the primitive/semantic split · **The expansion test: five questions a new token or component must pass** · Versioning & release of the system · Deprecation & migration · Review roles and who can say no · **The default answer is no, and why that is the job** · Handling third-party/contractor contributions.
- **Writing Guidelines** — Process documents are read once and then ignored unless they are short. Be short.
- **Update Rules** — ADR.
- **Size** — 900–1,300 words.
- **Example Usage** — In year three, a contractor proposes a component library upgrade. The expansion test is applied; four of five answers are no.
- **AI Agent Responsibilities** — Apply the expansion test *before* proposing anything new. If it fails, say so and propose composition from existing parts instead.

---

#### `design/DESIGN_QA_CHECKLIST.md` (T3)

- **Purpose** — The pre-merge visual and emotional review.
- **Description** — A one-page runnable checklist: tokens only (no raw hexes) · accent ≤5% · no pure black/white · serif/sans never mixed in a line · no bold in UI · no bounce, spinner, confetti, sparkle, shimmer · reduced-motion path implemented · no exclamation marks · empty state is an invitation · **aged state checked with five-year-old content** · a11y semantics present · colour never carries meaning alone · haptics limited to the two permitted.
- **Why it exists** — Because principles die in code review, and a reviewer at 6pm needs a list, not a philosophy. This is where NON_NEGOTIABLES becomes an action.
- **Source of Truth** — None (derived checklist).
- **Depends On** — NON_NEGOTIABLES · DESIGN_SYSTEM · MOTION_SPEC · ACCESSIBILITY · COPY_GUIDE · EMOTIONAL_RHYTHM.
- **Referenced By** — PR template · QA_STRATEGY · AGENTS.
- **Sections** — Pre-merge checklist · Screenshot review protocol (fresh account · one year · five years) · Common regressions.
- **Size** — 400–600 words. Must fit on one screen.
- **AI Agent Responsibilities** — **Self-run this checklist before opening any PR that touches UI**, and state the result in the PR body.

---

### TIER 2 — Engineering

---

#### `engineering/TECH_ARCHITECTURE.md`

- **Purpose** — The system, end to end.
- **Description** — Clients (React Native, per MASTER's team definition), services, storage, the sync layer, the encryption boundary, media handling, and the deployment topology — plus the decisions that shaped them, each linked to an ADR. Explicitly includes the architecture's most unusual requirement: **the data must outlive the company** (→ LONGEVITY_AND_ARCHIVE).
- **Why it exists** — The orientation document for every engineer and agent: what exists, how it fits, where a change belongs.
- **Source of Truth** — System topology and technology choices.
- **Depends On** — PRODUCT_SCOPE · SECURITY_AND_PRIVACY · DATA_MODEL · SYNC_AND_OFFLINE · TIME_MODEL · decisions/.
- **Referenced By** — All engineering docs · IMPLEMENTATION_GUIDE · onboarding.
- **Sections** — System diagram (Mermaid) · Client architecture · Backend services · Data stores · **The encryption boundary — drawn on the diagram** · Sync layer · Media pipeline (→ MEDIA_PIPELINE) · Third-party dependencies **and the rule that a dependency which sees couple content is forbidden** · Environments · Scaling assumptions (small, private, per-couple — this product does not need to scale like a social network, and designing as if it does would be the wrong tradeoff) · **Longevity requirements** · Key decisions → ADRs.
- **Writing Guidelines** — Diagram-first. Every technology choice links to an ADR; if it has no ADR, write one.
- **Update Rules** — ADR for any topology or technology change. Review quarterly.
- **Size** — 1,600–2,200 words.
- **AI Agent Responsibilities** — Load before any structural change. Never add a dependency that could see plaintext couple content.

---

#### `engineering/DATA_MODEL.md`

- **Purpose** — Every entity, field, relationship, and invariant.
- **Description** — Couple, Partner, Day, Entry (photo / note / word / song / voice / milestone), Media, Pairing, plus the model's two unusual demands: **authorship is a first-class field** (Lamplight = you, Dusk = them, Overlap = both — a colour that is derived from data, never chosen), and **entries are effectively immutable**, because the product's premise is that the past is not overwritten.
- **Why it exists** — The data model *is* the product's promise. If `Entry` is mutable and undated, the app cannot age, cannot resurface, cannot print the book, and cannot be trusted — and no amount of good UI will fix it. This document must be right before the first table is created.
- **Source of Truth** — Entities, fields, relationships, invariants, migrations.
- **Depends On** — TIME_MODEL · SECURITY_AND_PRIVACY (what is encrypted) · GLOSSARY (entity ↔ product word) · feature specs.
- **Referenced By** — API_CONTRACT · SYNC_AND_OFFLINE · BACKEND_GUIDE · MEDIA_PIPELINE · DATA_LIFECYCLE · every feature spec.
- **Sections** — ER diagram · Entities & fields · **Invariants** (an Entry always has an author and a day; the Overlap is derived, never stored as a choice; a Day is never empty of its date) · Authorship model · **Immutability & append-only history** (what may be edited, for how long, and what is preserved) · Encryption per field · Indexes for the queries that matter (the stack, this-day-last-year, the book) · **Migration policy — the hardest constraint in the product: a migration must never lose or alter what a person kept** · Retention → DATA_LIFECYCLE.
- **Writing Guidelines** — Tables + ER diagram. State invariants as assertions that could be written as database constraints.
- **Update Rules** — Schema changes require an ADR + a migration note. Destructive migrations are forbidden.
- **Size** — 1,600–2,200 words.
- **AI Agent Responsibilities** — Never add a field without adding it here. Never write a destructive migration. Never store a derived value (like Overlap) as user input.

---

#### `engineering/API_CONTRACT.md`

- **Purpose** — The client/server contract.
- **Description** — Endpoints, payloads, auth, errors, pagination, versioning, idempotency. Generated from or validated against a machine schema (OpenAPI) so it cannot silently drift from the code.
- **Why it exists** — Two clients and a server need one truth. Prose APIs rot in weeks; this one is checked by CI.
- **Source of Truth** — The API surface.
- **Depends On** — DATA_MODEL · SECURITY_AND_PRIVACY · SYNC_AND_OFFLINE.
- **Referenced By** — FRONTEND_GUIDE · BACKEND_GUIDE · QA_STRATEGY.
- **Sections** — Conventions · Auth & pairing · Endpoints by domain · Error taxonomy (mapping to COPY_GUIDE's error voice — the server's error codes must be *translatable* into non-anxious human sentences) · Idempotency (a memory must never be double-kept) · Pagination for a decade of entries · Versioning & deprecation · Schema link.
- **Update Rules** — Contract-first: the spec changes, then the code. CI diffs them.
- **Size** — 1,200–2,000 words + generated reference.
- **AI Agent Responsibilities** — Never invent an endpoint. Regenerate, don't hand-edit, the generated sections.

---

#### `engineering/SYNC_AND_OFFLINE.md`

- **Purpose** — How two devices become one shared memory, reliably, over a decade.
- **Description** — Conflict resolution, ordering, the offline-first model, queued captures, and the product-specific problems: the **simultaneous reveal** (neither partner may see the photographs before the other — a synchronization requirement with *emotional* semantics), the partner who is offline for a week, the partner who is offline forever.
- **Why it exists** — The most distinctive moment in the product — *"neither of you saw them first"* — is, technically, a distributed systems guarantee. That is a startling thing to leave undocumented, and it will not survive being discovered late.
- **Source of Truth** — Sync semantics, conflict resolution, offline behaviour.
- **Depends On** — DATA_MODEL · TIME_MODEL · API_CONTRACT · SECURITY_AND_PRIVACY · USER_JOURNEY §7, §18.
- **Referenced By** — FRONTEND_GUIDE · BACKEND_GUIDE · feature specs (developing, camera, daily-question) · QA_STRATEGY.
- **Sections** — Offline-first model · Local store · Queue & retry · Conflict resolution (and why last-write-wins is *unacceptable* for kept content) · **The simultaneous-reveal guarantee: definition, mechanism, failure modes** · Two timezones (→ TIME_MODEL) · Long-absent partner · Clock skew · Sync status in the UI (canon: offline is a normal state, not an error) · Test scenarios.
- **Update Rules** — ADR for any change to the reveal guarantee or conflict policy.
- **Size** — 1,400–1,800 words.
- **AI Agent Responsibilities** — Load for any capture, sync, or reveal work. Never weaken the reveal guarantee for latency.

---

#### `engineering/SECURITY_AND_PRIVACY.md`

- **Purpose** — Protect the most private data two people will ever hand to software.
- **Description** — Threat model, end-to-end encryption design, key management and recovery (the hardest problem in the product: *lose the key, lose the marriage's archive*), pairing security, what the server may and may not see, third-party policy, and incident response for a breach.
- **Why it exists** — The product's entire proposition is that no third party is watching. That promise is either architecturally true or it is marketing. This document is where it becomes architecture — and it must exist before the first line of the backend, because encryption cannot be retrofitted onto a product that has already stored plaintext.
- **Source of Truth** — Threat model, crypto design, key handling, privacy guarantees.
- **Depends On** — MASTER (the two-person rule) · DESIGN_FOUNDATION §1 · DATA_MODEL · SUCCESS_SIGNALS (what may be observed).
- **Referenced By** — TECH_ARCHITECTURE · BACKEND_GUIDE · API_CONTRACT · DATA_LIFECYCLE · OBSERVABILITY · marketing (claims must match this file exactly).
- **Sections** — The promise, in plain words · Threat model (including the intimate-partner and post-breakup threat models, which mainstream products ignore and this one cannot) · E2EE design · Key generation, storage, **recovery, and what is genuinely unrecoverable** · Pairing & device trust · What the server sees (exhaustively) · **Forbidden: any third party who can see couple content** · Logging policy (no content in logs — ever) · Data residency · Breach response · Legal requests · Independent audit plan.
- **Writing Guidelines** — Be explicit about what is *not* protected. A security doc that only lists strengths is a liability.
- **Update Rules** — ADR + security review. Never weakened for convenience.
- **Size** — 1,800–2,400 words.
- **AI Agent Responsibilities** — Never log content. Never add a third-party SDK. Never weaken crypto for a deadline; stop and escalate.

---

#### `engineering/MEDIA_PIPELINE.md`

- **Purpose** — Photographs, voice, and music: capture → store → serve → age → print.
- **Description** — Capture constraints (the disposable-camera model: limited retakes, deliberate irreversibility), encoding, the grain/aging treatment, thumbnails, encryption of media, storage tiers for decade-old content, the voice clips in the dictionary, music metadata, and the export path to the printed book.
- **Why it exists** — Media is the product's substance and its dominant cost, and its most irreplaceable asset — canon: *"their voice, at that age, saying a word only you two know."* A corrupted photo is not a bug, it is a lost memory. Integrity requirements here are stricter than in almost any consumer app.
- **Source of Truth** — Media formats, processing, integrity, storage.
- **Depends On** — DATA_MODEL · SECURITY_AND_PRIVACY · TIME_MODEL (aging) · DESIGN_SYSTEM (grain/texture) · features/camera · features/music · features/dictionary.
- **Referenced By** — BACKEND_GUIDE · FRONTEND_GUIDE · DATA_LIFECYCLE · PERFORMANCE_BUDGET · LONGEVITY_AND_ARCHIVE.
- **Sections** — Capture model & the irreversibility rules · Formats & encoding (chosen for 20-year readability, not for fashion) · **The aging treatment: applied at render, never destructively to the original** · Thumbnails & derivatives · Encryption of media at rest and in transit · **Integrity: checksums, verification, and the never-lose-a-photo guarantee** · Storage tiers & cost over a decade · Voice clips · Music metadata (and the ban on anything that requires a third party to see the couple's listening) · Print-resolution export.
- **Update Rules** — Format changes require an ADR and a migration plan that touches no original.
- **Size** — 1,200–1,800 words.
- **AI Agent Responsibilities** — **Never modify an original.** Aging and grain are render-time. Never trade integrity for storage cost.

---

#### `engineering/DATA_LIFECYCLE.md`

- **Purpose** — What happens to a memory over its whole life, including after the relationship ends.
- **Description** — Retention, export, portability, deletion, the printed book, and the **ending flow** (USER_JOURNEY §21) as a data problem: who owns what when two people separate; how a copy is given to each; what is destroyed; what "the app that ends" actually does to the bytes.
- **Why it exists** — This is the hardest and most ethically loaded engineering topic in the product, and every product like this gets it wrong by not deciding in advance. Canon has already committed to a graceful ending; that commitment has technical, legal, and human consequences that must be written down before a single couple depends on them. It is also the ultimate expression of the product's ethic: it is trustworthy precisely because it will let go.
- **Source of Truth** — Retention, export, deletion, and separation semantics.
- **Depends On** — features/endings · SECURITY_AND_PRIVACY · DATA_MODEL · MEDIA_PIPELINE · LONGEVITY_AND_ARCHIVE.
- **Referenced By** — BACKEND_GUIDE · features/settings · features/endings · legal · GTM_PLAN.
- **Sections** — Retention policy · Export format (**open, documented, readable without this app — this is non-negotiable**) · The printed book · **Separation: the dual-copy model, consent, and what one partner may unilaterally do** · Deletion: soft, hard, and what is truly gone · Account death (literal — one partner dies; this will happen, and it must be handled with more care than any other flow) · Legal holds · Inheritance & bequest.
- **Writing Guidelines** — Plain, careful, humane. Someone will read this on the worst day of their life. Also: it must be legally precise.
- **Update Rules** — ADR + legal review. Any change reviewed against USER_JOURNEY §21 verbatim.
- **Size** — 1,400–2,000 words.
- **AI Agent Responsibilities** — Never implement a delete path not specified here. Never make destruction easy, fast, or accidental. Escalate anything ambiguous to a human.

---

#### `engineering/IMPLEMENTATION_GUIDE.md` ★ (T3)

- **Purpose** — The contract that turns a spec into shipped code, identically, every time, by anyone.
- **Description** — The workflow: which documents to load, in what order; how to derive a build plan from a feature spec; how to verify against acceptance criteria; the definition of done; the PR protocol; when to stop and ask. It is the **operational counterpart to AGENTS.md** — AGENTS says *how to behave*, this says *how to build*.
- **Why it exists** — This is the document that makes the other forty usable. Without it, every agent invents its own process, loads a different subset of context, and produces a different interpretation of the same spec — and the product becomes an average of its contributors rather than an expression of its canon.
- **Source of Truth** — The build workflow.
- **Depends On** — AGENTS · FEATURES · feature specs · DESIGN_SYSTEM · COMPONENT_LIBRARY · CODING_STANDARDS · QA_STRATEGY · DESIGN_QA_CHECKLIST.
- **Referenced By** — AGENTS · README · every contributor.
- **Sections** — The build loop (read canon § → read spec → check ANTI_ROADMAP & NON_NEGOTIABLES → compose from COMPONENT_LIBRARY → tokens only → implement all states incl. aged → a11y in the same commit → reduced motion in the same commit → run DESIGN_QA_CHECKLIST → acceptance criteria → PR) · **The context-loading order and why it matters** · Definition of done · PR template · Commit conventions · When to stop and ask a human · How to propose a spec change · Common failure modes (the catalogue of ways this has gone wrong before).
- **Writing Guidelines** — Numbered steps. Copy-pasteable. Assume the reader is an agent with a limited window and no memory of yesterday.
- **Update Rules** — Add a failure mode every time one is found in review. This document should get smarter every month.
- **Size** — 1,200–1,600 words.
- **AI Agent Responsibilities** — This is the primary operating manual for a coding agent. Follow it literally. State, in every PR, which documents were loaded.

---

#### `engineering/CODING_STANDARDS.md` · `engineering/PERFORMANCE_BUDGET.md` (T3)

- **CODING_STANDARDS** — Language, structure, naming (**names come from GLOSSARY — the codebase speaks the product's language, so `entries`, never `posts`**), state management, error handling, testing conventions, dependency policy (a new dependency is an ADR). 1,000–1,400 words. Agents: follow silently; never add a dependency unasked.
- **PERFORMANCE_BUDGET** — Launch time, scroll performance with a decade of entries, media decode, battery, storage. Contains the **critical carve-out**: *deliberate latency is not a performance defect* (→ INTERACTION_SYSTEM), so a profiler-driven agent cannot "fix" the developing delay. 700–1,000 words. Agents: check before optimizing anything; never delete a documented delay.

---

### TIER 3 — Frontend / Backend / QA / Deployment / AI

---

#### `frontend/FRONTEND_GUIDE.md`

- **Purpose** — How the client app is built.
- **Description** — App structure, navigation implementation (→ INFORMATION_ARCHITECTURE), state management, how tokens and components are consumed, platform differences (iOS/Android, widgets, lock screen), offline store, media handling, testing.
- **Why it exists** — The bridge from design system to running app. Where taste turns into files.
- **Depends On** — DESIGN_SYSTEM · COMPONENT_LIBRARY · TOKEN_PIPELINE · INTERACTION_SYSTEM · MOTION_SPEC · INFORMATION_ARCHITECTURE · API_CONTRACT · SYNC_AND_OFFLINE.
- **Referenced By** — IMPLEMENTATION_GUIDE · CODING_STANDARDS · QA_STRATEGY.
- **Sections** — Project structure · Navigation · State · **Token consumption — and the lint rule that fails a build containing a raw hex, px, or ms** · Component usage · Platform-specific: widgets, lock screen, notifications · Offline store · Media · Accessibility implementation patterns · Testing · Performance.
- **Size** — 1,400–1,800 words.
- **AI Agent Responsibilities** — Load for all client work. Tokens only. Compose, don't create.

---

#### `frontend/TOKEN_PIPELINE.md` ★

- **Purpose** — Make design-code drift structurally impossible.
- **Description** — Tokens are authored once (DESIGN_SYSTEM), stored in a machine-readable source, and *generated* into platform artifacts. Documents the source format, the generation step, the CI check, and the lint rules (**raw hex → build failure**; **accent coverage >5% → warning**; **spring/bounce curve → build failure**).
- **Why it exists** — Every design system dies the same death: a hex typed inline under deadline. Prose cannot prevent that; a failing build can. This tiny document is the mechanism that makes the 5% ceiling and the no-bounce rule *real* rather than aspirational — which makes it, per unit of length, the highest-leverage file in the repository.
- **Depends On** — DESIGN_SYSTEM · DESIGN_GOVERNANCE.
- **Referenced By** — FRONTEND_GUIDE · CODING_STANDARDS · DESIGN_QA_CHECKLIST · CI config.
- **Sections** — Token source of truth · Generation · Platform outputs · CI enforcement · **The lint rules, exhaustively** · How to add a token · Versioning.
- **Size** — 500–800 words.
- **AI Agent Responsibilities** — Never edit generated files. Never bypass a lint rule; if it fires, the code is wrong, not the rule.

---

#### `backend/BACKEND_GUIDE.md`

- **Purpose** — How the server is built and operated.
- **Description** — Service structure, conventions, jobs (notably the scheduled work that drives TIME_MODEL: the developing reveal, the daily question, resurfacing), storage access, encryption boundaries in code, error handling, testing.
- **Why it exists** — The backend of this product is unusual: it is a **synchronizer and a scheduler that cannot read anything it stores.** That constraint is easy to violate accidentally and must be restated where engineers work.
- **Depends On** — TECH_ARCHITECTURE · DATA_MODEL · API_CONTRACT · SECURITY_AND_PRIVACY · SYNC_AND_OFFLINE · TIME_MODEL · MEDIA_PIPELINE.
- **Referenced By** — IMPLEMENTATION_GUIDE · QA_STRATEGY · OBSERVABILITY.
- **Sections** — Service map · Conventions · **Scheduled jobs and their time semantics** · Storage & encryption boundary in code · Queues · Error handling · **Logging: never content, ever** · Testing (including a five-year fast-forward harness) · Local development.
- **Size** — 1,200–1,600 words.
- **AI Agent Responsibilities** — Never log content. Never read plaintext. Never implement a time rule locally.

---

#### `qa/QA_STRATEGY.md`

- **Purpose** — How this product is verified, including the parts that are not verifiable by machine.
- **Description** — Test levels, the acceptance-criteria pipeline (feature spec §13 → test cases, automatically), device matrix, the **time-travel harness** (a product about five years cannot be tested only at day one — QA must be able to simulate a two-year-old account and verify that aging, resurfacing, and the printed book are correct), release gates, and the **emotional review**: a structured human pass against EMOTIONAL_RHYTHM and NON_NEGOTIABLES, because "does this feel like a card shop?" is a real defect class here and no automated test will catch it.
- **Why it exists** — A product whose value only appears after years must be tested against years, or the most important bugs ship undetected and surface in a person's archive when it is too late to fix. And a product whose primary quality is *taste* needs taste to be a formal gate, not a hope.
- **Depends On** — feature specs (acceptance criteria) · TIME_MODEL · NON_NEGOTIABLES · DESIGN_QA_CHECKLIST · ACCESSIBILITY · EMOTIONAL_RHYTHM.
- **Referenced By** — RELEASE_PROCESS · IMPLEMENTATION_GUIDE.
- **Sections** — Test levels · From acceptance criteria to test cases · **The time-travel harness: fixtures for day 1, month 6, year 2, year 5** · Sync & two-device scenarios (incl. the simultaneous-reveal guarantee) · Offline scenarios · Accessibility testing · **Data-integrity testing: the no-lost-memory suite, which gates every release** · Performance · **The emotional review** · Release gates · Bug severity (a lost memory is `S0`; there is no higher class).
- **Size** — 1,200–1,600 words.
- **AI Agent Responsibilities** — Generate tests directly from spec acceptance criteria. Never mark done without the aged-state fixtures.

---

#### `deployment/RELEASE_PROCESS.md` · `deployment/OBSERVABILITY_AND_INCIDENTS.md`

- **RELEASE_PROCESS** — Environments, branching, versioning, store submission, staged rollout, rollback, **migration safety (no destructive migrations, ever)**, and a deliberately unhurried cadence — canon treats feature velocity as an anti-value, and the release process should not manufacture the urgency the product exists to refuse. 900–1,300 words.
- **OBSERVABILITY_AND_INCIDENTS** — What we may observe (crash-free rate, sync success, media integrity, delivery of the developing moment) and, explicitly, what we may not (behavioural analytics — → SUCCESS_SIGNALS). Alerting, on-call, and runbooks, with the **data-loss runbook first**, because in this product a lost memory is the only true emergency. 1,000–1,400 words. Agents: never add telemetry not on the permitted list.

---

#### `ai/PROMPT_LIBRARY.md`

- **Purpose** — Reusable, canon-loaded task prompts so agents start correct instead of being corrected.
- **Description** — Tested prompts for the recurring jobs: implement a surface · build a component · write copy · review a PR against NON_NEGOTIABLES · draft an ADR · write a feature spec · generate tests from acceptance criteria. Each names its required context files (per the AGENTS matrix) and includes known failure modes.
- **Why it exists** — Prompting is now part of the build system. Leaving it to each contributor's improvisation is the same mistake as leaving code style to taste — with more expensive consequences, because a badly-prompted agent produces confident, plausible, canon-violating work.
- **Depends On** — AGENTS · NON_NEGOTIABLES · IMPLEMENTATION_GUIDE.
- **Sections** — How to use · Prompt per task type · Required context per prompt · **Known agent failure modes on this codebase** (adds bounce; adds spinner; adds emoji; writes lyrical copy on the couple's behalf; "fixes" the developing delay; invents a third accent; names things `posts`) · What to do when an agent goes off-canon.
- **Size** — 900–1,400 words, growing.
- **AI Agent Responsibilities** — Use the matching prompt. Append a new failure mode whenever one is caught.

---

### TIER 2 — Marketing

- **`marketing/BRAND_NARRATIVE.md`** — The story told outward: positioning, the naming decision (canon leaves the name open: *"a common word made private… it should sound right whispered"* — the naming ADR belongs here), the one-sentence pitch, the App Store narrative, launch messaging, and **the claims register: every privacy claim, checked line-by-line against SECURITY_AND_PRIVACY.** Depends on MASTER, DESIGN_FOUNDATION, COPY_GUIDE (voice is inherited, never re-invented — a second, louder marketing voice is how products like this begin to lie). 1,200–1,600 words.
- **`marketing/PRICING_AND_BUSINESS_MODEL.md`** — How it makes money without betraying the premise: subscription, the printed book, and the **forbidden models** (ads, data, engagement-based monetization, anything requiring a third viewer). The most important business document in the project, because the wrong model would make every other document unenforceable. Depends on PRODUCT_SCOPE, SUCCESS_SIGNALS, SECURITY_AND_PRIVACY, DATA_LIFECYCLE. 1,000–1,400 words. ADR-gated.
- **`marketing/GTM_PLAN.md`** (T4) — Launch sequence, channels, press. Depends on BRAND_NARRATIVE, BRAND_IDENTITY. 800–1,200 words.

---

### TIER 2/4 — Future

- **`future/LONGEVITY_AND_ARCHIVE.md`** (T2) — **The document most products never write, and the one this product's promise depends on.** Canon promises an archive that appreciates for decades and an app that ends gracefully. That implies obligations no ordinary consumer app accepts: file formats readable in twenty years; an export that works without this company; a documented path if the company dies; the printed book as the offline guarantee; a commitment that the couple's data is not held hostage by the business. Depends on DATA_LIFECYCLE, MEDIA_PIPELINE, SECURITY_AND_PRIVACY, TECH_ARCHITECTURE. 1,000–1,400 words. **Changes require founder-level sign-off** — this is a promise, not a policy.
- **`future/FUTURE_CONSIDERATIONS.md`** (T4) — The parking lot, clearly marked *not a backlog*. Ideas with no commitment, questions we've deferred, and a standing reminder of canon: *"The correct five-year experience is that the app has not changed."* Anything here that graduates does so through PRODUCT_SCOPE and an ADR — never by drifting into a sprint. 600–1,000 words.

---

## 6. Dependency graph

```
                        ┌──────────────────────────────────┐
                        │            CANON (T0)            │
                        │  DESIGN_FOUNDATION.md  ← wins    │
                        │  MASTER.md                       │
                        │  USER_JOURNEY.md                 │
                        └────────────────┬─────────────────┘
                                         │  (frozen; amended only by ADR)
        ┌────────────────────────────────┼────────────────────────────────┐
        │                                │                                │
┌───────▼────────┐              ┌────────▼────────┐              ┌────────▼────────┐
│ GOVERNANCE (T1)│              │  PRODUCT (T2)   │              │   DESIGN (T2)   │
│ AGENTS         │◄────┐        │ PRODUCT_SCOPE   │              │ DESIGN_SYSTEM   │◄──┐
│ NON_NEGOTIABLES│     │        │ FEATURES (index)│              │ COMPONENT_LIB   │   │
│ GLOSSARY       │     │        │ ANTI_ROADMAP    │              │ MOTION_SPEC     │   │
│ DOC_STYLE_GUIDE│     │        │ SUCCESS_SIGNALS │              │ EMOTIONAL_RHYTHM│   │
│ decisions/     │     │        │ ROADMAP·RESEARCH│              │ BRAND_IDENTITY  │   │
│ DESIGN_GOVERN. │─────┼───────────────────────────────────────► │ (governed by ▲) │   │
└───────┬────────┘     │        └────────┬────────┘              └────────┬────────┘   │
        │              │                 │                                │            │
        │              │        ┌────────▼──────────────────┐    ┌────────▼────────┐   │
        │              │        │   ★ TIME_MODEL.md         │    │    UX (T2)      │   │
        │              │        │   the keystone            │    │ INFO_ARCH       │   │
        │              │        └────┬───────────────┬──────┘    │ INTERACTION_SYS │   │
        │              │             │               │           │ COPY_GUIDE      │   │
        │              │    ┌────────▼───────┐       │           │ ACCESSIBILITY   │───┘
        │              │    │ features/*.md  │◄──────┼───────────┤ (16 specs read  │
        │              │    │ (16 surfaces)  │       │           │  all of these)  │
        │              │    └────────┬───────┘       │           └─────────────────┘
        │              │             │               │
        │              │    ┌────────▼───────────────▼──────────────────────────┐
        │              │    │              ENGINEERING (T2)                     │
        │              │    │ TECH_ARCHITECTURE · DATA_MODEL · API_CONTRACT     │
        │              │    │ SYNC_AND_OFFLINE · SECURITY_AND_PRIVACY           │
        │              │    │ MEDIA_PIPELINE · DATA_LIFECYCLE                   │
        │              │    └────────┬─────────────────────────────────────────┘
        │              │             │
        │      ┌───────▼─────────────▼──────────────────────────────────────┐
        │      │                 IMPLEMENTATION (T3)                        │
        └─────►│ IMPLEMENTATION_GUIDE ★ · CODING_STANDARDS · PERF_BUDGET    │
               │ FRONTEND_GUIDE · TOKEN_PIPELINE ★ · BACKEND_GUIDE          │
               │ QA_STRATEGY · DESIGN_QA_CHECKLIST · PROMPT_LIBRARY         │
               └────────┬──────────────────────────────────────────────────┘
                        │
               ┌────────▼──────────────────────────────────────┐
               │        OPERATIONS & OUTWARD (T3/T4)           │
               │ RELEASE_PROCESS · OBSERVABILITY_AND_INCIDENTS │
               │ BRAND_NARRATIVE · PRICING · GTM_PLAN          │
               │ LONGEVITY_AND_ARCHIVE · FUTURE_CONSIDERATIONS │
               └───────────────────────────────────────────────┘
```

### Why this hierarchy, and not the flat one in the brief

The example graph in the brief hangs everything off MASTER as siblings. That is a *table of contents*, not an architecture: it encodes no authority, no direction of dependency, and no rule for resolving conflict — which means it cannot answer the only question that matters at 6pm in month 30, when a spec and a component disagree. This graph is shaped by five decisions:

**1. Canon is a source, not a parent.** Its three documents are not the top of an org chart; they are the *substance* every other document is a projection of. Nothing flows *into* canon. Everything flows *out* of it, and everything is falsifiable against it. This is what "never contradict, never rewrite" means structurally.

**2. Authority flows one way and is transitive.** A component may not contradict a token; a token may not contradict the design foundation. Because the direction is strict, any conflict has a mechanical resolution — walk up the graph until you hit an owner. No meetings required. This is the entire point of the tier model.

**3. TIME_MODEL is elevated to a keystone, on its own.** In the brief's flat graph, time would be scattered across a dozen feature specs. But time is not a feature of this product — *time is the product's mechanism*. "Let time do the rest" is half of the core philosophy; aging, resurfacing, the stack, the developing morning, the anniversary, and the printed book are all one system wearing six masks. Giving it a single node, upstream of both features and engineering, is the highest-leverage structural change I made — and the one most likely to prevent a class of bug that would only reveal itself in year three.

**4. Specification is separated from implementation by a hard line.** Everything above IMPLEMENTATION is durable — it should survive a rewrite from React Native to whatever replaces it. Everything below is disposable. In a product designed to be unchanged in five years, the specification layer *must* outlive the code, or the second implementation will not be the same product.

**5. Two small documents are load-bearing out of all proportion to their size.** `NON_NEGOTIABLES.md` and `TOKEN_PIPELINE.md` are each under a thousand words, and together they are what convert canon from prose into enforcement — one at review time (a human or agent reads the list), one at build time (the compiler refuses the hex). Everything else in this system is a description of intent. These two are the only places where intent acquires teeth. **A rule that cannot fail a build is a preference.**

---

## 7. Writing order

Not by category — by **unblocking**. Each wave exists because the next one cannot be written without it.

**Wave 0 — Governance (week 1).** `GLOSSARY` → `NON_NEGOTIABLES` → `DOC_STYLE_GUIDE` → `ADR_TEMPLATE` → `AGENTS` → `README`.
*Why first:* every later document is written by someone (increasingly, something) that must already know the vocabulary, the prohibitions, and the format. Write these last and you will rewrite everything else.

**Wave 1 — The keystone (week 1–2).** `TIME_MODEL` → `PRODUCT_SCOPE` → `SUCCESS_SIGNALS`.
*Why here:* TIME_MODEL precedes both design and data because both encode it. Deciding it late means retrofitting it into sixteen specs and a schema. SUCCESS_SIGNALS is written before there is any pressure on it — which is the only moment it can be written honestly.

**Wave 2 — Design language (week 2–5).** `DESIGN_SYSTEM` → `MOTION_SPEC` → `INTERACTION_SYSTEM` → `COPY_GUIDE` → `ACCESSIBILITY` → `INFORMATION_ARCHITECTURE` → `EMOTIONAL_RHYTHM` → `COMPONENT_LIBRARY` (+ components) → `BRAND_IDENTITY` → `DESIGN_GOVERNANCE`.
*Why here:* this wave discharges MASTER §2–§9 and closes the commissioning brief. COMPONENT_LIBRARY comes late in the wave because a component cannot be specified before its tokens, motion, interaction states, copy rules, and a11y requirements exist — attempting it earlier is the single most common way design systems are born incoherent.

**Wave 3 — Data & security (week 4–6, parallel).** `SECURITY_AND_PRIVACY` → `DATA_MODEL` → `SYNC_AND_OFFLINE` → `MEDIA_PIPELINE` → `TECH_ARCHITECTURE` → `API_CONTRACT` → `DATA_LIFECYCLE`.
*Why security first:* encryption is the only thing on this list that cannot be added later. Everything else can be refactored; a plaintext archive cannot be un-leaked.

**Wave 4 — Features (week 5–9).** `FEATURES` registry, then specs in dependency order: `onboarding-pairing` → `home` → `daily-question` → `camera` → `developing` → `notebook` → `dictionary` → `music` → `timeline` → `day-page` → `milestones` → `search` → `widgets` → `notifications` → `settings` → `endings`.
*Why this order:* it follows the couple's own path through the product, which means each spec can lean on the state established by the one before. `endings` is last because it depends on every other surface — and because it deserves the most experienced version of the team.

**Wave 5 — Implementation (week 8–11, overlapping).** `TOKEN_PIPELINE` → `CODING_STANDARDS` → `FRONTEND_GUIDE` → `BACKEND_GUIDE` → `IMPLEMENTATION_GUIDE` → `PERFORMANCE_BUDGET` → `DESIGN_QA_CHECKLIST` → `QA_STRATEGY` → `PROMPT_LIBRARY`.
*Why TOKEN_PIPELINE first:* the lint rules must exist before the first component is coded, or the first raw hex is already merged and the precedent is set.

**Wave 6 — Outward & operational (week 10+).** `RELEASE_PROCESS` → `OBSERVABILITY_AND_INCIDENTS` → `PRICING_AND_BUSINESS_MODEL` → `BRAND_NARRATIVE` → `GTM_PLAN` → `LONGEVITY_AND_ARCHIVE` → `FUTURE_CONSIDERATIONS`.
*Exception:* if funding conversations begin earlier, `PRICING_AND_BUSINESS_MODEL` and `LONGEVITY_AND_ARCHIVE` jump to Wave 1 — the business model is the one external force capable of overturning canon, and it should be settled while the canon still has the authority to constrain it.

`ROADMAP`, `RESEARCH`, `CHANGELOG`, `ANTI_ROADMAP` begin at week 1 and are never "finished."

---

## 8. Maintenance strategy

**Front-matter on every file** — `tier · owner · status · last_reviewed · depends_on · discharges`. Machine-readable, which is what makes everything below automatable rather than aspirational.

**Review cadence by tier** — T0: never (amend by ADR only). T1: on canon change. T2: quarterly, and on any change to a document it depends on. T3: per release. T4: continuous.

**Staleness is a CI failure, not a feeling.** A nightly job flags any document whose `last_reviewed` predates the last change to something in its `depends_on`. A stale spec is a bug with a ticket, not a vibe.

**The graph is generated, not drawn.** The dependency diagram in §6 is a rendering of the front-matter. A hand-drawn graph is true for exactly one week; a generated one cannot lie. Cycles fail the build — a cycle in a documentation graph means two documents own the same topic, which is precisely the failure this architecture exists to prevent.

**Spec-first is enforced.** A PR that changes user-visible behaviour without touching a spec is rejected by the PR template. The spec is not documentation of the code; the code is an implementation of the spec.

**NON_NEGOTIABLES is regenerated, never edited.** Quarterly re-derivation from canon; any diff is investigated as drift.

**Every review failure teaches a document.** A misused component adds an anti-example to COMPONENT_LIBRARY. An agent that adds a bounce adds a failure mode to PROMPT_LIBRARY. A missed edge case adds an acceptance criterion. The documentation should be measurably smarter each quarter, and this is the only mechanism by which that happens automatically.

**The annual canon read.** Once a year, the whole team re-reads the three canon documents, cover to cover, aloud if you can stand it. Not for changes — for *calibration*. This is a multi-year product whose greatest risk is not failure but slow, reasonable, well-intentioned drift toward the mean, one defensible decision at a time. An hour a year is cheap insurance against becoming an app that has a streak counter and cannot remember agreeing to one.

---

## 9. Self-review

I refactored this architecture four times. What follows is what was wrong and what I did about it — including what remains unresolved.

### Duplications found and eliminated

| # | The duplication | Resolution |
|---|---|---|
| 1 | **Two prohibition lists inside canon** (MASTER `FORBIDDEN` + DESIGN_FOUNDATION `What we will never ship`), overlapping but not identical | Canon is frozen, so I cannot merge them. `NON_NEGOTIABLES.md` is a **derived, explicitly non-authoritative index** that unions both plus USER_JOURNEY's per-surface prohibitions, citing every line. Regenerated, never edited. |
| 2 | **Colour values in both DESIGN_FOUNDATION and a proposed design system** | Hard boundary: **foundation owns intent + prohibitions; DESIGN_SYSTEM owns names + values.** The system may encode the 5% ceiling; it may never re-explain why amber means *you*. |
| 3 | **Emotional rationale threatening to be restated in every feature spec** | Feature specs open with a mandatory link to their USER_JOURNEY section and are forbidden from re-arguing it. *"If you find yourself writing beautifully, you're writing in the wrong file."* |
| 4 | **FEATURES.md drifting into a feature description doc** (universal failure) | FEATURES.md is a routing table with a hard rule: *if a sentence would also be true in a spec, delete it here.* |
| 5 | **Accessibility in three places** (DESIGN_FOUNDATION §13, USER_JOURNEY §20, component specs) | Canon keeps the principles; `ACCESSIBILITY.md` owns *requirements* (contrast tables, semantics); components carry only a per-component a11y block that links up. |
| 6 | **Time logic scattered across camera, developing, timeline, widgets, milestones, aging** | Extracted to `TIME_MODEL.md`. No feature spec may define a time rule locally. The single most valuable refactor in this document. |
| 7 | **Rejection rationale in both ANTI_ROADMAP and ADRs** | ADRs own rationale; ANTI_ROADMAP is a *view* — one line per rejection, linking out. Two stores of "why we said no" would diverge within a year. |
| 8 | **A separate `METRICS.md` and `OBSERVABILITY.md`, both defining what we measure** | SUCCESS_SIGNALS owns *policy* (what may be measured). OBSERVABILITY owns *mechanism* (how we collect the permitted list). Merging them would have hidden a policy decision inside an ops doc — exactly where a product like this gets quietly corrupted. |
| 9 | **Three AI tool files** (CLAUDE.md, .cursorrules, copilot-instructions) each becoming a rulebook | All three are **generated stubs** pointing at AGENTS.md. Never hand-edited. |
| 10 | **Motion rules in both COMPONENT_LIBRARY and MOTION_SPEC** | MOTION_SPEC owns the catalogue; components *reference* an entry. A component that needs new motion needs a MOTION_SPEC entry, not a local exception. |

### Conflicting responsibilities, redefined

- **MASTER vs DESIGN_FOUNDATION** — potentially a live conflict, since both discuss aesthetics and prohibitions. **Canon resolves it itself:** MASTER states that DESIGN_FOUNDATION always wins. Encoded as Precedence Law and placed at the top of AGENTS.md.
- **USER_JOURNEY vs feature specs** — journey owns *feeling*, spec owns *behaviour*. The journey says photos develop at dawn; only the spec says whose dawn, and only TIME_MODEL says what dawn *is*.
- **DESIGN_SYSTEM vs COMPONENT_LIBRARY** — system owns values, library owns composition. A component may never define a value.
- **INTERACTION_SYSTEM vs MOTION_SPEC** — interaction owns *what a gesture does and what state follows*; motion owns *how the change is rendered in time*. The seam is: interaction ends where the frame begins.
- **PERFORMANCE_BUDGET vs INTERACTION_SYSTEM** — a genuine, dangerous conflict: performance work will attack deliberate latency, in good faith, forever. Resolved by an explicit carve-out written into the performance document itself, so the engineer optimizing the camera reads the exemption in the file they're already in.

### Documents I added that the brief did not anticipate — and why

- **`TIME_MODEL.md`** — because time is this product's mechanism, not its metadata.
- **`NON_NEGOTIABLES.md`** — because the prohibitions are the product's real moat, and they were unfindable across three files and 23 subsections.
- **`TOKEN_PIPELINE.md`** — because the 5% accent ceiling and the no-bounce rule are only real if a build can fail on them.
- **`SUCCESS_SIGNALS.md`** — because "no metrics" must be a written policy *before* the first board meeting, or it becomes an analytics SDK.
- **`DATA_LIFECYCLE.md` + `LONGEVITY_AND_ARCHIVE.md`** — because canon promises a graceful ending and a decades-long archive, and neither promise survives contact with a company that hasn't written down what it means. One partner will die. The company may fail. Both are certainties over a multi-year horizon, and both are currently unspecified.
- **`EMOTIONAL_RHYTHM.md`** — because MASTER §7 commissions it and canon never wrote it; and because emotion in this product is *rationed*, and a ration needs a ledger.
- **`ANTI_ROADMAP.md`** — because in a product where refusal is the strategy, "no" must be a first-class, browsable artifact.
- **`PROMPT_LIBRARY.md`** — because in 2026 prompting is part of the build system, and the known ways agents corrupt *this specific* product deserve to be written down once.

### Documents I deliberately did **not** create

- `PRODUCT_VISION.md` (from the brief's example) — **MASTER is the vision.** Creating a second vision document is the most reliable way to end up with two philosophies and a slow civil war.
- `USER_JOURNEY.md` as a new file — it already exists as `emotional-journey.md`. **Rename; never rewrite.**
- `DESIGN_PRINCIPLES.md` (MASTER §1) — that is DESIGN_FOUNDATION §1–§4, already written, better than a restatement would be. **MASTER §1 is already discharged by existing canon.**
- `AI_FEATURES.md` — the product has, and must have, **no AI features**: canon says *the machine may arrange; it may never author*. The AI category here concerns the agents *building* the product, and that distinction is important enough to state in AGENTS.md so no agent helpfully proposes a "memory assistant."
- `METRICS.md` · `ONBOARDING.md` · `CONTRIBUTING.md` · `TESTING.md` — each would have been a thin duplicate of SUCCESS_SIGNALS, README, IMPLEMENTATION_GUIDE, and QA_STRATEGY respectively.

### Known weaknesses of this architecture

Honesty is more useful here than tidiness.

1. **It is large.** ~45 documents, ~55,000 words. For a two-person team in month one, that is a burden, and there is a real risk the docs become a project that competes with the product. **Mitigation:** the waves are ordered so that Waves 0–2 (~15 documents) are sufficient to start building; everything after is written against real pressure. If you write all 45 before writing code, the architecture has failed you.
2. **COMPONENT_LIBRARY will be the hardest to keep true.** It is the most-touched document, and libraries drift toward their implementations. TOKEN_PIPELINE guards the values; nothing structurally guards *anatomy*. The only real defence is that new components are rare by governance — which depends on a human actually saying no.
3. **`EMOTIONAL_RHYTHM` is the doc most likely to be ignored** by engineers and agents, because it is the least mechanical. It earns its place only if DESIGN_QA_CHECKLIST references it concretely — which is why the emotional review is a *release gate*, not a suggestion.
4. **Canon's frozenness will be tested.** Somewhere around month 18, a real constraint will collide with a canon line, and someone will want to quietly edit DESIGN_FOUNDATION rather than write an ADR. That moment is the actual test of this system, and no document can win it — only a person can. It's worth deciding now, in advance, who that person is.

### The architecture's own test

*Could a competent engineer who has never met the founders, working with Claude Code in month 30, build the dictionary screen correctly — including its aged state, its accessibility, its motion, its copy, and its refusal to have a usage counter — reading only these documents?*

With Waves 0–4 written: **yes**, and the counter is refused three separate ways — NON_NEGOTIABLES lists it, `features/dictionary.md` §1 quotes the canon prohibition, and DESIGN_QA_CHECKLIST catches it at review.

That redundancy is deliberate. Everything else in this system is designed to have exactly one source of truth. **The prohibitions are the one thing worth saying three times** — because they are the only part of the product that cannot be rebuilt after it has been lost.
