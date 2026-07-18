import React from "react";
import { View } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";
import { space } from "@/theme/tokens";
import { SerifText } from "./text/SerifText";
import { SansText } from "./text/SansText";

/**
 * Whoever kept it (AGENTS.md §7). Never decoration — identity.
 * Overlap appears only when both of you kept something on the same day;
 * it cannot be requested, only earned by both being there.
 */
export type EntryAccent = "lamplight" | "dusk" | "overlap";

type EntryRowProps = {
  accent: EntryAccent;
  /** The couple's words — always serif. */
  children: React.ReactNode;
  /** A spoken date or similar — never a machine timestamp to the minute. */
  meta?: string;
};

/**
 * An entry — a line, a photo, an answer — kept on a day, marked with a
 * hairline of whoever kept it (emotional-journey.md §4, §12).
 */
export function EntryRow({ accent, children, meta }: EntryRowProps) {
  const { tokens } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        borderLeftWidth: 2,
        borderLeftColor: tokens.accent[accent],
        paddingLeft: space.md,
        paddingVertical: space.sm,
      }}
    >
      <View style={{ flex: 1, gap: space.xs }}>
        <SerifText variant="long">{children}</SerifText>
        {meta ? (
          <SansText size={13} tone="muted">
            {meta}
          </SansText>
        ) : null}
      </View>
    </View>
  );
}
