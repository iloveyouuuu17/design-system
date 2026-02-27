import React, { useState } from "react";
import { X } from "lucide-react";
import { PageHeader, SectionLabel, Divider, PreviewBox, PageWrapper, PropsTable, DosDonts } from "../components/ds/PageShell";

type BadgeVariant = "default" | "primary" | "success" | "warning" | "destructive" | "info";
type BadgeSize = "sm" | "md";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: "bg-muted text-muted-foreground border-border",
  primary: "bg-primary text-primary-foreground border-primary",
  success: "bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0]",
  warning: "bg-[#fffbeb] text-[#d97706] border-[#fde68a]",
  destructive: "bg-[#fff1f2] text-[#d4183d] border-[#fecaca]",
  info: "bg-[#eff6ff] text-[#2563eb] border-[#bfdbfe]",
};
const DOT_CLASSES: Record<BadgeVariant, string> = {
  default: "bg-muted-foreground", primary: "bg-primary-foreground",
  success: "bg-[#16a34a]", warning: "bg-[#d97706]",
  destructive: "bg-[#d4183d]", info: "bg-[#2563eb]",
};
const SIZE_CLASSES: Record<BadgeSize, string> = { sm: "px-1.5 py-0.5 text-[10px]", md: "px-2.5 py-0.5 text-xs" };

export function DSBadge({ variant = "default", size = "md", children, dot = false, removable = false, onRemove }: {
  variant?: BadgeVariant; size?: BadgeSize; children: React.ReactNode;
  dot?: boolean; removable?: boolean; onRemove?: () => void;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${DOT_CLASSES[variant]}`} />}
      {children}
      {removable && <button onClick={onRemove} className="shrink-0 hover:opacity-70 transition-opacity" aria-label="Remove"><X size={10} /></button>}
    </span>
  );
}

export function BadgePage() {
  const variants: BadgeVariant[] = ["default", "primary", "success", "warning", "destructive", "info"];
  const variantLabels: Record<BadgeVariant, string> = { default: "Default", primary: "Primary", success: "Success", warning: "Warning", destructive: "Error", info: "Info" };
  const [variant, setVariant] = useState<BadgeVariant>("success");
  const [size, setSize] = useState<BadgeSize>("md");
  const [dot, setDot] = useState(false);
  const [label, setLabel] = useState("In Progress");

  return (
    <PageWrapper>
      <PageHeader title="Badge" description="Badges are small status indicators and labels used to highlight information, categorise content, or show counts." chips={["Component", "Non-interactive"]} />
      <section className="mb-10">
        <SectionLabel>Interactive Playground</SectionLabel>
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="bg-[#f7f7f9] flex items-center justify-center min-h-[120px]" style={{ backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
            <DSBadge variant={variant} size={size} dot={dot}>{label}</DSBadge>
          </div>
          <div className="bg-white border-t border-border p-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">Label</label>
              <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} className="rounded-lg border border-border bg-input-background px-3 py-1.5 text-sm outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">Variant</label>
              <select value={variant} onChange={(e) => setVariant(e.target.value as BadgeVariant)} className="rounded-lg border border-border bg-input-background px-3 py-1.5 text-xs outline-none">
                {variants.map((v) => <option key={v} value={v}>{variantLabels[v]}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">Size</label>
              <div className="flex gap-1.5">
                {(["sm", "md"] as BadgeSize[]).map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`flex-1 rounded-lg border px-2 py-1.5 text-xs transition ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border bg-input-background"}`}>{s.toUpperCase()}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Variants</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {variants.map((v) => (
            <div key={v} className="rounded-2xl border border-border bg-white p-5">
              <p className="text-xs text-muted-foreground mb-3">{variantLabels[v]}</p>
              <div className="flex flex-wrap gap-2">
                <DSBadge variant={v}>{variantLabels[v]}</DSBadge>
                <DSBadge variant={v} dot>{variantLabels[v]}</DSBadge>
                <DSBadge variant={v} size="sm">{variantLabels[v]}</DSBadge>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Props</SectionLabel>
        <PropsTable props={[
          { name: "variant", type: '"default" | "primary" | "success" | "warning" | "destructive" | "info"', default: '"default"', description: "Visual style" },
          { name: "size", type: '"sm" | "md"', default: '"md"', description: "Controls font size and padding" },
          { name: "dot", type: "boolean", default: "false", description: "Shows a coloured dot indicator" },
          { name: "removable", type: "boolean", default: "false", description: "Shows an x button to dismiss" },
        ]} />
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Usage Rules</SectionLabel>
        <DosDonts
          dos={["Use badges to convey status, not to replace full sentences.", "Keep badge labels short — 1-3 words maximum.", "Use semantic variants consistently."]}
          donts={["Don't use badges as the only indicator.", "Don't use too many badges in a single view.", "Don't use interactive affordances on non-interactive badges."]}
        />
      </section>
    </PageWrapper>
  );
}
