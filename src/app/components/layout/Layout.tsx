import React, { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <div className={`fixed lg:static inset-y-0 left-0 z-30 flex-shrink-0 transform transition-transform duration-200 ease-out lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <header className="lg:hidden flex items-center gap-3 px-4 py-3 border-b border-border bg-background shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="p-1.5 rounded-md hover:bg-muted text-muted-foreground" aria-label="Open navigation">
            <Menu size={18} />
          </button>
          <span className="text-sm text-foreground">Design System</span>
        </header>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
