import React, { useMemo, useState } from "react";
import { StyleSheet, type LayoutChangeEvent } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { grain } from "@/theme/tokens";

type Dot = { cx: number; cy: number; r: number; o: number };

/**
 * Paper tooth — design-foundation.md §12: "a fine, non-repeating grain
 * at 3–5% opacity, present on every surface. It must be felt and not
 * seen." Procedural (no bitmap asset): a scatter of hairline dots at
 * random opacity within the 3–5% band, seeded once per mount so it
 * doesn't shimmer on re-render (§8 forbids ambient shimmer).
 *
 * Disabled entirely by `visible={false}` in high-contrast mode (§13).
 */
export function Grain({ color, visible = true }: { color: string; visible?: boolean }) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const dots = useMemo<Dot[]>(() => {
    if (!size.width || !size.height) return [];
    const density = 1 / 700; // one dot per ~700px²
    const count = Math.min(600, Math.round(size.width * size.height * density));
    return Array.from({ length: count }, () => ({
      cx: Math.random() * size.width,
      cy: Math.random() * size.height,
      r: 0.4 + Math.random() * 0.7,
      o: grain.opacityMin + Math.random() * (grain.opacityMax - grain.opacityMin),
    }));
  }, [size.width, size.height]);

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize((prev) => (prev.width === width && prev.height === height ? prev : { width, height }));
  };

  return (
    <Svg style={StyleSheet.absoluteFill} onLayout={onLayout} pointerEvents="none">
      {visible &&
        dots.map((d, i) => <Circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={color} opacity={d.o} />)}
    </Svg>
  );
}
