import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/theme/ThemeProvider";
import { radius, space, destructive, type Scheme } from "@/theme/tokens";
import { SerifText } from "@/components/text/SerifText";
import { SansText } from "@/components/text/SansText";
import { Surface } from "@/components/Surface";
import { EntryRow } from "@/components/EntryRow";
import { Sheet } from "@/components/Sheet";

/**
 * Token gallery — not a product screen. A dev-only surface for judging
 * every foundation token against docs/canon on an actual phone, per
 * V1_PLAN.md Phase 1. Nothing here ships as a feature.
 */
export default function TokenGallery() {
  const { tokens, scheme, setScheme } = useTheme();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [highContrastDemo, setHighContrastDemo] = useState(false);

  return (
    <Surface elevation="page" style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: space.xl,
            paddingBottom: space.xxl,
            paddingLeft: space.xl,
            paddingRight: space.lg,
            gap: space.xxl,
          }}
        >
          <View style={{ gap: space.sm }}>
            <SerifText variant="display">Token gallery</SerifText>
            <SansText size={13} tone="muted">
              Foundation, Phase 1 · judge against docs/canon on the phone in your hand.
            </SansText>
          </View>

          <SchemeToggle current={scheme} onSelect={setScheme} />

          <Section title="Color — night vs day">
            <Row>
              <Swatch label="Base" hex={tokens.base} />
              <Swatch label="Page" hex={tokens.page} />
              <Swatch label="Raised" hex={tokens.raised} />
            </Row>
            <Row>
              <Swatch label="Ink" hex={tokens.ink} />
              <Swatch label="Muted" hex={tokens.muted} />
              <Swatch label="Whisper" hex={tokens.whisper} />
            </Row>
            <Row>
              <Swatch label="Lamplight" hex={tokens.accent.lamplight} />
              <Swatch label="Dusk" hex={tokens.accent.dusk} />
              <Swatch label="Overlap" hex={tokens.accent.overlap} />
            </Row>
            <Row>
              <Swatch label="Destructive" hex={destructive} />
              <Swatch label="Lamplight text" hex={tokens.accentText.lamplight} />
              <Swatch label="Dusk text" hex={tokens.accentText.dusk} />
            </Row>
          </Section>

          <Section title="Typography">
            <SansText size={11} tone="muted" caps>
              Serif display — Newsreader
            </SansText>
            <SerifText variant="display">Wednesday, late July.</SerifText>

            <View style={{ height: space.sm }} />

            <SansText size={11} tone="muted" caps>
              Serif long-form — Source Serif 4
            </SansText>
            <SerifText variant="long">
              The moments you&rsquo;ll miss most are the ones nobody thought to photograph.{" "}
              <SerifText variant="long" italic>
                Twenty degrees, raining since four.
              </SerifText>
            </SerifText>

            <View style={{ height: space.sm }} />

            <SansText size={11} tone="muted" caps>
              Sans — Inter, three sizes only
            </SansText>
            <View style={{ gap: space.xs }}>
              <SansText size={15}>15 · Regular — controls</SansText>
              <SansText size={15} weight="medium">
                15 · Medium — controls
              </SansText>
              <SansText size={13}>13 · Regular — metadata</SansText>
              <SansText size={13} weight="medium">
                13 · Medium — metadata
              </SansText>
              <SansText size={11} caps>
                11 · micro-label
              </SansText>
            </View>
          </Section>

          <Section title="Rhythm — 28pt notebook rule">
            <View>
              {Array.from({ length: 4 }, (_, i) => (
                <View
                  key={i}
                  style={{
                    height: space.rhythm,
                    borderBottomWidth: 1,
                    borderBottomColor: tokens.whisper,
                    justifyContent: "flex-end",
                  }}
                >
                  {i === 1 && <SerifText variant="long">Text sits on the rule.</SerifText>}
                </View>
              ))}
            </View>
          </Section>

          <Section title="Corners — 4pt paper, 2pt photo">
            <Row>
              <View
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: radius.paper,
                  backgroundColor: tokens.raised,
                }}
              />
              <View
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: radius.photo,
                  backgroundColor: tokens.raised,
                }}
              />
            </Row>
          </Section>

          <Section title="Elevation — card">
            <Surface elevation="card" padded highContrast={highContrastDemo}>
              <SerifText variant="long">A card lying on the page, lit from above-left.</SerifText>
            </Surface>
            <Pressable onPress={() => setHighContrastDemo((v) => !v)} style={{ marginTop: space.sm }}>
              <SansText size={13} tone="muted">
                {highContrastDemo ? "Restore grain and shadow" : "Preview high-contrast mode →"}
              </SansText>
            </Pressable>
          </Section>

          <Section title="Entry row — accent hairline">
            <View style={{ gap: space.sm }}>
              <EntryRow accent="lamplight" meta="Kept by Anthony">
                Found the receipt from the night it rained.
              </EntryRow>
              <EntryRow accent="dusk" meta="Kept by her">
                Laughing too hard to finish the sentence.
              </EntryRow>
              <EntryRow accent="overlap" meta="A day you both kept something on">
                Two winters ago, the radiator kept clicking.
              </EntryRow>
            </View>
          </Section>

          <Section title="Sheet">
            <Pressable
              onPress={() => setSheetOpen(true)}
              style={{
                minHeight: space.rhythm - space.xs,
                justifyContent: "center",
              }}
            >
              <SansText size={15} weight="medium">
                Open sheet
              </SansText>
            </Pressable>
          </Section>
        </ScrollView>
      </SafeAreaView>

      <Sheet visible={sheetOpen} onClose={() => setSheetOpen(false)}>
        <SerifText variant="long">
          A sheet — brought close to your face. It takes longer to lift than to fall.
        </SerifText>
      </Sheet>
    </Surface>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: space.md }}>
      <SansText size={11} tone="muted" caps>
        {title}
      </SansText>
      {children}
    </View>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <View style={{ flexDirection: "row", gap: space.sm }}>{children}</View>;
}

function Swatch({ label, hex }: { label: string; hex: string }) {
  return (
    <View style={{ flex: 1, gap: space.xs }}>
      <View
        style={{
          height: 56,
          borderRadius: radius.paper,
          backgroundColor: hex,
          borderWidth: 1,
          borderColor: "rgba(128,128,128,0.15)",
        }}
      />
      <SansText size={13} tone="muted">
        {label}
      </SansText>
      <SansText size={11} tone="whisper">
        {hex}
      </SansText>
    </View>
  );
}

function SchemeToggle({
  current,
  onSelect,
}: {
  current: Scheme;
  onSelect: (scheme: Scheme | null) => void;
}) {
  const options: { label: string; value: Scheme | null }[] = [
    { label: "System", value: null },
    { label: "Night", value: "night" },
    { label: "Day", value: "day" },
  ];

  return (
    <View style={{ flexDirection: "row", gap: space.lg }}>
      {options.map((opt) => {
        const active = opt.value === null ? false : opt.value === current;
        return (
          <Pressable
            key={opt.label}
            onPress={() => onSelect(opt.value)}
            style={{ minHeight: 44, justifyContent: "center" }}
          >
            <SansText size={15} weight={active ? "medium" : "regular"} tone={active ? "ink" : "muted"}>
              {opt.label}
            </SansText>
          </Pressable>
        );
      })}
    </View>
  );
}
