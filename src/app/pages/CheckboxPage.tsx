import React, { useState } from "react";
import { Minus } from "lucide-react";
import { PageHeader, SectionLabel, Divider, PreviewBox, PageWrapper, PropsTable, DosDonts } from "../components/ds/PageShell";

type CheckboxState = "unchecked" | "checked" | "indeterminate";
type CheckboxSize = "sm" | "md";

const SIZE_BOX: Record<CheckboxSize, string> = { sm: "w-3.5 h-3.5 rounded", md: "w-4 h-4 rounded" };
const SIZE_ICON: Record<CheckboxSize, number> = { sm: 9, md: 11 };
const SIZE_LABEL: Record<CheckboxSize, string> = { sm: "text-xs", md: "text-sm" };

export function DSCheckbox({ checked = "unchecked", onChange, label, helper, disabled = false, size = "md" }: {
  checked?: CheckboxState; onChange?: (next: CheckboxState) => void;
  label?: string; helper?: string; disabled?: boolean; size?: CheckboxSize;
}) {
  function handleClick() {
    if (disabled || !onChange) return;
    onChange(checked === "unchecked" ? "checked" : "unchecked");
  }
  const isChecked = checked === "checked";
  const isIndet = checked === "indeterminate";
  const isFilled = isChecked || isIndet;
  return (
    <div className={`flex items-start gap-2.5 ${disabled ? "opacity-50" : "cursor-pointer"}`} onClick={handleClick}>
      <div className={[SIZE_BOX[size], "border shrink-0 flex items-center justify-center transition-all mt-0.5", isFilled ? "bg-primary border-primary" : "bg-white border-border hover:border-primary/60"].join(" ")}
        role="checkbox" aria-checked={isIndet ? "mixed" : isChecked} tabIndex={disabled ? -1 : 0} onKeyDown={(e) => e.key === " " && handleClick()}>
        {isChecked && <svg width={SIZE_ICON[size]} height={SIZE_ICON[size] - 2} viewBox="0 0 11 9" fill="none"><path d="M1 4.5l3 3 6-7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        {isIndet && <Minus size={SIZE_ICON[size]} className="text-white" strokeWidth={2.5} />}
      </div>
      {(label || helper) && (
        <div className="flex flex-col gap-0.5 min-w-0">
          {label && <span className={`${SIZE_LABEL[size]} text-foreground leading-tight`}>{label}</span>}
          {helper && <span className="text-[10px] text-muted-foreground leading-snug">{helper}</span>}
        </div>
      )}
    </div>
  );
}

const FRAMEWORKS = ["React", "Vue", "Angular", "Svelte"];

function CheckboxGroup() {
  const [selected, setSelected] = useState<string[]>(["React"]);
  function toggle(name: string) {
    setSelected((prev) => prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]);
  }
  const allChecked = selected.length === FRAMEWORKS.length;
  const someChecked = selected.length > 0 && !allChecked;
  return (
    <div className="flex flex-col gap-3">
      <DSCheckbox checked={allChecked ? "checked" : someChecked ? "indeterminate" : "unchecked"}
        onChange={(next) => setSelected(next === "checked" ? [...FRAMEWORKS] : [])} label="Select all frameworks" />
      <div className="ml-6 flex flex-col gap-2.5 border-l-2 border-border pl-4">
        {FRAMEWORKS.map((f) => <DSCheckbox key={f} checked={selected.includes(f) ? "checked" : "unchecked"} onChange={() => toggle(f)} label={f} />)}
      </div>
      <p className="text-[10px] text-muted-foreground mt-1">Selected: {selected.length === 0 ? "None" : selected.join(", ")}</p>
    </div>
  );
}

export function CheckboxPage() {
  const [checked, setChecked] = useState<CheckboxState>("unchecked");
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<CheckboxSize>("md");

  return (
    <PageWrapper>
      <PageHeader title="Checkbox" description="Checkboxes allow users to select one or more options. They support checked, unchecked, and indeterminate states." chips={["Component", "Form", "Interactive"]} />
      <section className="mb-10">
        <SectionLabel>Interactive Playground</SectionLabel>
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="bg-[#f7f7f9] flex items-center justify-center min-h-[120px]" style={{ backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
            <DSCheckbox checked={checked} onChange={setChecked} label="Remember me" disabled={disabled} size={size} />
          </div>
          <div className="bg-white border-t border-border p-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">State</label>
              <div className="flex flex-col gap-1.5">
                {(["unchecked","checked","indeterminate"] as CheckboxState[]).map((s) => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" checked={checked === s} onChange={() => setChecked(s)} className="accent-[#030213]" />
                    <span className="text-xs capitalize">{s}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">Size</label>
              <div className="flex gap-1.5">
                {(["sm","md"] as CheckboxSize[]).map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`flex-1 rounded-lg border px-2 py-1.5 text-xs transition ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border bg-input-background"}`}>{s.toUpperCase()}</button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground">Options</label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} className="w-3.5 h-3.5 accent-[#030213]" />
                <span className="text-xs">Disabled</span>
              </label>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Checkbox Group with Indeterminate</SectionLabel>
        <div className="rounded-2xl border border-border bg-white p-6"><CheckboxGroup /></div>
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Props</SectionLabel>
        <PropsTable props={[
          { name: "checked", type: '"unchecked" | "checked" | "indeterminate"', default: '"unchecked"', description: "Visual and semantic state" },
          { name: "onChange", type: "(next: CheckboxState) => void", description: "Called when toggled" },
          { name: "label", type: "string", description: "Visible label text" },
          { name: "helper", type: "string", description: "Helper text below label" },
          { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction" },
          { name: "size", type: '"sm" | "md"', default: '"md"', description: "Controls sizing" },
        ]} />
      </section>
      <Divider />
      <section className="mb-10">
        <SectionLabel>Usage Rules</SectionLabel>
        <DosDonts
          dos={["Use indeterminate for parent checkboxes that partially select a group.", "Always include a visible label for each checkbox.", "Group related checkboxes with a clear heading."]}
          donts={["Don't use a checkbox for a single binary choice — use a Toggle instead.", "Don't rely on colour alone to show checked state.", "Don't place checkboxes too close together."]}
        />
      </section>
    </PageWrapper>
  );
}
