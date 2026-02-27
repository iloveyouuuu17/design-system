import React from "react";

interface PageHeaderProps { title: string; description: string; chips?: string[]; }
export function PageHeader({ title, description, chips }: PageHeaderProps) {
  return (
    <div className="mb-10">
      {chips && chips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {chips.map((c) => <Chip key={c}>{c}</Chip>)}
        </div>
      )}
      <h1 className="text-foreground mb-2">{title}</h1>
      <p className="text-muted-foreground max-w-2xl">{description}</p>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-4">{children}</p>;
}

export function Divider() {
  return <hr className="border-border my-10" />;
}

export function Chip({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{children}</span>;
}

export function PreviewBox({ children, className = "", minHeight = "140px" }: { children: React.ReactNode; className?: string; minHeight?: string }) {
  return (
    <div className={`relative flex flex-wrap items-center justify-center gap-4 rounded-2xl overflow-hidden ${className}`} style={{ minHeight }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #9ca3af 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">{children}</div>
    </div>
  );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-4xl mx-auto px-8 py-10">{children}</div>;
}

interface Prop { name: string; type: string; default?: string; description: string; }
export function PropsTable({ props }: { props: Prop[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-muted/60 border-b border-border">
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th key={h} className="text-left px-5 py-3 text-xs text-muted-foreground font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr key={p.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
              <td className="px-5 py-3 font-mono text-xs text-foreground">{p.name}</td>
              <td className="px-5 py-3 font-mono text-xs text-[#7c3aed]">{p.type}</td>
              <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{p.default ?? "—"}</td>
              <td className="px-5 py-3 text-xs text-muted-foreground">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DosDonts({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-5">
        <p className="text-xs text-[#16a34a] mb-3">✓ Do</p>
        <ul className="flex flex-col gap-2.5">
          {dos.map((d) => <li key={d} className="flex items-start gap-2 text-xs text-[#166534]"><span className="shrink-0 w-1 h-1 rounded-full bg-[#16a34a] mt-1.5" />{d}</li>)}
        </ul>
      </div>
      <div className="rounded-2xl border border-[#fecaca] bg-[#fff1f2] p-5">
        <p className="text-xs text-[#dc2626] mb-3">✕ Don't</p>
        <ul className="flex flex-col gap-2.5">
          {donts.map((d) => <li key={d} className="flex items-start gap-2 text-xs text-[#991b1b]"><span className="shrink-0 w-1 h-1 rounded-full bg-[#dc2626] mt-1.5" />{d}</li>)}
        </ul>
      </div>
    </div>
  );
}
