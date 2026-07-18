import React from "react";
import { Text, type TextProps } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";
import { fontFamily, sans, type SansSize, type Weight } from "@/theme/typography";
import type { Tone } from "./SerifText";

type SansTextProps = TextProps & {
  /** Exactly three sizes exist. No fourth may be added. */
  size?: SansSize;
  weight?: Weight;
  /** All-caps micro-label, +6% tracking. Reserved for size 11. */
  caps?: boolean;
  tone?: Tone;
};

/**
 * The machine's world — design-foundation.md §6.
 * Regular and Medium only. There is no Bold in this product's UI.
 */
export function SansText({
  size = 15,
  weight = "regular",
  caps = false,
  tone = "ink",
  style,
  ...rest
}: SansTextProps) {
  const { tokens } = useTheme();
  const scale = sans[size];
  const color = tone === "ink" || tone === "muted" || tone === "whisper" ? tokens[tone] : tokens.accentText[tone];

  return (
    <Text
      style={[
        {
          fontFamily: weight === "medium" ? fontFamily.sans.medium : fontFamily.sans.regular,
          fontSize: scale.size,
          lineHeight: scale.lineHeight,
          letterSpacing: scale.letterSpacing,
          color,
          textTransform: caps ? "uppercase" : "none",
        },
        style,
      ]}
      {...rest}
    />
  );
}
