import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { PageHeader, SectionLabel, Divider, PageWrapper } from "../components/ds/PageShell";

interface ColorSwatch { name: string; token: string; value: string; textColor: string; }

const BRAND: ColorSwatch[] = [
  { name: "Primary", token: "--primary", value: "#030213", textColor: "#ffffff" },
  { name: "Primary Foreground", token: "--primary-foreground", value: "#ffffff", textColor: "#030213" },
  { name: "Secondary", token: "--secondary", value: "#f0f0f7", textColor: "#030213" },
  { name: "Secondary Foreground", token: "--secondary-foreground", value: "#030213", textColor: "#ffffff" },
];
const NEUTRAL: ColorSwatch[] = [
  { name: "Background", token: "--background", value: "#ffffff", textColor: "#030213" },
  { name: "Foreground", token: "--foreground", value: "#030213", textColor: "#ffffff" },
  { name: "Muted", token: "--muted", value: "#ececf0", textColor: "#030213" },
  { name: "Muted Foreground", token: "--muted-foreground", value: "#717182", textColor: "#ffffff" },
  { name: "Border", token: "--border", value: "#e6e6e6", textColor: "#030213" },
  { name: "Input BG", token: "--input-background", value: "#f3f3f5", textColor: "#030213" },
  { name: "Accent", token: "--accent", value: "#e9ebef", textColor: "#030213" },
];
const SEMANTIC: ColorSwatch[] = [
  { name: "Success", token: "success", value: "#16a34a", textColor: "#ffffff" },
  { name: "Success Light", token: "success-light", value: "#f0fdf4", textColor: "#16a34a" },
  { name: "Warning", token: "warning", value: "#d97706", textColor: "#ffffff" },
  { name: "Warning Light", token: "warning-light", value: "#fffbeb", textColor: "#d97706" },
  { name: "Destructive", token: "--destructive", value: "#d4183d", textColor: "#ffffff" },
  { name: "Destructive Light", token: "destructive-light", value: "#fff1f2", textColor: "#d4183d" },
  { name: "Info", token: "info", value: "#2563eb", textColor: "#ffffff" },
  { name: "Info Light", token: "info-light", value: "#eff6ff", textColor: "#2563eb" },
];
const CHARTS: ColorSwatch[] = [
  { name: "Chart 1", token: "--chart-1", value: "#e8612c", textColor: "#ffffff" },
  { name: "Chart 2", token: "--chart-2", value: "#3b9e8e", textColor: "#ffffff" },
  { name: "Chart 3", token: "--chart-3", value: "#2e5280", textColor: "#ffffff" },
  { name: "Chart 4", token: "--chart-4", value: "#d9a830", textColor: "#030213" },
  { name: "Chart 5", token: "--chart-5", value: "#d4872e", textColor: "#ffffff" },
];

function SwatchCard({ swatch }: { swatch: ColorSwatch }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(swatch.value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <button onClick={handleCopy} className="group text-left rounded-xl overflow-hidden border border-border hover:shadow-md transition-all w-full" title={`Copy ${swatch.value}`}>
      <div className="h-16 flex items-end justify-end p-2" style={{ background: swatch.value }}>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: swatch.textColor }}>
          {copied ? <Check size={13} /> : <Copy size={13} />}
        </span>
      </div>
      <div className="bg-white px-3 py-2">
        <p className="text-xs text-foreground truncate">{swatch.name}</p>
        <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{swatch.value}</p>
      </div>
    </button>
  );
}

function SwatchGrid({ swatches }: { swatches: ColorSwatch[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {swatches.map((s) => <SwatchCard key={s.name} swatch={s} />)}
    </div>
  );
}

export function ColorsPage() {
  return (
    <PageWrapper>
      <PageHeader title="Colors" description="The color palette for the design system. Click any swatch to copy its hex value to your clipboard." chips={["Foundation"]} />
      <section className="mb-10"><SectionLabel>Brand Colors</SectionLabel><SwatchGrid swatches={BRAND} /></section>
      <Divider />
      <section className="mb-10"><SectionLabel>Neutral Colors</SectionLabel><SwatchGrid swatches={NEUTRAL} /></section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Semantic Colors</SectionLabel>
        <p className="text-xs text-muted-foreground mb-4">Semantic colors convey meaning. Use these consistently to avoid confusion.</p>
        <SwatchGrid swatches={SEMANTIC} />
      </section>
      <Divider />
      <section className="mb-10"><SectionLabel>Chart Colors</SectionLabel><SwatchGrid swatches={CHARTS} /></section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Usage Guidelines</SectionLabel>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-muted/60 border-b border-border">{["Color", "Token", "When to use"].map((h) => <th key={h} className="text-left px-5 py-3 text-xs text-muted-foreground font-medium">{h}</th>)}</tr></thead>
            <tbody>
              {[
                { color: "Primary", token: "--primary", when: "Main CTAs, key UI elements, brand identity" },
                { color: "Muted", token: "--muted", when: "Backgrounds, disabled states, subtle dividers" },
                { color: "Destructive", token: "--destructive", when: "Errors, delete actions, critical alerts" },
                { color: "Success", token: "success", when: "Confirmations, completed states, positive feedback" },
                { color: "Warning", token: "warning", when: "Cautions, pending states, reversible actions" },
                { color: "Info", token: "info", when: "Informational messages, tips, neutral notifications" },
              ].map((row, i) => (
                <tr key={row.color} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                  <td className="px-5 py-3 text-xs text-foreground">{row.color}</td>
                  <td className="px-5 py-3 font-mono text-xs text-[#7c3aed]">{row.token}</td>
                  <td className="px-5 py-3 text-xs text-muted-foreground">{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageWrapper>
  );
}
