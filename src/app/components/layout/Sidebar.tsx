import React from "react";
import { NavLink, useLocation } from "react-router";
import { LayoutDashboard, Palette, Type, Ruler, MousePointerClick, TextCursorInput, Tag, SquareStack, CircleUser, CheckSquare, X, Layers2 } from "lucide-react";

const NAV = [
  { items: [{ label: "Overview", path: "/", icon: LayoutDashboard }] },
  { section: "Foundation", items: [
    { label: "Colors", path: "/foundation/colors", icon: Palette },
    { label: "Typography", path: "/foundation/typography", icon: Type },
    { label: "Spacing", path: "/foundation/spacing", icon: Ruler },
  ]},
  { section: "Components", items: [
    { label: "Button", path: "/components/button", icon: MousePointerClick },
    { label: "Input", path: "/components/input", icon: TextCursorInput },
    { label: "Badge", path: "/components/badge", icon: Tag },
    { label: "Card", path: "/components/card", icon: SquareStack },
    { label: "Avatar", path: "/components/avatar", icon: CircleUser },
    { label: "Checkbox", path: "/components/checkbox", icon: CheckSquare },
  ]},
];

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const location = useLocation();
  return (
    <aside className="w-64 h-full bg-white border-r border-border flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <Layers2 size={14} className="text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm text-foreground">Design System</span>
            <span className="text-[10px] text-muted-foreground">v1.0.0</span>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden p-1 rounded hover:bg-muted text-muted-foreground">
            <X size={16} />
          </button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {NAV.map((group, gi) => (
          <div key={gi} className={gi > 0 ? "mt-5" : ""}>
            {group.section && (
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground px-2 mb-1.5">{group.section}</p>
            )}
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const isActive = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink to={item.path} onClick={onClose}
                      className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}>
                      <Icon size={14} className="shrink-0" />
                      <span className="flex-1">{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="px-4 py-3 border-t border-border shrink-0">
        <p className="text-[10px] text-muted-foreground">Built with React + Tailwind CSS</p>
      </div>
    </aside>
  );
}
