import { useCallback, useEffect } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider, useTheme } from "@/theme/ThemeProvider";
import { fontsToLoad } from "@/theme/typography";

// No loading spinners anywhere in this product (AGENTS.md §4) — the
// native splash is a static, token-colored screen, not a spinner.
SplashScreen.preventAutoHideAsync().catch(() => {});

function RootStack() {
  const { tokens, scheme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: tokens.base }}>
      <StatusBar style={scheme === "night" ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: tokens.base } }} />
    </View>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(fontsToLoad);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootStack />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
