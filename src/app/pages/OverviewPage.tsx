import React from "react";
import { Link } from "react-router";
import { Palette, Type, Ruler, MousePointerClick, TextCursorInput, Tag, SquareStack, CircleUser, CheckSquare, ArrowRight, Layers2, ShieldCheck, Puzzle, Zap } from "lucide-react";
import { PrimaryButton } from "../components/PrimaryButton";

const FOUNDATIONS = [
  { label: "Colors", desc: "Brand palette, semantic & neutral tones", path: "/foundation/colors", icon: Palette, color: "#f0f0ff", iconColor: "#4f46e5" },
  { label: "Typography", desc: "Type scale, weights & line-heights", path: "/foundation/typography", icon: Type, color: "#fff7ed", iconColor: "#ea580c" },
  { label: "Spacing", desc: "4px grid system & spacing tokens", path: "/foundation/spacing", icon: Ruler, color: "#f0fdf4", iconColor: "#16a34a" },
];
const COMPONENTS = [
  { label: "Button", desc: "Primary action trigger", path: "/components/button", preview: "button" },
  { label: "Input", desc: "Text entry field", path: "/components/input", preview: "input" },
  { label: "Badge", desc: "Status & label indicators", path: "/components/badge", preview: "badge" },
  { label: "Card", desc: "Content container", path: "/components/card", preview: "card" },
  { label: "Avatar", desc: "User & entity representation", path: "/components/avatar", preview: "avatar" },
  { label: "Checkbox", desc: "Multi-select control", path: "/components/checkbox", preview: "checkbox" },
];
const STATS = [
  { value: "6", label: "Components" },
  { value: "3", label: "Foundations" },
  { value: "WCAG AA", label: "Accessibility" },
  { value: "4px", label: "Base Grid" },
];
const PRINCIPLES = [
  { icon: ShieldCheck, title: "Accessible first", desc: "Every component meets WCAG 2.1 AA standards with keyboard, focus, and screen reader support built in.", color: "#f0f0ff", iconColor: "#4f46e5" },
  { icon: Puzzle, title: "Composable", desc: "Components are designed to be combined and extended, sharing a consistent set of design tokens.", color: "#fff7ed", iconColor: "#ea580c" },
  { icon: Zap, title: "Performant", desc: "Minimal dependencies, tree-shakeable, and optimized for fast render without sacrificing developer experience.", color: "#f0fdf4", iconColor: "#16a34a" },
];

export function OverviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Layers2 size={18} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-foreground leading-none mb-0.5">Design System</h1>
            <p className="text-xs text-muted-foreground">Version 1.0.0 · React + Tailwind CSS</p>
          </div>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-6">A comprehensive collection of reusable components, foundations, and guidelines for building consistent, accessible, and scalable user interfaces.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/components/button"><PrimaryButton size="md" trailingIcon={<ArrowRight size={15} />}>Browse Components</PrimaryButton></Link>
          <Link to="/foundation/colors"><button className="h-10 px-4 rounded-[var(--radius-md)] border border-border bg-white text-foreground text-sm hover:bg-muted transition-colors">View Foundations</button></Link>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {STATS.map(({ value, label }) => (
          <div key={label} className="rounded-2xl border border-border bg-white p-4 flex flex-col gap-1">
            <span className="text-xl text-foreground">{value}</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
      <div className="mb-12">
        <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-4">Design Principles</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PRINCIPLES.map(({ icon: Icon, title, desc, color, iconColor }) => (
            <div key={title} className="rounded-2xl border border-border bg-white p-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: color }}><Icon size={17} style={{ color: iconColor }} /></div>
              <p className="text-sm text-foreground mb-1">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-4">Foundation</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FOUNDATIONS.map(({ label, desc, path, icon: Icon, color, iconColor }) => (
            <Link key={path} to={path} className="group">
              <div className="rounded-2xl border border-border bg-white p-5 h-full hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: color }}><Icon size={17} style={{ color: iconColor }} /></div>
                <p className="text-sm text-foreground mb-1">{label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground group-hover:text-foreground transition-colors"><span>View</span><ArrowRight size={11} /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-4">Components</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPONENTS.map(({ label, desc, path }) => (
            <Link key={path} to={path} className="group">
              <div className="rounded-2xl border border-border bg-white overflow-hidden hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="h-16 bg-[#f7f7f9] flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-mono">{label}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-foreground">{label}</p>
                    <ArrowRight size={13} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
