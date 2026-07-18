import React from "react";
import { StyleSheet, View, type ViewProps, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/theme/ThemeProvider";
import { radius, space, type Elevation } from "@/theme/tokens";
import { Grain } from "./Grain";

/**
 * The page surface — design-foundation.md §3.
 * "There is a light source. Warm, above and slightly left... There is
 * a surface. Paper has tooth, weight and a temperature. Surfaces are
 * opaque and matte." Three elevations only: page, card, sheet.
 *
 * Grain, the warm above-left light and the shadow all live here, not
 * in each screen — a surface that forgot its own paper tooth would be
 * a bug, not a screen-by-screen choice.
 */
type SurfaceProps = ViewProps & {
  elevation?: Elevation;
  padded?: boolean;
  /** Strips grain, shadow and the light gradient (design-foundation.md §13). */
  highContrast?: boolean;
};

export function Surface({
  elevation = "page",
  padded = false,
  highContrast = false,
  style,
  children,
  ...rest
}: SurfaceProps) {
  const { tokens, scheme } = useTheme();
  const raised = elevation !== "page";

  const backgroundColor = raised ? tokens.raised : tokens.page;

  const shadowStyle: ViewStyle = raised && !highContrast
    ? {
        shadowColor: scheme === "night" ? "rgba(10,7,4,0.6)" : "rgba(60,40,20,0.28)",
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 6,
      }
    : {};

  return (
    <View
      style={[
        {
          backgroundColor,
          borderRadius: raised ? radius.paper : 0,
          padding: padded ? space.md : 0,
          overflow: "hidden",
        },
        shadowStyle,
        style,
      ]}
      {...rest}
    >
      {!highContrast && (
        <>
          <Grain color={tokens.ink} />
          <LinearGradient
            pointerEvents="none"
            style={StyleSheet.absoluteFill}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.7, y: 0.9 }}
            colors={
              scheme === "night"
                ? ["rgba(217,164,65,0.05)", "rgba(217,164,65,0)"]
                : ["rgba(255,244,220,0.55)", "rgba(255,244,220,0)"]
            }
          />
        </>
      )}
      {children}
    </View>
  );
}
