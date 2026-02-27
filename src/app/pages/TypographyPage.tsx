import React from "react";
import { PageHeader, SectionLabel, Divider, PageWrapper } from "../components/ds/PageShell";

const TYPE_SCALE = [
  { name: "Display", tag: "—", size: "2rem", weight: "500", lineHeight: "1.2", sample: "Display Heading" },
  { name: "H1", tag: "h1", size: "1.5rem", weight: "500", lineHeight: "1.5", sample: "Heading One" },
  { name: "H2", tag: "h2", size: "1.25rem", weight: "500", lineHeight: "1.5", sample: "Heading Two" },
  { name: "H3", tag: "h3", size: "1.125rem", weight: "500", lineHeight: "1.5", sample: "Heading Three" },
  { name: "H4", tag: "h4", size: "1rem", weight: "500", lineHeight: "1.5", sample: "Heading Four" },
  { name: "Body", tag: "p", size: "1rem", weight: "400", lineHeight: "1.6", sample: "Body text for reading and content" },
  { name: "Small", tag: "small", size: "0.875rem", weight: "400", lineHeight: "1.5", sample: "Small supporting text and captions" },
  { name: "XSmall", tag: "—", size: "0.75rem", weight: "400", lineHeight: "1.5", sample: "Extra small labels and tags" },
  { name: "Code", tag: "code", size: "0.875rem", weight: "400", lineHeight: "1.6", sample: "const greeting = 'Hello World'" },
];
const WEIGHTS = [
  { name: "Normal", value: "400", desc: "Body copy, helper text" },
  { name: "Medium", value: "500", desc: "Headings, labels, buttons" },
  { name: "Semibold", value: "600", desc: "Emphasis, key terms" },
  { name: "Bold", value: "700", desc: "Strong emphasis (use sparingly)" },
];

export function TypographyPage() {
  return (
    <PageWrapper>
      <PageHeader title="Typography" description="Type scale, weights, and usage guidelines for the design system." chips={["Foundation"]} />
      <section className="mb-10">
        <SectionLabel>Font Family</SectionLabel>
        <div className="rounded-2xl border border-border bg-white p-6">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[10px] text-muted-foreground mb-1 font-mono">--font-family-sans</p>
              <p style={{ fontSize: "2rem" }} className="text-foreground tracking-tight">System UI</p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif</p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-[10px] text-muted-foreground mb-1 font-mono">--font-family-mono</p>
              <p style={{ fontSize: "1.25rem" }} className="font-mono text-foreground">Monospace</p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace</p>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Type Scale</SectionLabel>
        <div className="flex flex-col divide-y divide-border rounded-2xl border border-border overflow-hidden">
          {TYPE_SCALE.map((t, i) => (
            <div key={t.name} className={`px-6 py-5 flex items-center gap-6 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
              <div className="w-24 shrink-0">
                <p className="text-xs text-foreground">{t.name}</p>
                <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{t.size} / {t.weight}</p>
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className={`text-foreground truncate ${t.name === "Code" ? "font-mono" : ""}`} style={{ fontSize: t.size, fontWeight: t.weight, lineHeight: t.lineHeight }}>{t.sample}</p>
              </div>
              {t.tag !== "—" && <span className="shrink-0 font-mono text-[10px] px-2 py-0.5 rounded bg-[#f0f0ff] text-[#4f46e5] border border-[#e0e0ff]">&lt;{t.tag}&gt;</span>}
            </div>
          ))}
        </div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Font Weights</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {WEIGHTS.map(({ name, value, desc }) => (
            <div key={name} className="rounded-2xl border border-border bg-white p-5">
              <p className="text-foreground mb-1" style={{ fontSize: "1.25rem", fontWeight: value }}>{name}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{desc}</p>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Guidelines</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Hierarchy", desc: "Use size and weight — not color alone — to establish visual hierarchy. Limit yourself to 2–3 sizes per view." },
            { title: "Line length", desc: "Optimal reading length is 60–80 characters per line. Use max-width constraints to prevent overly long lines." },
            { title: "Contrast", desc: "Always maintain a minimum 4.5:1 contrast ratio for body text (WCAG AA). Use semantic color tokens." },
            { title: "Alignment", desc: "Left-align body copy. Centre-align only for short headings or callouts. Avoid justified text." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-white p-5">
              <p className="text-sm text-foreground mb-1">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
