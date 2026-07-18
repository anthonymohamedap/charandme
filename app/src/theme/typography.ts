/**
 * Type — docs/canon/design-foundation.md §6, PROMPT_LIBRARY.md Part 4.
 *
 * "The serif is the couple's world. The sans is the machine's world.
 * They never mix inside a line." Never use these families outside the
 * text primitives in src/components/text.
 *
 * Fonts are imported by direct subpath, not from each package's barrel
 * export. The barrel's index.js requires every weight in the family
 * (Thin through Black, plus italics) as a side effect of evaluating
 * the module, which would bundle ~20 unused weight files per family —
 * dead weight against a system that forbids Bold in the first place.
 * Subpath imports bundle only the three weights this product actually
 * loads.
 */
import Newsreader_400Regular from "@expo-google-fonts/newsreader/400Regular/Newsreader_400Regular.ttf";
import Newsreader_400Regular_Italic from "@expo-google-fonts/newsreader/400Regular_Italic/Newsreader_400Regular_Italic.ttf";
import Newsreader_500Medium from "@expo-google-fonts/newsreader/500Medium/Newsreader_500Medium.ttf";
import SourceSerif4_400Regular from "@expo-google-fonts/source-serif-4/400Regular/SourceSerif4_400Regular.ttf";
import SourceSerif4_400Regular_Italic from "@expo-google-fonts/source-serif-4/400Regular_Italic/SourceSerif4_400Regular_Italic.ttf";
import SourceSerif4_500Medium from "@expo-google-fonts/source-serif-4/500Medium/SourceSerif4_500Medium.ttf";
import Inter_400Regular from "@expo-google-fonts/inter/400Regular/Inter_400Regular.ttf";
import Inter_500Medium from "@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf";

export const fontFamily = {
  serifDisplay: {
    regular: "Newsreader_400Regular",
    medium: "Newsreader_500Medium",
    italic: "Newsreader_400Regular_Italic",
  },
  serifLong: {
    regular: "SourceSerif4_400Regular",
    medium: "SourceSerif4_500Medium",
    italic: "SourceSerif4_400Regular_Italic",
  },
  sans: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
  },
} as const;

/** The exact map passed to useFonts() in app/_layout.tsx. */
export const fontsToLoad = {
  Newsreader_400Regular,
  Newsreader_400Regular_Italic,
  Newsreader_500Medium,
  SourceSerif4_400Regular,
  SourceSerif4_400Regular_Italic,
  SourceSerif4_500Medium,
  Inter_400Regular,
  Inter_500Medium,
};

/**
 * Display: 28–40pt, tracking −1.5%. Large type is set tight.
 * Only used by SerifText variant="display".
 */
export const serifDisplay = {
  size: 32,
  lineHeight: 40,
  letterSpacing: -0.48, // -1.5% of 32
} as const;

/**
 * Long entries: 17–19pt, 1.55 line-height, tracking 0.
 * The couple's words — notes, letters, quoted answers.
 */
export const serifLong = {
  size: 18,
  lineHeight: 28, // sits on the 28pt notebook rule
  letterSpacing: 0,
} as const;

/**
 * Sans has exactly three sizes. No fourth may be added.
 * 15 = controls, 13 = metadata, 11 = rare all-caps micro-labels (+6% tracking).
 */
export const sans = {
  15: { size: 15, lineHeight: 20, letterSpacing: 0 },
  13: { size: 13, lineHeight: 18, letterSpacing: 0 },
  11: { size: 11, lineHeight: 16, letterSpacing: 0.66 }, // +6% of 11
} as const;

export type SansSize = keyof typeof sans;
export type SerifVariant = "display" | "long";
export type Weight = "regular" | "medium";
