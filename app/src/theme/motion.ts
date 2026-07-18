/**
 * Motion — docs/canon/design-foundation.md §8.
 * "We are editing film, not animating a UI." No bounce, ever.
 */
import { Easing } from "react-native";

/** cubic-bezier(0.22, 0.61, 0.36, 1) — a hand, not a spring. */
export const curve = Easing.bezier(0.22, 0.61, 0.36, 1);

export const duration = {
  /** 180–320ms. Quick enough to feel responsive, considered. */
  interfaceMin: 180,
  interfaceMax: 320,
  /** 600–1200ms. Used perhaps five times in the entire product. */
  narrativeMin: 600,
  narrativeMax: 1200,
  /** Sheets take longer to lift than to fall. */
  sheetOpen: 320,
  sheetClose: 220,
} as const;

/** 0.98 → 1.00. Dissolve, don't slide. */
export const dissolve = {
  fromOpacity: 0,
  toOpacity: 1,
  fromScale: 0.98,
  toScale: 1,
} as const;
