import React from "react";
import { Text, type TextProps } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";
import { fontFamily, serifDisplay, serifLong, type SerifVariant, type Weight } from "@/theme/typography";

export type Tone = "ink" | "muted" | "whisper" | "lamplight" | "dusk" | "overlap";

type SerifTextProps = TextProps & {
  /** display = Newsreader, the couple's headline moments. long = Source Serif 4, their words at reading length. */
  variant?: SerifVariant;
  weight?: Weight;
  italic?: boolean;
  tone?: Tone;
};

/**
 * The couple's world — design-foundation.md §6.
 * Never mixed with the sans inside a line. Oldstyle figures in prose
 * are a font-level OpenType feature of Newsreader/Source Serif 4, not
 * something this component needs to force.
 */
export function SerifText({
  variant = "long",
  weight = "regular",
  italic = false,
  tone = "ink",
  style,
  ...rest
}: SerifTextProps) {
  const { tokens } = useTheme();
  const scale = variant === "display" ? serifDisplay : serifLong;
  const family = variant === "display" ? fontFamily.serifDisplay : fontFamily.serifLong;
  const fontFamilyName = italic ? family.italic : weight === "medium" ? family.medium : family.regular;
  const color = tone === "ink" || tone === "muted" || tone === "whisper" ? tokens[tone] : tokens.accentText[tone];

  return (
    <Text
      style={[
        {
          fontFamily: fontFamilyName,
          fontSize: scale.size,
          lineHeight: scale.lineHeight,
          letterSpacing: scale.letterSpacing,
          color,
        },
        style,
      ]}
      {...rest}
    />
  );
}
