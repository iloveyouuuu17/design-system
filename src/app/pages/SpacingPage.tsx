import React from "react";
import { PageHeader, SectionLabel, Divider, PageWrapper } from "../components/ds/PageShell";

const SPACING_SCALE = [
  { token: "0", value: "0px", rem: "0rem", use: "No spacing" },
  { token: "px", value: "1px", rem: "0.0625rem", use: "Fine borders, hairlines" },
  { token: "0.5", value: "2px", rem: "0.125rem", use: "Micro gaps" },
  { token: "1", value: "4px", rem: "0.25rem", use: "Icon-to-text gaps, tight nudges" },
  { token: "1.5", value: "6px", rem: "0.375rem", use: "Badge padding, tag gaps" },
  { token: "2", value: "8px", rem: "0.5rem", use: "Compact padding, inline elements" },
  { token: "2.5", value: "10px", rem: "0.625rem", use: "Chip padding" },
  { token: "3", value: "12px", rem: "0.75rem", use: "Small button padding, form field inner" },
  { token: "4", value: "16px", rem: "1rem", use: "Default padding, card content spacing" },
  { token: "5", value: "20px", rem: "1.25rem", use: "Large button padding, section gaps" },
  { token: "6", value: "24px", rem: "1.5rem", use: "Card padding, modal padding" },
  { token: "8", value: "32px", rem: "2rem", use: "Section spacing, panel padding" },
  { token: "10", value: "40px", rem: "2.5rem", use: "Large section gaps" },
  { token: "12", value: "48px", rem: "3rem", use: "Page-level section rhythm" },
  { token: "16", value: "64px", rem: "4rem", use: "Hero spacing, major layout gaps" },
  { token: "20", value: "80px", rem: "5rem", use: "Full-bleed section padding" },
];

function SpacingBar({ value }: { value: string }) {
  const px = parseInt(value);
  const clampedPx = Math.min(px, 80);
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-sm bg-primary/20 border-r-2 border-primary shrink-0" style={{ width: `${Math.max(clampedPx, 2)}px`, height: "16px" }} />
    </div>
  );
}

export function SpacingPage() {
  return (
    <PageWrapper>
      <PageHeader title="Spacing" description="The design system uses a 4px base grid. All spacing values are multiples of 4px." chips={["Foundation"]} />
      <section className="mb-10">
        <SectionLabel>Base Grid</SectionLabel>
        <div className="rounded-2xl border border-border bg-white p-6">
          <div className="flex items-end gap-1 mb-5">
            {[1,2,3,4,5,6,8,10,12].map((n) => (
              <div key={n} className="flex flex-col items-center gap-1">
                <div className="bg-primary/20 border border-primary/40 rounded-sm shrink-0" style={{ width: "32px", height: `${n * 4}px` }} />
                <span className="text-[9px] text-muted-foreground font-mono">{n * 4}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">All spacing uses multiples of <span className="font-mono text-foreground">4px</span> — the fundamental unit.</p>
        </div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Spacing Scale</SectionLabel>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-muted/60 border-b border-border">{["Token", "px", "rem", "Visual", "Common use"].map((h) => <th key={h} className="text-left px-5 py-3 text-xs text-muted-foreground font-medium">{h}</th>)}</tr></thead>
            <tbody>
              {SPACING_SCALE.map((s, i) => (
                <tr key={s.token} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                  <td className="px-5 py-3 font-mono text-xs text-[#7c3aed]">{s.token}</td>
                  <td className="px-5 py-3 font-mono text-xs text-foreground">{s.value}</td>
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{s.rem}</td>
                  <td className="px-5 py-3">{parseInt(s.value) > 0 ? <SpacingBar value={s.value} /> : <span className="text-[10px] text-muted-foreground">—</span>}</td>
                  <td className="px-5 py-3 text-xs text-muted-foreground">{s.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageWrapper>
  );
}
