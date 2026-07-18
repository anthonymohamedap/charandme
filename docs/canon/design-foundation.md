# Design Foundation
### A private place where two people keep the small things

*Pre-feature document. Nothing here describes what the app does. Everything here describes what the app is, and what it must never become. Features are decided after this is agreed — and every feature will be argued against this document.*

---

## 1. Brand philosophy

**The moments you'll miss most are the ones nobody thought to photograph.**

Weddings, birthdays and holidays are over-documented. Everyone has those. Nobody has the way he mispronounces a word on purpose, the 2 a.m. kitchen conversation, the receipt from the night it rained, the voice note where she's laughing too hard to finish the sentence. Those evaporate. And they are, ten years later, the ones worth the most.

So the product has exactly one job:

> **Lower the cost of keeping the ordinary. Let time do the rest.**

Three convictions follow from that.

**A relationship is not content.** There is no audience. No feed, no likes, no follower count, no share sheet. The moment a third person can see it, the couple starts performing, and performance kills the ordinary. Two people is the entire market for this product.

**Nostalgia cannot be manufactured, only aged.** We do not apply a "memory" filter and call it precious. We build a vessel that is honest today and devastating in five years. The app's value curve is the inverse of social media's: social media is maximally rewarding on day one and worthless by year three. This is nearly weightless on day one and priceless by year ten. We design for the second reading, not the first.

**Time is the co-author.** The couple writes the words; time supplies the meaning. Our contribution is patience — we hold things, warm them, and hand them back at the right moment.

**What this replaces:** the shared camera roll nobody scrolls, the text thread that scrolls away forever, the shoebox that only exists in the past tense.

**The one-line brief:** *A shoebox with a memory of its own.*

---

## 2. Emotional design principles

Ten rules. They are ranked. When they conflict, the lower number wins.

**1. The room, not the stage.**
Everything is designed as if the two of them are alone in it. No metrics of any kind — not even private ones. A relationship with a score is a relationship with a scoreboard.

**2. Nothing here asks anything of you.**
No streaks. No daily prompts that guilt. No "you haven't connected in 4 days." Love is not a habit-tracker, and an app that manufactures obligation will be uninstalled the first bad week — precisely when it should be a refuge. The app never opens with a demand. It opens with something you already made.

**3. Small over grand.**
The friction of keeping one sentence, one photo, one seven-second sound must be near zero. Anniversaries take care of themselves. We optimize for Tuesday.

**4. Latency is intimacy.**
Instant is a convenience value, not an emotional one. The disposable camera is beloved because you had to wait, and because you couldn't retake it. We deliberately build in delay and irreversibility where it deepens meaning — things that develop, things that arrive, things that surface on their own. Never delay for its own sake; delay only where the wait is the point.

**5. Imperfection is preserved, never corrected.**
The blur stays. The typo stays. The rambling stays. We do not beautify, auto-enhance, straighten, deduplicate, or "improve" what a person made. Their handwriting is theirs. Their bad photo is the good one.

**6. Quiet by default.**
No red badges. No push notification that shouts. Interruption is a cost we pay only when a partner has done something, never when the system wants attention.

**7. Warmth without sweetness.**
No hearts, no pink, no cursive fonts, no "Aww!", no confetti. The register is a good letter, not a greeting card. Restraint is what makes it feel adult, and adult is what makes it feel true.

**8. Leave room for silence.**
Empty screens are not failures to be filled. A blank page in a notebook is not an error state. We never apologize for emptiness or panic-fill it with suggestions.

**9. Everything can be deleted; nothing can be broadcast.**
Privacy isn't a compliance checkbox here, it's the entire emotional precondition. If either person suspects an audience, the product's core value collapses.

**10. Endings are designed, not ignored.**
People break up. People die. An app full of a shared past must handle that with more grace than any other moment in the product — no auto-resurfacing of a person who is gone, an exit that is calm and complete, an archive that can be taken away whole and kept. Most products ignore this. Ours will be remembered for it.

---

## 3. Design language

### The metaphor: **paper under lamplight**

Not skeuomorphism. No stitched leather, no page-curl gimmicks. The metaphor lives in *light, weight, warmth and rhythm* — not in decoration.

**Three physical facts drive every decision:**

- **There is a light source.** Warm, above and slightly left, like a lamp on a bedside table. All shadows agree with it. All highlights agree with it. Nothing in the interface is lit from nowhere.
- **There is a surface.** Paper has tooth, weight, and a temperature. Surfaces are opaque and matte. There is no glass, no frost, no blur-as-decoration, no glow.
- **There are things on it.** Photographs, ink, tape, a record. Content sits *on* the surface; the interface never sits on top of the content.

### The thesis (our one aesthetic risk): **night is the default.**

Most products design daylight first and grudgingly invert it. We invert the priority. This is an app for late-night conversations, R&B, warm lamps, the hour when people are honest. **The dark mode is the real mode** — it is designed first, in full, and it is where the brand is most itself. Daylight mode is the honest, beautiful daytime version of a nocturnal thing: warm paper under a window.

Everything else about the brief — the paper, the serif, the warmth — is common enough territory that only this choice, executed precisely, will make it ours.

### Composition

- **Content is the interface.** Chrome recedes to near-invisibility. Where a control can be a word, it is a word.
- **Margins are generous and asymmetric**, like a printed page with a gutter — more space on one side. A page is not a card grid.
- **One idea per screen.** Apple's discipline: if a screen is doing two things, it's two screens.
- **Rhythm before grid.** 8pt base unit, but the vertical rhythm is set by a 28pt ruled line — the interval of a notebook. Text sits on that rule.
- **Three elevations only:** the *page* (the surface), the *card* (a thing lying on it), the *sheet* (a thing brought close to your face). No fourth.
- **Corners:** 4pt on paper-like objects, 2pt on photographic ones (a print has almost no corner radius). Nothing is a pill. Nothing is a circle except a record and a face.

---

## 4. UI personality

**If the product were a person:** someone who lowers their voice when the subject matters. Literate, unhurried, discreet, dryly warm. They remember what you said last spring and mention it exactly once, at the right time. They do not gush.

| It is | It is never |
|---|---|
| Understated | Cute |
| Literate | Clever |
| Unhurried | Sluggish |
| Tactile | Nostalgic-by-costume |
| Attentive | Needy |
| Warm | Sentimental |
| Discreet | Coy |

### Voice and copy

- **Sentence case everywhere.** Title Case Is A Uniform, and this product isn't wearing one.
- **Plain verbs.** "Keep," "Add," "Write," "Open," "Send." Not "Capture your moment," not "Submit."
- **The interface never uses the word "memory" as a noun for a thing you save.** It's precious language and it's exhausting when the UI says it forty times. The UI says *note*, *photo*, *letter*, *sound*, *day*. Let the person decide it was a memory.
- **Dates are spoken, not stamped.** "A Tuesday in March," "two winters ago," "this time last year." Machine formats appear only where precision is functional.
- **No exclamation marks.** Not one, anywhere in the product.
- **Empty states are invitations, not apologies.** "Nothing from today yet." — then a single way in.
- **Errors are plain and non-anxious.** They say what happened and what to do. They never say "Oops."
- **The app never speaks for the couple.** No AI-written love notes, no suggested captions, no auto-generated "Your year in review!" voiceover. The machine may arrange; it may never author.

---

## 5. Visual identity

### The mark: **two rings**

Two overlapping circles, drawn as the rings two glasses leave on a wooden table — imperfect, uneven weight, one slightly darker where it was set down harder. Not a Venn diagram of icy geometry; a trace of an evening.

It reads simultaneously as: two lives overlapping · two coffee cups at a late table · the concentric grooves of a record · a stain, which is to say, evidence that something happened here.

**Construction:** ink-drawn stroke of varying weight (0.75–1.25 optical), never a uniform vector ring. Slight ellipse — a table seen from a sitting height, not a plan view. The two rings are the *same* ring, drawn twice, imperfectly — because the whole product is about two versions of the same evening.

**The overlap is the brand's only sacred area.** In the mark, the intersection is where the two accent colors meet and become a third quiet tone. This is not decoration — it's the thesis in one shape.

**Rules:** monochrome ink is the default lockup. The colored version is used sparingly (app icon, cover pages, the moment two people are joined). No wordmark inside the mark. Never centered on an animated splash screen with a fade-up; the mark appears on paper, at rest, like a letterhead.

**Naming:** to be developed. It should be a common word made private, not a portmanteau, not an -ly, and it should sound right whispered.

---

## 6. Typography

Type is where the personality lives, so it carries a hard rule:

> **The serif is the couple's world. The sans is the machine's world. They never mix inside a line.**

Everything the two people made — words, dates, letters, captions — is set in the serif. Everything the app says about itself — buttons, labels, timestamps as data, settings — is set in the sans, small and quiet. Over time a person stops noticing the sans entirely, which is the point.

**And the app owns no handwriting font.** Ever. Handwriting in this product is *theirs* — real ink, from a finger or a stylus, or not at all. A simulated handwriting typeface would be the single fastest way to make this product feel like a card shop.

### Editorial serif — *the voice*

The character of a 1970s magazine feature: warm, high-contrast-but-not-brittle, with a little ink in the joints.
**Primary:** GT Alpina, or Lyon Text. **Alternates:** Freight Text Pro, Tiempos Text. **Open-source path:** Newsreader (display), Source Serif 4 (long-form).
- Long entries: 17–19pt, 1.55 line-height, measure of 62–68 characters, tracking 0.
- Display: 28–40pt, tracking −1.5%, optical sizes used properly. Large type is set tight; small type is set open.
- **Oldstyle (text) figures in prose. Lining figures in UI.** A date inside a sentence should not shout.
- Italics do real work here — they're the closest thing type has to a lowered voice. Used for asides and for a partner's words quoted inside your own.

### Utility sans — *the machine*

Neutral but humane. **Primary:** Söhne, or Suisse Int'l. **System path:** SF Pro / Roboto. **Open-source path:** Inter, tightly tracked.
- Only three sizes exist: 15pt (controls), 13pt (metadata), 11pt (rare, all-caps micro-labels at +6% tracking).
- Weight range is limited to Regular and Medium. There is no Bold in this product's UI. Emphasis is achieved with contrast and space, not with fat.

### Hierarchy is built from **size and space**, not weight and color. If a screen needs a bold red heading to be understood, the screen is wrong.

---

## 7. Color palette

Two rules govern everything below.

> **Rule 1 — The interface is made of ink and paper. The accents are made of light.**
> Yellow and purple are never *materials* and never *fills*. They are a lamp, a bruise of dusk, a highlighter stripe, the glow at the edge of a photo. They arrive as light does: small, warm, and mostly at the edges.

> **Rule 2 — 5% ceiling.** Accent may occupy no more than 5% of any screen's pixels. There is no accent-filled button in this product. If a screen looks like a "brand color" screen, it ships without color.

### Night (primary mode)

| Token | Hex | Use |
|---|---|---|
| Room | `#131110` | The base. Warm near-black; never `#000`. |
| Surface | `#1C1917` | Page. |
| Raised | `#242019` | Card, sheet. |
| Ink Inverse | `#EDE6DA` | Primary text. Warm bone, never white. |
| Muted | `#A0958A` | Secondary text, metadata. |
| Whisper | `#6A6158` | Dividers, disabled, hairlines. |

### Day (secondary mode)

| Token | Hex | Use |
|---|---|---|
| Paper | `#F4F0E8` | The base. Warm, slightly grey — oatmeal, not cream. |
| Paper Aged | `#E9E2D6` | Recessed surfaces, older content. |
| Ink | `#1A1613` | Primary text. Warm brown-black, never `#000`. |
| Muted | `#6B6259` | Secondary text. |
| Whisper | `#CFC6B8` | Dividers, hairlines. |

### The two accents

| Token | Hex | Meaning |
|---|---|---|
| **Lamplight** | `#D9A441` | Amber, not lemon. Warm, low-saturation, slightly dirty. |
| **Dusk** | `#6B5A8E` | Muted iris. Grey-violet, never lavender, never electric. |
| **Overlap** | `#8A6A6E` | The plum-bronze where the two rings cross. |

**Semantics — this is the most important paragraph in the color section.**
**Lamplight is you. Dusk is them.** The two accents are not decoration; they are *identity*. A hairline of amber marks what you made; a hairline of dusk marks what they made. You learn this in a week and then never think about it again. And where the two meet — a day you both wrote on, a photo you both kept, the anniversary of something you both remember — the **Overlap** tone appears. It is rare by construction, which is exactly why it lands.

**Prohibitions.** No pure black or pure white. No red — destructive actions use `#9C4B3F` (desaturated brick) and are always accompanied by a word. No success green: a confirmation is a sentence, not a checkmark. No gradients as surfaces (gradients exist only *inside* photographs, where a real lens put them). No color on typography except the two accents at hairline scale. Accent text, where unavoidable, uses darkened variants (`#B4832C`, `#544471`) to clear contrast.

**On accessibility of this pair:** amber and violet were chosen partly because they survive the most common color vision deficiencies (the blue–yellow axis is preserved under both deuteranopia and protanopia). But they still never carry meaning alone — see §13.

---

## 8. Motion principles

**We are editing film, not animating a UI.**

- **Dissolve, don't slide.** The default transition is a cross-dissolve with a hair of scale (0.98 → 1.00). Sliding is a filing-cabinet metaphor; dissolving is a memory metaphor. Slides are permitted only where a real spatial relationship exists.
- **The curve is a hand, not a spring.** `cubic-bezier(0.22, 0.61, 0.36, 1)` — a gentle out-ease with no overshoot. **There is no bounce anywhere in this product.** Bounce is a toy's physics; this is not a toy.
- **Two tempos.**
  *Interface* — 180–320ms. Quick enough to feel responsive, slow enough to feel considered.
  *Narrative* — 600–1200ms. Used perhaps five times in the entire product, at moments that deserve a held breath. Never used twice in a row.
- **Weight.** Sheets are heavy — they take longer to lift than to fall. Photographs settle. Paper does not accelerate like plastic.
- **Stillness is a state we design.** When the person is still, the app is *completely still*. No breathing gradients, no drifting backgrounds, no shimmer, no ambient particles. The screen at rest is a photograph.
- **Haptics are punctuation, not applause.** One soft tick when something is kept. One slow, low double-tap when something arrives from the other person — a knock at the door, not a notification. Nothing else vibrates. Ever.
- **Never: confetti, hearts, sparkles, parallax on scroll, elastic overscroll on content, loading spinners.** Waiting states are typographic or nothing.
- **Reduced motion** removes movement, never meaning: dissolves become instantaneous cuts; the narrative moments still happen, they simply arrive already arrived.

---

## 9. Icon style

**Drawn, not engineered.**

- Rendered as if with a fine fountain pen: **1.5pt stroke**, with subtle optical weight variation, on a **24pt grid** with a 20pt live area.
- **Optical, not geometric.** No perfect circles, no snap-to-45°. A line may be a half-degree off. The hand shows.
- Terminals are softly cut, not fully rounded. Joins are slightly heavier, as ink pools.
- **Stroke only.** Fills exist for exactly one purpose: to indicate the single active item. Filled ≠ decorative; filled = *here*.
- **Icons are ink.** Accent color appears on an icon only when that icon represents a person (you/them) or the currently active thing.
- **Fewest icons possible.** Where a word is clear, the product uses the word. An interface of twenty icons is an interface that has stopped trusting language. Target: fewer than a dozen in the entire product.

---

## 10. Illustration style

Illustration is a last resort, used only where language would be worse: a few empty states, a few seasonal covers, the moments in onboarding where a picture is genuinely kinder than a sentence.

**The reference is a mid-century magazine spot illustration** — the small drawing beside a short story, not a marketing hero.

- **Single-weight line, one flat warm underlay, one paper-grain texture.** Three ingredients, no more.
- **Objects and rooms — never people.** A cup, a cassette, a doorframe left open, an unmade corner of a bed, a lamp, a record sleeve. **The couple supplies the faces.** Any illustrated human in this product would be an imposter standing in the middle of their relationship.
- **Never:** mascots, characters, gradients, isometric scenes, blobs, 3D renders, "flat vector" people, hearts.
- **Empty states get a *fragment*, not a scene** — a drawn hairline that stops mid-stroke, room left over. The picture should feel like it's waiting for them, too.

---

## 11. Photography style

### Their photographs

The photography of this product is theirs. Our job is not to improve it.

- **Native aspect ratios, always.** No square crops, no auto-crop to a grid. A vertical photo is allowed to be vertical.
- **No filters by default. No auto-enhance. No sharpening. No face beautification. No duplicate detection.** The blurry one is the one they'll want.
- Each print sits on a **hairline paper mat** — 6–8pt of surface visible around the image, and a warm, soft, low-opacity drop shadow from the lamp above-left. It is a print resting on a table, not a rectangle bleeding to the edge.
- One optional treatment exists, and only one: a **develop** profile — modest grain, a touch of amber lift in the highlights, a violet cast in the shadows. Note where that came from: this is simply how film behaves. **Our brand colors are recovered from the chemistry of a photograph, not painted on top of one.** The palette and the photography are the same idea.

### Our photography (onboarding, marketing, app store)

- **Available light only.** Lamps, windows, streetlight through a curtain, a phone screen lighting a face. One exception, and it's a motif: the **hard disposable flash** — blown highlights, deep falloff, red-eye left in. It is used for night, and it is used rarely.
- **35mm grain. Slight halation. Warm cast. Imperfect focus.** Shot, not rendered.
- **Fragments, not portraits.** Hands, a wrist, the back of a head, two coffees, a shoulder in a doorway. **Nobody looks at the camera** — because there is no camera; the viewer is not a guest. Never a model couple laughing on a beach.
- **Ordinary rooms.** Rented kitchens, unmade beds, a cluttered table. Aspirational interiors are a different product's lie.

---

## 12. Materials and textures

- **Paper tooth:** a fine, non-repeating grain at **3–5% opacity**, present on every surface. It must be *felt and not seen*. If a user could describe it, it's too strong. It disables entirely in high-contrast mode.
- **Ink:** text sits *in* the surface, not on it — an almost imperceptible warm bleed at the glyph edges. Never a glow, never a stroke.
- **Light:** one source, warm, above-left. Shadows are long, soft, low-opacity and *warm-toned* (`rgba(60,40,20,…)` in day; a lifted warm haze in night). There is no cool grey shadow in this product.
- **No glass, no frost, no neumorphism, no bevel, no gloss.** Blur exists in exactly one place: a paper-thin scrim behind a lifted sheet, so the page below reads as *below* rather than *behind glass*.
- **Vinyl** is not a texture; it is a *behavior*, confined to sound. Audio is drawn as a circular groove, and it turns while it plays. It appears nowhere else, which is how it stays special.
- **Tape, staples, paperclips: forbidden.** This is the exact line between "notebook" and "scrapbook craft app," and we stay on the correct side of it.

---

## 13. Accessibility rules

Non-negotiable, and treated as design constraints rather than remediation.

- **Contrast:** 4.5:1 minimum for all text; **7:1 target for long-form reading**, because people read letters here for minutes at a time. Hairlines and dividers meet 3:1 against their surface.
- **Color is never the only signal.** The you/them accent system is always redundantly encoded — by name, by position, and by typographic tone. Someone who sees no color at all must lose nothing but pleasure.
- **Dynamic type to 200%** with genuine reflow. The serif holds at every size; nothing truncates with an ellipsis; nothing becomes a horizontal scroll. Long-form content is *never* size-locked for layout's sake.
- **Touch targets ≥ 44pt**, including on photographs and inline dates.
- **Reduced motion** honored globally (see §8), and reduced transparency removes the sheet scrim.
- **High contrast mode** disables grain, ink bleed and all shadows, raises ink to full strength, and — importantly — the product remains recognizably itself. If our identity collapses without texture, our identity was texture-deep.
- **Screen readers get prose, not data.** An entry is announced as a person speaking on a day, not as "Cell 3, image, timestamp 1647." Dates are read the way we write them.
- **Every sound has text and every text can be sound.** Voice notes are auto-transcribed (privately, on-device); written entries can be read aloud.
- **Haptics never carry meaning alone.** Anything a vibration says, the screen also says.
- **Night mode is a first-class citizen** — it is designed, tested and shipped to the same contrast standard as day, not derived from it by inversion.

---

## What we will never ship

Kept here on purpose, at the end, because a design language is defined as much by its refusals: streaks · relationship scores or health metrics · leaderboards · public profiles · a share-to-Instagram button · ads · AI-written messages between partners · gamified prompts · notifications engineered for re-engagement · a red badge · a "Year in Review" we made without being asked · hearts · confetti · anything that measures a relationship, and thereby ends it.

---

*Next: features. Every proposed feature will be tested against three questions — Does it help keep an ordinary thing? Does it get better with age? Would it survive a bad week?*
