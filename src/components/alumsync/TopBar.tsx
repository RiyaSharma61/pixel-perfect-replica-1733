import { Bell, Menu, MoonStar, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { profile } from "./data";

export function TopBar({ onToggleNav }: { onToggleNav: () => void }) {
  const [focused, setFocused] = useState(false);

  return (
    <header className="glass sticky top-0 z-40 border-x-0 border-t-0">
      <div className="mx-auto flex h-16 max-w-[1560px] items-center gap-3 px-4 sm:px-6">
        <button
          onClick={onToggleNav}
          aria-label="Toggle navigation"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground lg:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>

        <a href="/" className="flex items-center gap-2.5">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-violet text-sm font-bold text-primary-foreground shadow-glow">
            AS
          </span>
          <span className="text-[17px] font-semibold tracking-tight">
            Alum<span className="text-gradient">Sync</span>
          </span>
        </a>

        <div className="mx-auto hidden w-full max-w-xl md:block">
          <div
            className={`glass flex h-10 items-center gap-2.5 rounded-xl px-3 transition-all duration-300 ${
              focused
                ? "border-primary/40 shadow-glow"
                : "hover:border-border-strong"
            }`}
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search alumni, companies, events…"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground sm:block">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="hidden items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            Intelligence
          </button>
          <button
            aria-label="Alerts"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary" />
          </button>
          <button
            aria-label="Theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
          >
            <MoonStar className="h-4 w-4" />
          </button>
          <Avatar initials={profile.initials} size="sm" />
        </div>
      </div>
    </header>
  );
}
