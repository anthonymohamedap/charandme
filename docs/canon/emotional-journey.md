# The Emotional Journey
### Companion to the Design Foundation. No screens. No wireframes. Only what people will feel, and why.

---

## 0. The architecture, in one paragraph

There is one object in this product: **the day**. Everything either person keeps attaches to a day, and a day is a page. Two people write on the same page. Most pages are blank — and a book of mostly-blank pages is an honest book. There is no feed, because a feed is a river you can't step in twice; there is a book, which you can. The app has three verbs — **keep**, **answer**, **find** — and the second-most important sentence in this document is: *the app runs out.* You open it, there is today's page and one thing from the past, and then there is nothing left to do. **A good session is forty seconds.** Any feature that extends that number is a feature that has misunderstood the product.

The most important sentence remains: **lower the cost of keeping the ordinary.**

Two rules for everything below:
> **The compounding test.** If a feature is not measurably more valuable in year three than in week one, it is cut. Not deferred — cut.
> **The plagiarism test.** If BeReal, Instagram, Locket or Apple Journal could ship it unchanged, it is not ours yet.

---

# I. Arrival

## 1. First launch

**Why it exists.** To set a register in under ten seconds — and to make one promise so plainly that everything afterward is believed.

**Emotional goal.** *Recognition, then quiet.* The feeling of a door closing behind you in a good way.

**Before:** curious, faintly skeptical, braced for another app that will want things from them.
**After:** *"Oh. This one is not going to shout at me."*

**The experience.** Night. Warm near-black. No logo animation, no gradient, no hero image of a laughing couple. Three lines, one at a time, in the serif, each replacing the last on a slow dissolve:

> *This is for two people.*
> *No one else will ever see it.*
> *It's for the small things. Those are the ones that go.*

Then: **Begin.**

**Primary action.** Begin. There is one button on this screen and it says one word.

**What must NOT exist.** A feature carousel. A value-prop slider. A "Sign in with…" wall as the first surface. Permission prompts (camera, notifications, contacts) — every permission is requested at the exact moment it is first needed, and never before. A "Skip" link, because there is nothing here to skip. Any illustration of a person.

**How it compounds.** It doesn't have to — this screen is seen once. But it is *quoted* forever: those three lines become how the person describes the app to a friend. First launch is not onboarding; it is the writing of the sentence the user will say out loud later.

**Why alternatives were rejected.** The standard three-panel carousel exists to teach features. We are not teaching features; we are declaring a relationship to the user. Anything that explains too much implies there is a lot to learn, and the entire premise is that there isn't.

---

## 2. Onboarding

**Why it exists.** To ask for the absolute minimum, and to make the *first* thing we ask a question that reveals what kind of product this is.

**Emotional goal.** *Relief at how little is wanted from you.*

**Before:** braced for a form.
**After:** surprised it's over; already slightly disarmed.

**The experience.** We ask **one** question:

> *What do they call you?*

Not "First name." Not "Full name." The name your partner actually uses — the nickname, the diminutive, the wrong name that stuck. It is used everywhere in the product. It is the first proof that this app is aimed at a very specific two people, and it costs us nothing to ask it correctly.

That's it. Then: *"Now the other one."* → Pairing.

**Primary action.** Type a name.

**What must NOT exist.** Birthday. Gender. Anniversary date (we do not presume there was one, or that they agree on it). "How did you meet?" Relationship type. Contact access. An avatar upload (a face is not required to be present here; and asking for a selfie first makes it a profile, and a profile is the beginning of an audience). Any question we do not immediately need. Analytics consent theatre — the answer is that we don't collect content, ever, and that is a sentence, not a modal.

**How it compounds.** In year six, the app still calls you the name they gave you in year one. If that name changes, changing it is a small, quiet, emotional event. The app is one of the only places that name is written down.

**Why alternatives were rejected.** Progressive profiling (asking more later) was considered and rejected as manipulative — asking for less is not a growth tactic here, it's the product. Anniversary-date collection was rejected because auto-calculated "Day 1,000!" counters are exactly the gamification we've banned (see §13).

---

## 3. Pairing

**Why it exists.** Because the app cannot exist alone, and the moment of joining is the emotional cornerstone of the entire product. This is not "adding a friend." **It is handing someone a key.**

**Emotional goal.** *Ceremony.* Small, held-breath, slightly formal. The digital equivalent of writing both names inside the cover of a book.

**Before:** the anticipation of getting someone else to install something (a real friction, felt as slight embarrassment).
**After:** *we now have a place.*

**The experience.**
One invitation. Single-use, expires in 24 hours, sent however they like. There is no username, no discovery, no search, no QR-code-scanning-a-stranger, no "people you may know," no friend list — **because there is no second slot.** The space is architecturally incapable of holding a third person, and we say so, once, plainly: *"This space can only ever hold two people."*

When the second person accepts, both phones — wherever they are — do the same thing at the same moment: the two rings of the mark drift together and, for about a second, **the Overlap tone appears.** Then the paper. It is the only time that color is spent without being earned, and it is the promise of every time it will be earned later.

Then the couple makes the app's **first shared decision**, together, before anything else:

> **Choose your hour.**
> *The time you're usually both awake, and not busy. This is when we'll ask you something.*

Not a random hour. Not our hour. **Theirs** — 10:40 p.m., or 7:15 a.m. on the train, or whenever their actual life has a seam in it. Choosing it together is the first thing they ever do inside the product, and it is a genuinely intimate negotiation disguised as a settings screen.

**Primary action.** Send one key / choose one hour.

**What must NOT exist.** Multiple simultaneous invites. Re-pairing without a deliberate, slow, confirmed action. Any social graph. Any suggestion of who to pair with. Confetti. A "You're connected!" success screen with a green checkmark — the success state is the paper appearing, and the paper is enough.

**How it compounds.** "Your hour" becomes a real, load-bearing ritual — the time of day the two of them look at their phones for the same reason. Five years in, that minute belongs to them. And the invite being single-use, non-transferable and unrepeatable means the pairing moment can only ever happen once with this person. That is not a technical constraint. That is the point.

**Why alternatives were rejected.** A random daily alarm (BeReal's engine) was rejected outright: it optimizes for simultaneity by *ambushing* you, which produces engagement and anxiety. We want simultaneity by *appointment*, because an appointment is what couples with a long shared life actually have. Chosen time > random time, in every year after the first month.

---

# II. The everyday

## 4. Home

**Why it exists.** To be a page, not a feed. To be finishable.

**Emotional goal.** *Arriving somewhere quiet that already has something small waiting for you.*

**Before:** whatever they were feeling. The app claims no emotional entrance fee.
**After:** *held* — and then released. The strongest signal of success is that they close the app on purpose.

**The experience.** Two things, in this order, on a warm dark page:

1. **Today.** Mostly blank. The date, spoken in words ("Wednesday, late July"). One line of ambient truth we collect for free: *"20°, raining since four."* If either of you has kept anything today, it's here, in the order it happened, with a hairline of Lamplight (you) or Dusk (them) at its edge. If neither of you has, it says so — plainly, without reproach: *"Nothing yet."* A blank day is a true record of a day.

2. **One thing from before.** Exactly one. Chosen once, at dawn. It does not change if you close and reopen. **You cannot pull for another.** If you want more, the timeline is there — but the home screen will not become a slot machine. And its selection is deliberately biased *away* from highlights: it prefers a Tuesday with a single sentence over a holiday with forty photos. Anyone can resurface a wedding. Only we resurface a Tuesday.

Then it ends. There is nothing below it. There is no scroll. **The bottom of the home screen is the bottom.**

**Primary action.** Keep something. One control, bottom of the page, always the same place, always reachable with a thumb: a small ink mark that opens **the four ways to keep** — a line, a photo, a sound, a song.

**What must NOT exist.** An infinite scroll. A "for you" anything. Any number, anywhere: no counts, no day-counters, no "you have 3 unread." Unread badges. A "streak." Stories. A tab bar with five tabs (this product has one home, one book, and a way in — no more). A refresh gesture (there is nothing to refresh — the day is the day).

**How it compounds.** In week one, the "one thing from before" is empty or trivial. In year one, it's occasionally moving. In year four, it is the most reliably devastating notification-free moment in the person's phone — because by then the archive is deep enough that the algorithm's bias toward the mundane has thousands of forgotten Tuesdays to choose from. **This is the single feature whose value curve is steepest.** It is worth almost nothing at launch. That is a feature, and we will need the nerve to hold it.

**Why alternatives were rejected.** A grid of recent photos (Locket, Instagram) makes the app a *viewer*, and viewers get scrolled. A partner-presence widget ("she's online") makes it a *communication channel*, and channels create obligation. An "On This Day" carousel you can swipe through was rejected because *the ability to pull the lever converts nostalgia into consumption.* Scarcity is the only thing that keeps a memory a memory.

---

## 5. The daily shared moment — **the same question**

*(BeReal-inspired, then taken apart and rebuilt.)*

**Why it exists.** BeReal correctly identified the strongest social mechanic invented in a decade: **simultaneity plus unpreparedness plus a lock** (you can't see theirs until you've given yours). Then it aimed that mechanic at an audience of ninety acquaintances, added a countdown, added lateness, added guilt, and burned out. We are taking the engine and putting it in the right vehicle: two people, no audience, no clock.

**Emotional goal.** *The pleasure of finding out something ordinary and true about someone you already know completely.*

**Before:** a phone buzzing at your hour, gently, both of your phones, at the same second, wherever you are.
**After:** you know what they ate. You know what woke them. You know where their hands were at four o'clock. It is not profound and that is precisely why it lands — profundity is not available daily, but Tuesday is.

**The experience.** At your hour, both phones receive **the same single question.** It is always small, always about the texture of the day, and never about the relationship:

> *What did you eat?*
> *What time did you wake up?*
> *What was the loudest thing you heard today?*
> *Where were your hands at four o'clock?*
> *What did you think about on the way home?*
> *What's the last thing you touched before this?*

You answer with a line, a photo, a seven-second sound, or nothing. **You cannot see their answer until you've given yours.** That lock is the entire engine and it is non-negotiable.

**Three deliberate cruelties we removed, and one we kept.**
- ❌ *The countdown.* There is none. The question stays until the next one comes.
- ❌ *Lateness.* There is no "late" — there is no timestamp of shame, no "posted 4h late."
- ❌ *The guilt of skipping.* An unanswered question leaves a blank, and a blank is a true record. The app never mentions it again.
- ✅ *The lock.* Kept, and it is the only friction in the entire product. Because the reciprocity is what makes it feel like two people and not one person performing.

**Why the questions must be mundane.** This is the deepest psychological call in the product. Relationship questions — *"What do you love about them?"* — are unanswerable more than about eleven times. They decay, they create pressure, they invite performance, and they make the app a therapist. **Mundane questions are the only ones that survive five hundred repetitions**, and — this is the trick — they get *better* with repetition, because five hundred answers to "what did you eat" is not a survey, it is a portrait of a life.

**And then, the reason this feature exists at all:**

> **The stack.** Questions recur on their anniversary. When today's question is one you were also asked exactly one year ago, and two years ago, and three — those answers appear **beneath today's, stacked, oldest at the bottom.** You answer first; then the column opens.
>
> Ten years of answers to *"What time did you wake up?"* is one of the most quietly annihilating objects it is possible to build. **The stack is the compounding engine of the entire app.**

**Primary action.** Answer. In under fifteen seconds. If answering takes longer than that, the question was badly written.

**What must NOT exist.** A countdown. A "late" state. Retakes limited to two (BeReal's punitive little tell). A public anything. A "reactions" row of emoji. A streak. An AI-suggested answer. A question that the couple could feel judged by. Questions about sex, money, or conflict — *ever*. This is not a therapy product and the moment it plays one, it dies.

**How it compounds.** Year one: a nice daily habit. Year three: the first stacks arrive and the app changes character permanently. Year five: people screenshot the stacks and cry. This is the feature they will tell their friends about, and it cannot be copied without copying the whole philosophy, because in an audience app the answers would be performed.

---

## 6. The camera

**Why it exists.** Because the phone camera is a *machine for producing evidence*, and we need a machine for producing *residue*. Different tool, different behavior.

**Emotional goal.** *Carelessness.* The specific freedom of a camera you cannot check.

**Before:** the low-grade vanity-anxiety that attends every phone photograph — *is it good, do I look bad, let me take four more.*
**After:** nothing. A pleasant blankness. You took it; it's gone into the dark; you're back in the room. **The camera's greatest gift is that it returns you to the evening.**

**The experience.**
- One frame. One shutter. A real shutter *sound* — a mechanical clack, not a synthetic click.
- **No preview.** The image does not appear after you take it. There is no thumbnail. There is no gallery inside the camera. There is no retake, because there is nothing to retake *from*.
- **No filters. No beautification. No zoom.** A fixed focal length, like a fixed lens.
- **A hard flash**, offered honestly: blown highlights, deep falloff, red-eye left in. This is our night. It is not a "filter" — it is a light.
- A small frame counter — how many you've shot today. Not a limit. Just the count, like a window on the back of a camera.

**And then the wait.** Everything you shoot **develops overnight, and appears at dawn.**

**Primary action.** Press the shutter. Put the phone down.

**What must NOT exist.** Preview. Retake. Filters. Zoom. Portrait mode. Face smoothing. Burst. Live Photos. A dual front/back capture (BeReal's authenticity-proof — we reject it, because *proof is only necessary where there is an audience to lie to,* and there isn't one). A "delete this one" during capture — you get one delete, later, in daylight, after you've seen it. Deleting in the moment is vanity; deleting in the morning is editing.

**How it compounds.** Because there was no preview, there was no curation, and because there was no curation, what survives is *what was actually happening* rather than what you decided to keep. In ten years, the app's photographs will be systematically worse and systematically truer than the ones on the camera roll. That gap widens every year.

**Why alternatives were rejected.** A "vintage filter" applied to normal instant photography was rejected as costume — it manufactures nostalgia rather than earning it (Foundation, principle 6). **We did not simulate a disposable camera's *look*. We rebuilt its *behavior*,** which is the part that actually did the emotional work: you couldn't see it, you couldn't retake it, and you had to wait.

---

## 7. Developing — **the morning**

*(Not a screen. A moment. Possibly the best one we have.)*

**Why it exists.** Because the disposable camera's magic was never grain. It was the envelope from the chemist, opened by two people at once, weeks after the night in question.

**Emotional goal.** *Anticipation, then surprise, then the tenderness of seeing yourself unguarded.*

**Before:** you have forgotten you took anything.
**After:** you and they have looked at the same photograph for the first time **at the same moment**, and neither of you saw it first.

**The experience.** At dawn, one notification, on both phones, at the same second: *"Last night developed."* The photographs are there, on yesterday's page, in the order they happened. Neither person has seen them before. Both are seeing them now.

**Primary action.** Look. Optionally, keep or discard — but the discard is a *shared* decision surface: either of you can put a photo away, but it goes into the drawer for thirty days first, because a photo you hate at 7 a.m. is often a photo you want in a year.

**What must NOT exist.** A progress bar that says "developing… 43%." An "unlock early" option. A "developing" spinner of any kind. If we ever add a way to see them sooner, we have deleted the feature.

**How it compounds.** It is the same on day one as on day two thousand — which is rare and valuable. But *what* develops changes: in year one you photograph events; by year three you photograph the kitchen. The camera trains its owners to keep the ordinary. That is the entire product doing its job.

---

## 8. The shared notebook

**Why it exists.** Because there is a category of sentence you want to write to your partner that is **not addressed to them today — it is addressed to the two of you later.** iMessage cannot hold that sentence. It scrolls away, and it demands a reply.

**Emotional goal.** *The pleasure of leaving something to be found.*

**Before:** the small ache of a thought you don't want to spend as a text message.
**After:** you left it on the page. There is no "delivered." There is no "read." **Nobody owes anybody a reply.**

**The experience.** Today's page has a blank space, always. You write a line. It is set in the serif — their words in the serif, always, because the serif is the couple's world (Foundation, §6). Ink, marginalia, fragments. Your partner may add a line beneath it, or may not, and the absence of a reply is not a wound because the notebook has no concept of a reply.

**And the hard constraint that makes it work:** the notebook produces **no instant notification.** Nothing you write here buzzes their phone in the next sixty seconds. Which means it is *useless for logistics* — you cannot use it to say "grab milk" — and being useless for logistics is exactly what reserves it for the other thing. **We engineered a channel that can only carry one kind of message, by making it bad at everything else.**

Handwriting, where the device allows it, is **theirs** — real ink from a finger or a stylus. The app owns no handwriting font and never will (Foundation, §6).

**Primary action.** Write one line.

**What must NOT exist.** Read receipts. Typing indicators. Reply threading. Reactions. Message bubbles of any shape. Timestamps to the minute (the day is the resolution — that's the whole point). Editing after a day has passed — the page sets, like ink.

**How it compounds.** A chat log is unreadable at any length. A notebook of one or two lines a week is *readable in an evening, forever.* The compounding is in the ratio: we're producing perhaps 300 words a month instead of 30,000, and we're producing the 300 that were worth keeping.

**Why alternatives were rejected.** A private chat was rejected because it competes with iMessage and loses, and because the product would immediately fill with logistics and die of it. Prompted journaling (Apple Journal) was rejected because a prompt is an instruction, and the notebook must be the one place in the product that asks nothing.

---

## 9. The dictionary — *your private language*

*(The feature no other product has, and the one I would build first.)*

**Why it exists.** Every couple invents a language. Nicknames that mutated three times. A mispronunciation that became the correct word. A noise that means "I'm about to leave the party." A word for a specific mood that exists in no dictionary. **It is the single most distinctive artifact a relationship produces, and it is documented nowhere, ever, by anyone.** It lives entirely in two heads, and when one of them forgets, it is simply gone.

**Emotional goal.** *Astonishment at how much of a private country you have already built without noticing.*

**Before:** you've just said the word out loud for the four-hundredth time.
**After:** you've realized it *has a birthday*.

**The experience.** An entry has four parts:
- **The word.**
- **What it means** — written by either of you, and the definitions are allowed to disagree. Two definitions of the same word, side by side, one in Lamplight, one in Dusk, is often funnier and truer than one.
- **The day it was born** — linked to that day's page, so the word remembers the evening it came from.
- **Its sound** — seven seconds of *them saying it.* This is the part that will destroy people in fifteen years.

It is set like an actual dictionary: oldstyle numerals, small caps, a hairline rule. It is alphabetical, not chronological, because a dictionary is alphabetical, and the pleasure is in the accident of adjacency.

**Primary action.** Add a word. It should take twenty seconds.

**What must NOT exist.** Usage counts. A "word of the day." Streaks. Any suggestion from us about what to add. Auto-detection of "unusual words" from their writing (we considered it; it's surveillance, and it steals the moment of *noticing*, which is the moment that matters).

**How it compounds.** Ferociously. Year one: a fun list of eight words. Year five: sixty words, several of which have died, several of which have children. And the audio: **their voice, at that age, saying a word only you two know.** Nothing else in the product — nothing else on their phone — will do that.

---

## 10. Music memories

**Why it exists.** Because a song is the most efficient memory-storage device ever invented, and because streaming has destroyed the *artifact* of music while preserving the access. Nobody remembers what they listened to in 2019. Everybody remembers what was playing.

**Emotional goal.** *Involuntary time travel.* The specific full-body lurch of a song you haven't heard since a particular kitchen.

**Before:** something is playing, and it's *right*.
**After:** it's pinned to today. It will be waiting in the record at the end of the year.

**The experience.**
- **One song per day. Maximum.** Scarcity forces a choice, and a choice is a memory. Unlimited song-logging is just listening history, and listening history is data, not memory.
- A song is kept with, optionally, a single line: *why*. (Not a review. A line. *"Kitchen, 1am, you were burning something."*)
- We store the artifact and the room. Playback links out to whatever service they use — we are not a music player, and the moment we try to be one, we are competing with Spotify and losing.
- Sound in this product is drawn as a **circular groove that turns while it plays** (Foundation, §12). Vinyl is a behavior, not a texture.

**And once a year, we press a side.**

> **The record.** At the turn of the year, the app presses the year's songs into **a side** — chronological, not shuffled, not ranked, not "top." Chronology is the truth; a "top songs" list is a lie about a year. It has an A-side and a B-side because a year has a first half and a second half, and they are rarely the same year emotionally.

**Primary action.** Keep one song. Say why in one line.

**What must NOT exist.** Listening stats. "You listened to 4,231 minutes." A Wrapped. An algorithmic playlist. A "your taste" analysis. Any leaderboard between the two of you. An in-app player.

**How it compounds.** Five sides. Playable back-to-back in an evening. There is no version of that which is not moving, and there is no version of it that Spotify can build, because Spotify knows what you played and not what was happening.

---

# III. Time

## 11. The timeline — *the book of days*

**Why it exists.** Because the camera roll is the great failed archive of our era: forty thousand photographs, no structure, and therefore nothing. Volume destroyed meaning. Our answer is not better search. **Our answer is honest emptiness.**

**Emotional goal.** *Awe at the shape of your own life* — the density of some months, the barrenness of others, the little constellation of a good winter.

**Before:** an itch. *When was that?*
**After:** you went in for one thing and lost twenty minutes, and — this is the important part — **it was not twenty minutes of consumption. It was twenty minutes of remembering.** That distinction is the difference between our product and every other one.

**The experience.** A vertical book of days. **Blank days are shown as blank ruled lines.** We do not compress them, hide them, or filter to "days with content" — because the empty days are true, and their presence is what makes the full ones feel like something. A masonry grid of only your best photos is a lie about your life; it says every day was an event.

Two behaviors earned by time:
- **The paper ages.** As you scroll back through the years, the paper warms by a barely-perceptible amount per year. Imperceptible on any one screen; unmistakable across a decade. This is not a nostalgia filter — nothing is applied to the *content*. **Time actually passed, and the material shows it.** That is honesty, not costume.
- **The years have weight.** Scrolling back through a year takes real, physical effort — the scroll has friction proportional to distance. Getting to 2027 from 2032 should *feel* like reaching.

**Primary action.** Scroll, and stop somewhere.

**What must NOT exist.** A photo-only grid view. Filters (by person, by type, by "favorites"). A "highlights" reel. A count of anything. Any auto-generated montage with music. Infinite scroll into the future (the timeline stops at today — there is nothing after today).

**How it compounds.** This is the surface that is *worthless* at launch and load-bearing by year two. On day thirty, the timeline is four pages, and that's fine — it should feel like a new notebook, not a broken feature. **We must resist every product instinct to fill it.**

---

## 12. A day

**Why it exists.** The atomic unit. Everything resolves to a day.

**Emotional goal.** *Total recall of a specific ordinary evening* — smell, weather, room, all of it, triggered by four small artifacts.

**Before:** you tapped something.
**After:** you were there.

**The experience.** One page. Everything from that day, in the order it happened: the answers to the question, the photographs that developed, the lines from the notebook, the sound, the song. Ambient truth at the top, collected for free and worth more every year: **the weather, the city, the hour the sun set.** ("Rain since four. Seoul. Dark at 5:12.") Nobody records this. It is free. And in eleven years, *"it rained every day that January"* is the thing that brings the whole month back.

The hairlines of Lamplight and Dusk show who kept what. And on a day where you **both** kept something, the page carries a single mark in the **Overlap** tone. It cannot be bought, requested, or gamed. It is simply true or it isn't.

**Primary action.** Look. Optionally, mark it (see §13). Optionally, add to it — *yes, years later.* **A day is never closed.** You can put something on a page from 2028 in 2033, and the app will not complain, timestamp it as "added late," or mark it as edited. Memory doesn't work in chronological order and neither should the book.

**What must NOT exist.** A "share" button. An export-to-Instagram. A precise GPS pin (the *city*, never the coordinates — the texture is the point, and the surveillance is not). A like. A comment. An "edited" flag.

**How it compounds.** The ambient metadata is the sleeper: it costs the user nothing, it is invisible for two years, and then it becomes the strongest retrieval cue in the entire product.

---

## 13. Milestones

**Why it exists.** Because **you never know it's the day while it's the day.** The night you met their mother didn't feel like anything. The Tuesday you decided to move didn't announce itself. Every other product calculates milestones from a calendar; that celebrates arithmetic, not a life.

**Emotional goal.** *The vertigo of hindsight.* Recognizing, from four years away, which day it actually was.

**The experience.** **Milestones are declared, never calculated.** Either of you can mark any day, at any time, from any distance — including a day from six years ago that you have only just understood. The mark says one thing:

> *This was the day. We just didn't know yet.*

The app will never auto-generate a milestone. It will never say "Happy 1,000 days!" It will never count. Once a year, at most, it may show a single old day and ask quietly: *did this matter?* — and take **no** for an answer, gracefully, and never ask about that day again.

**Primary action.** Mark a day, usually long after it happened.

**What must NOT exist.** Day counters. Anniversary confetti. Auto-milestones. Badges. "You've kept 100 things!" Any achievement. Any number that implies a score. A milestone *type* taxonomy (first kiss / moved in / engaged) — we are not a heteronormative wedding-planning app, and a checklist of official relationship stages is an insult to every relationship that isn't shaped like the checklist.

**How it compounds.** Retroactive marking is *only possible* if there's a past to mark. In year one this feature is nearly inert. In year five it is the most emotionally sophisticated thing in the app, because by then you have enough distance to be *wrong* about which days mattered — and correcting that, in the book, is an act of love.

---

## 14. Search

**Why it exists.** Because retrieval is what makes an archive a memory instead of a landfill. But **people do not search memories by keyword. They search by fragment and by feeling.** *"That night with the noodles." "The rainy week." "That word we made up in Lisbon."*

**Emotional goal.** *Being met halfway.* The relief of a system that understood a half-remembered thing.

**The experience.** Search is **summoned, never a destination.** It is not a tab. Tabs invite browsing; browsing is engagement; engagement is not our business.

It searches everything, including the things nobody else indexes: written lines, transcribed voice, the dictionary, songs, and the **ambient layer** — weather, city, hour, season. So *"the week it rained"* works. *"when we were in Lisbon"* works. *"that song from the winter"* works.

**Results are ordered by time. Always. Never by relevance.** Relevance ranking is an opinion about which of your memories matters most, and we have no right to that opinion. Chronology is the only honest sort.

**Primary action.** Type a fragment.

**What must NOT exist.** A search tab. Trending. Suggested searches. "Recent searches" (a small privacy horror: the things you looked for late at night are none of our business, or anyone's). Face grouping. Object detection ("beach," "food," "dog") — it's other people's vocabulary applied to your life, and it flattens *"the day the oven broke"* into "kitchen."

**How it compounds.** Obvious, and increasing: search is useless in month one and indispensable in year four. It is the one place where the product's value is *linear with volume*, and even here we choose honesty (chronological) over cleverness (ranked).

---

# IV. Edges

## 15. Widgets

**Why it exists.** To be the only thing on a person's home screen that is a **fragment of their own past** rather than a demand for their attention.

**Emotional goal.** *Ambush by tenderness*, four seconds after unlocking your phone to do something else entirely.

**The experience.** One line from an old day, set in the serif, on paper. Or, at dawn, a photograph that has just developed. It changes **once a day**, quietly. Tapping it opens the day it came from — the only interaction it has.

**Why not the Locket model** (your partner's live photo on your home screen)? Because live presence is a *communication* value, not a *memory* value. It turns the widget into a notification surface, it creates the obligation to send one back, and — decisively — **it does not compound.** A photo of them from this morning is worth exactly the same in year five. A line of theirs from year one, appearing on your lock screen in year five, is worth a hundred times more. We chose the one that gets better.

**What must NOT exist.** A live partner feed. A "send a photo" button in the widget. Any count. Any prompt. Anything that changes more than once a day.

**How it compounds.** This is the product's evangelism engine — a stranger sees a sentence in a beautiful serif on your lock screen and asks what it is. But note: it can only *be* that once there is a past to draw from. **This widget should not ship on day one.** It should quietly become available at three months. Which is itself a signature moment: the app gives you something *because you stayed.*

---

## 16. Notifications

**Why it exists.** Reluctantly, and in exactly three forms.

**The complete, permanent list:**
1. **The question**, at your hour. Both phones, one second.
2. **"Last night developed."** At dawn. Both phones, one second.
3. **Something from them.** Batched, delivered once, at your hour — *never* instantly. Instant delivery makes this a chat, and chat creates obligation, and obligation is the thing we are here to remove.

**That is all. There will never be a fourth.**

**What must NOT exist — and this is a commitment we should put in writing publicly:** no re-engagement notifications. No "you haven't opened this in a while." No "they're waiting." No "your streak is at risk." No "see your year in review!" **If a couple stops using this app for three months, the app says nothing at all.** Silence is the promise. An app that guilts you during a bad week will be deleted precisely when it was most needed.

Copy is plain, quiet, and never emotionally leveraged. *"Last night developed."* Not *"✨ Your memories are ready! ✨"*

**How it compounds.** Trust does. Every product the user has ever installed has eventually started nagging. When ours, at year four, still hasn't, it becomes the only app they never mute — and that is worth more than any amount of engineered retention.

---

## 17. Settings

**Why it exists.** To be honest, complete, and boring — and to hold the two most important controls in the product.

**The experience.** Short. No dark patterns. Real, plain sentences. It contains:
- **Your hour.** (Changing it requires both of you. It's a shared appointment; one person can't move it alone.)
- **Export.** The whole archive, as real files, any time, without asking us, in a format that will open in twenty years. **And a printed book** (see §22).
- **Quiet season.** Pause everything — no questions, no notifications, nothing lost, no guilt, no "welcome back!" when you return. For grief, for illness, for a bad stretch. Every couple has one. **Designing for the bad month is how you earn the good decade.**
- **Close the book.** (§20.)

**What must NOT exist.** A premium upsell wall. Notification granularity settings with fourteen toggles (there are three notifications; there are three toggles). Any "connect your accounts." Any data-sharing toggle, because there is no data-sharing. A "delete account" flow that is harder than the sign-up flow.

---

## 18. Offline

**Why it exists.** Because **memory should not require signal**, and because the moments of highest memory-density — a tent, a plane, a mountain, a hospital corridor — are precisely where the signal is worst.

**The experience.** Everything is written locally, first, always. You can write, shoot, record and keep with no connection whatsoever. Photographs **develop offline** — the darkness is local; it was never a server. Sync happens silently when it can.

**What must NOT exist.** A "failed to send" state. A red retry icon. A spinner. An "offline" banner. Any indication of sync status at all. **The app never shows the person a problem they cannot solve and do not care about.** It will go when it goes.

**How it compounds.** The trip where you had no signal for nine days is one of the best-documented weeks in the archive, and the person will never know why.

---

## 19. Dark mode

Not a mode. **The room.** (Foundation, §3 — night is the primary design, not the inversion.)

**Why it exists.** Because the product's emotional home is the hour when honest things get said: late, warm-lit, a low lamp, R&B on somewhere. Every other app is a bright rectangle you look at in the dark. Ours should feel like *turning down the light in a room you're already in.*

**Emotional goal.** *Lowered voice.*

**The experience.** Warm near-black, bone ink, one lamp above and to the left. Daylight mode is the honest daytime version of a nocturnal thing — paper under a window — and it is designed and tested to the same standard, never derived by inversion. Both modes hold their contrast targets; neither is a second-class citizen.

**What must NOT exist.** Pure black (it's cheap, it's OLED-thinking, and it's cold). Pure white. Any surface that glows.

---

## 20. Accessibility

Accessibility here is not remediation; it is *the same job the product already claims to do* — making memory retrievable — extended to everybody.

- **Long-form contrast target: 7:1.** People read letters here for minutes, not seconds.
- **Color never carries meaning alone.** Lamplight and Dusk are always redundantly encoded by name, position and tone. Someone who sees no color loses nothing but pleasure.
- **Dynamic type to 200%**, with genuine reflow. Nothing truncates. Nothing is size-locked to protect a layout. If the layout can't survive large type, the layout is wrong. **And note who this actually serves in the long run: the couple, at seventy, still reading this.** This product's most important accessibility user is its own user, forty years on.
- **Every sound has text; every text can be sound.** Voice notes are transcribed on-device, privately. Written lines can be read aloud. A person who cannot hear can still keep the dictionary. A person who cannot see can still be handed their partner's voice.
- **Screen readers get prose, not data:** *"Ana, on a Tuesday in March. It rained."* Not "Cell 3, image, timestamp."
- **Reduced motion** removes movement, never meaning: dissolves become cuts; the developing morning still arrives, it simply arrives already arrived.
- **High contrast** strips grain, bleed and shadow — and the product must still be recognizably itself. If our identity collapses without texture, it was texture-deep.
- **Haptics never carry meaning alone.**

---

# V. The long arc

## 21. Ending

**Why it exists.** Because relationships end, and people die, and **an app that holds a shared past has a duty of care at that moment that exceeds every other duty it has.** Almost every product ignores this, and it is the clearest place where we can prove that our sentiment is real and not marketing.

**Emotional goal.** *Dignity.* Not closure — closure is not ours to give — but the absence of cruelty.

**The experience.**

**Closing the book.** Either person can close it. It is not a red button, it is not called "Delete," and it is not fast. When it closes:
- The shared space becomes **read-only**. Nothing new is added by either person.
- **All notifications end forever.** No question at your hour. No developing at dawn. No widget. The silence is immediate and total.
- **Both people receive the complete archive** — every word, photograph, sound, song, and the whole book — as real files they own.
- **Closing does not delete their copy.** You cannot erase someone else's memories. You can only close the shared future. This is a hard rule and it will occasionally make someone angry, and we will hold it anyway.
- **Thirty days in the drawer.** Nothing is irreversible for thirty days, because people close books at 2 a.m. in a way they regret at noon.

**And the harder one.** If one person dies, the survivor keeps everything, and the app enters a mode where **nothing resurfaces unless asked.** No widget. No morning. No question. No day from four years ago arriving unannounced on a lock screen — because that is a kindness in year two and an assault in week one. Once, gently, and revocably, and never again after a no, the app offers to begin remembering out loud again. **The person decides when they can bear it. Not us.**

**What must NOT exist.** A "reason for leaving" survey. A retention offer. A "are you sure? you'll lose 1,247 memories!" guilt modal. Any friction whatsoever. Any dark pattern. This is the flow where we spend our reputation, and we spend it by making it easy.

**How it compounds.** It is the reason people trust the app with the rest. **A product's ethics are only ever visible at its exits.**

---

## 22. Returning after months away

**Why it exists.** Because every app punishes absence, and the punishment is what makes returning impossible.

**Emotional goal.** *Being welcomed by something that did not notice you were gone.*

**Before:** the very specific dread of opening an app you've abandoned — the badge, the backlog, the shame.
**After:** *"…oh. It's just here. It was always just here."*

**The experience.** You open it, after five months, and you see: **today's page, blank. And one thing from before.** Exactly as if you had never left. No backlog. No badge. No "here's what you missed." No summary. No "Welcome back!" **The app has no opinion about your absence.**

If your partner kept things while you were gone, they are on their days, where they have always been — **found, not delivered.** The timeline holds them, quietly, and going back through them is a choice you make, not a debt you're presented with. A single, factual, unemotional line in the book — *"14 days have something on them since you last looked"* — and it is a fact, not a reproach, and it is on the timeline, not in your face.

**What must NOT exist.** A "welcome back" screen. A "we missed you." A catch-up carousel. A recap. Any red number. Any implication that you failed.

**How it compounds.** Every couple has a bad six months. The app that survives that six months is the app that will be there for the following twenty years — and the *only* way to survive it is to say nothing during it.

---

## 23. Year five

**Why it exists.** Because this is what we are actually building. Everything above is scaffolding for this.

**What it looks like.** Roughly 1,800 days, of which perhaps 600 have something on them. Five stacks deep on the recurring questions. Sixty words in the dictionary, several of them extinct, several with children. Five sides. Maybe forty milestones, half of them declared years after the fact. A widget that has quietly ambushed them, on an ordinary morning, several hundred times.

**And three things that only exist because time passed:**

- **The stacks are full.** *What time did you wake up? — 6:40. 7:15. 11:00, hungover. 5:30, the baby. 6:40.* Five lines. An entire era.
- **The paper has aged.** Scroll back five years and the warmth of the earliest pages is now visibly different. Nobody applied a filter. The material simply got older, the way the two of them did.
- **The book.** Once a year, on request, we print it: the year, on paper, in the serif, with the photographs, the lines, the words, the weather. It costs money. It is the app's best output, **and it is not on a screen.**

**What we do NOT do at year five.** We do not add features. We do not redesign. We do not launch a social layer, an AI companion, a couples-therapy tier, or a marketplace. **The correct five-year experience is that the app has not changed** — because it is now holding something that cannot be re-platformed, and every relationship they have with this product depends on it being exactly where they left it. **Feature velocity is, for this product, an anti-value.** The product manager who resists shipping is the one doing the job.

**The final test, applied to everything:** *Does it help keep an ordinary thing? Does it get better with age? Would it survive a bad week?*

---

# The 10 signature moments

The ones people will describe out loud, unprompted, to someone else.

**1. The developing morning.**
Dawn. Both phones. Last night's photographs, unseen by either of you, arriving at the same second. Neither of you saw them first. *No other app has ever made you wait.*

**2. The stack.**
Today's question is the same question you were asked on this day last year, and the year before. You answer. The column opens beneath you. Ten years of what time you woke up.

**3. The Overlap.**
The single mark on a day that both of you kept something on. A color you cannot buy, request, or earn any way except by both being there. In a product with no metrics, this is the only feedback — and it is *shared*, not scored.

**4. Their voice, saying a word that doesn't exist.**
The dictionary of your private language, with seven seconds of them pronouncing it, at that age, in that kitchen. In fifteen years this will be the most valuable file either of them owns.

**5. The lock screen ambush.**
A sentence they wrote in year one, in a warm serif, on paper, appearing on your lock screen in year five while you were just trying to check the time.

**6. Seven seconds of a room you don't live in anymore.**
The one thing nobody records because there is no reason to, and the one thing that will bring the whole apartment back — the fridge, the neighbours, the traffic on that street.

**7. Marking a day years late.**
*"This was the day. We just didn't know yet."* No product lets you understand your own life in hindsight. This one is *built* for it.

**8. The side.**
The year, in songs, chronologically, pressed once. A record turning. Not a Wrapped, not a top-ten, not an algorithm — just what was actually playing, in the order it played.

**9. The app that ends.**
Forty seconds and there is nothing left to do, and it never, ever asks for more. People will tell their friends this. *"It's the only app that lets you leave."*

**10. The book.**
Once a year it prints, and the best thing this software ever makes is an object you can hold, that works with no battery, that your children will find in a drawer. **The final proof that we were never optimizing for screen time: our masterpiece isn't on the screen.**

---

*And the eleventh, which nobody will brag about and everybody will remember: the way it behaves on the worst day. It goes quiet, it hands you everything you made, it doesn't beg, and it doesn't erase them. That is the moment the whole design either meant something or didn't.*
