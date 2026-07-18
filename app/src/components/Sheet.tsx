import React, { useEffect, useRef, useState } from "react";
import { AccessibilityInfo, Animated, Modal, Pressable, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { useTheme } from "@/theme/ThemeProvider";
import { radius, space } from "@/theme/tokens";
import { curve, duration } from "@/theme/motion";
import { Grain } from "./Grain";

type SheetProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/**
 * A thing brought close to your face — design-foundation.md §3.
 * Heavier than the interface tier: it takes longer to lift than to
 * fall (§8). The scrim is the one permitted use of blur in the whole
 * product (§12) — a paper-thin haze so the page below reads as
 * *below*, never *behind glass*.
 */
export function Sheet({ visible, onClose, children }: SheetProps) {
  const { tokens, scheme } = useTheme();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [mounted, setMounted] = useState(visible);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
    const sub = AccessibilityInfo.addEventListener("reduceMotionChanged", setReduceMotion);
    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      Animated.timing(progress, {
        toValue: 1,
        duration: reduceMotion ? 0 : duration.sheetOpen,
        easing: curve,
        useNativeDriver: true,
      }).start();
    } else if (mounted) {
      Animated.timing(progress, {
        toValue: 0,
        duration: reduceMotion ? 0 : duration.sheetClose,
        easing: curve,
        useNativeDriver: true,
      }).start(({ finished }) => finished && setMounted(false));
    }
  }, [visible]);

  if (!mounted) return null;

  const translateY = progress.interpolate({ inputRange: [0, 1], outputRange: [400, 0] });

  return (
    <Modal transparent visible={mounted} onRequestClose={onClose} statusBarTranslucent>
      <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel="Close">
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: progress }]}>
          <BlurView
            style={StyleSheet.absoluteFill}
            intensity={12}
            tint={scheme === "night" ? "dark" : "light"}
          />
        </Animated.View>
      </Pressable>
      <Animated.View
        style={{
          marginTop: "auto",
          backgroundColor: tokens.raised,
          borderTopLeftRadius: radius.paper,
          borderTopRightRadius: radius.paper,
          padding: space.lg,
          paddingBottom: space.xl,
          transform: [{ translateY }],
          overflow: "hidden",
        }}
      >
        <Grain color={tokens.ink} />
        {children}
      </Animated.View>
    </Modal>
  );
}
