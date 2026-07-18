/**
 * Design tokens — transcribed verbatim from
 * docs/canon/design-foundation.md §7 and PROMPT_LIBRARY.md Part 4.
 *
 * Night is the primary mode, designed first (design-foundation.md §3).
 * No other colors may exist anywhere else in the codebase — consume
 * these, never invent new ones.
 *
 * Keys are named by elevation (base/page/raised), not by the literal
 * canon token name, because canon gives night three surface tiers
 * (Room, Surface, Raised) but day only two (Paper, Paper Aged) — Paper
 * serves as both base and page. The hex values below are copied
 * unchanged; only the grouping is normalized so components can consume
 * one shape across both schemes.
 */

export type Scheme = "night" | "day";

type Surfaces = Record<"base" | "page" | "raised" | "ink" | "muted" | "whisper", string>;

const night: Surfaces = {
  base: "#131110", // Room
  page: "#1C1917", // Surface
  raised: "#242019", // Raised — card, sheet
  ink: "#EDE6DA", // Ink Inverse
  muted: "#A0958A",
  whisper: "#6A6158",
};

const day: Surfaces = {
  base: "#F4F0E8", // Paper
  page: "#F4F0E8", // Paper (day has no separate page tier)
  raised: "#E9E2D6", // Paper Aged — card, sheet, older content
  ink: "#1A1613",
  muted: "#6B6259",
  whisper: "#CFC6B8",
};

/**
 * Lamplight = Anthony. Dusk = her. Overlap = both.
 * Identity, not decoration (AGENTS.md §7). Same hex in both modes —
 * only the text-safe darkened variant changes per mode, because a
 * light source doesn't change hue when the sun comes up, only how
 * much contrast it needs against the surface behind it.
 */
const accent = {
  lamplight: "#D9A441",
  dusk: "#6B5A8E",
  overlap: "#8A6A6E",
} as const;

type AccentText = Record<keyof typeof accent, string>;

const nightAccentText: AccentText = {
  lamplight: accent.lamplight,
  dusk: accent.dusk,
  overlap: accent.overlap,
};

const dayAccentText: AccentText = {
  lamplight: "#B4832C",
  dusk: "#544471",
  // No separate darkened variant is documented for Overlap — it is
  // rare by construction and used as a mark, not as text.
  overlap: accent.overlap,
};

/** Desaturated brick — the only destructive color. Never "red". */
export const destructive = "#9C4B3F";

export const palette: Record<Scheme, Surfaces & { accent: typeof accent; accentText: AccentText }> = {
  night: { ...night, accent, accentText: nightAccentText },
  day: { ...day, accent, accentText: dayAccentText },
};

/** 8pt base unit. Vertical rhythm is set by the 28pt notebook rule. */
export const space = {
  unit: 8,
  rhythm: 28,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

/** 4pt on paper-like objects, 2pt on photographic ones. Nothing is a pill. */
export const radius = {
  paper: 4,
  photo: 2,
} as const;

/** Three elevations only: page, card, sheet. No fourth. */
export type Elevation = "page" | "card" | "sheet";

export const minTouchTarget = 44;

export const contrast = {
  body: 4.5,
  longForm: 7,
} as const;

/** Paper tooth: felt, not seen. Disabled entirely in high-contrast mode. */
export const grain = {
  opacity: 0.04,
  opacityMin: 0.03,
  opacityMax: 0.05,
} as const;
