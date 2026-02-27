import React, { useState } from "react";
import { PageHeader, SectionLabel, Divider, PreviewBox, PageWrapper, PropsTable, DosDonts } from "../components/ds/PageShell";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarStatus = "online" | "offline" | "away" | "busy" | "none";

const SIZE_CLASSES: Record<AvatarSize, { outer: string; text: string; statusOuter: string; status: string }> = {
  xs: { outer: "w-6 h-6", text: "text-[9px]", statusOuter: "w-2 h-2", status: "border" },
  sm: { outer: "w-8 h-8", text: "text-[10px]", statusOuter: "w-2.5 h-2.5", status: "border" },
  md: { outer: "w-10 h-10", text: "text-xs", statusOuter: "w-3 h-3", status: "border-2" },
  lg: { outer: "w-14 h-14", text: "text-sm", statusOuter: "w-3.5 h-3.5", status: "border-2" },
  xl: { outer: "w-20 h-20", text: "text-lg", statusOuter: "w-4 h-4", status: "border-2" },
};
const STATUS_COLORS: Record<AvatarStatus, string> = {
  online: "bg-[#16a34a]", offline: "bg-[#9ca3af]", away: "bg-[#d97706]", busy: "bg-[#d4183d]", none: "",
};
const PRESET_COLORS = [
  { bg: "#4f46e5" }, { bg: "#0369a1" }, { bg: "#d97706" },
  { bg: "#16a34a" }, { bg: "#d4183d" }, { bg: "#7c3aed" }, { bg: "#030213" },
];

export function DSAvatar({ initials = "?", size = "md", color, status = "none", shape = "circle" }: {
  initials?: string; size?: AvatarSize; color?: string;
  status?: AvatarStatus; shape?: "circle" | "square";
}) {
  const classes = SIZE_CLASSES[size];
  const bg = color ?? "#030213";
  const radius = shape === "circle" ? "rounded-full" : "rounded-lg";
  return (
    <div className="relative inline-flex shrink-0">
      <div className={`${classes.outer} ${radius} flex items-center justify-center text-white shrink-0`} style={{ background: bg }} role="img" aria-label={initials}>
        <span className={classes.text}>{initials}</span>
      </div>
      {status !== "none" && <span className={`absolute bottom-0 right-0 ${classes.statusOuter} ${classes.status} border-white rounded-full ${STATUS_COLORS[status]}`} />}
    </div>
  );
}

const SAMPLE_AVATARS = [
  { initials: "JD", color: "#4f46e5" }, { initials: "KL", color: "#0369a1" },
  { initials: "MR", color: "#d97706" }, { initials: "SA", color: "#16a34a" },
  { initials: "TN", color: "#7c3aed" }, { initials: "OB", color: "#d4183d" },
];

export function AvatarPage() {
  const [initials, setInitials] = useState("JD");
  const [size, setSize] = useState<AvatarSize>("md");
  const [status, setStatus] = useState<AvatarStatus>("online");
  const [shape, setShape] = useState<"circle" | "square">("circle");
  const [colorIdx, setColorIdx] = useState(0);

  return (
    <PageWrapper>
      <PageHeader title="Avatar" description="Avatars represent users or entities. They support initials, status indicators, and can be grouped." chips={["Component", "Display"]} />
      <section className="mb-10">
        <SectionLabel>Interactive Playground</SectionLabel>
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="bg-[#f7f7f9] flex items-center justify-center min-h-[140px]" style={{ backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
            <DSAvatar initials={initials} size={size} status={status} shape={shape} color={PRESET_COLORS[colorIdx].bg} />
          </div>
          <div className="bg-white border-t border-border p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">Initials</label>
              <input type="text" value={initials} onChange={(e) => setInitials(e.target.value.slice(0, 3).toUpperCase())} className="rounded-lg border border-border bg-input-background px-3 py-1.5 text-sm outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">Size</label>
              <div className="flex gap-1">
                {(["xs","sm","md","lg","xl"] as AvatarSize[]).map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`flex-1 rounded border px-1 py-1.5 text-[10px] transition ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border bg-input-background"}`}>{s}</button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value as AvatarStatus)} className="rounded-lg border border-border bg-input-background px-3 py-1.5 text-xs outline-none">
                {(["none","online","offline","away","busy"] as AvatarStatus[]).map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground">Shape</label>
                <div className="flex gap-1.5">
                  {(["circle","square"] as const).map((s) => (
                    <button key={s} onClick={() => setShape(s)} className={`flex-1 rounded-lg border px-2 py-1.5 text-xs transition ${shape === s ? "border-primary bg-primary text-primary-foreground" : "border-border bg-input-background"}`}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground">Color</label>
                <div className="flex gap-1.5">
                  {PRESET_COLORS.map((c, i) => (
                    <button key={i} onClick={() => setColorIdx(i)} className={`w-5 h-5 rounded-full transition-transform ${colorIdx === i ? "scale-125 ring-2 ring-offset-1 ring-primary" : ""}`} style={{ background: c.bg }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Sizes</SectionLabel>
        <PreviewBox className="bg-[#f7f7f9] p-8">
          <div className="flex items-end gap-6">
            {(["xs","sm","md","lg","xl"] as AvatarSize[]).map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <DSAvatar initials="JD" size={s} color="#4f46e5" />
                <span className="text-[10px] text-muted-foreground font-mono">{s}</span>
              </div>
            ))}
          </div>
        </PreviewBox>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Shapes & Colors</SectionLabel>
        <PreviewBox className="bg-[#f7f7f9] p-8">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-3">{SAMPLE_AVATARS.map((av, i) => <DSAvatar key={i} initials={av.initials} color={av.color} size="md" />)}</div>
            <div className="flex gap-3">{SAMPLE_AVATARS.map((av, i) => <DSAvatar key={i} initials={av.initials} color={av.color} size="md" shape="square" />)}</div>
          </div>
        </PreviewBox>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Props</SectionLabel>
        <PropsTable props={[
          { name: "initials", type: "string", description: "1-3 character initials" },
          { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Avatar dimensions" },
          { name: "color", type: "string", description: "Background hex color" },
          { name: "status", type: '"online" | "offline" | "away" | "busy" | "none"', default: '"none"', description: "Status indicator dot" },
          { name: "shape", type: '"circle" | "square"', default: '"circle"', description: "Shape variant" },
        ]} />
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Usage Rules</SectionLabel>
        <DosDonts
          dos={["Use initials as a fallback when no profile image is available.", "Use status indicators to show real-time presence.", "Keep avatar group limited to 4-5 visible before truncating."]}
          donts={["Don't use avatars without an accessible aria-label.", "Don't mix circle and square avatars in the same list.", "Don't use low-contrast color combinations for initials."]}
        />
      </section>
    </PageWrapper>
  );
}
