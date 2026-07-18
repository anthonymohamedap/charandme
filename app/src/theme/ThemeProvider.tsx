import React, { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { palette, type Scheme } from "./tokens";

type ThemeContextValue = {
  scheme: Scheme;
  tokens: (typeof palette)[Scheme];
  /** Manual override for judging both modes side by side (token gallery only). */
  setScheme: (scheme: Scheme | null) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Night is the primary mode — the fallback when the system has no preference. */
const DEFAULT_SCHEME: Scheme = "night";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme();
  const [override, setOverride] = useState<Scheme | null>(null);

  const scheme: Scheme = override ?? (system === "light" ? "day" : DEFAULT_SCHEME);

  const value = useMemo<ThemeContextValue>(
    () => ({ scheme, tokens: palette[scheme], setScheme: setOverride }),
    [scheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
