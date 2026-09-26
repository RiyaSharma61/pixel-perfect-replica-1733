import {
  Bell,
  Briefcase,
  CalendarDays,
  Globe2,
  Handshake,
  Home,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Avatar } from "./Avatar";
import { navItems, profile } from "./data";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  home: Home,
  user: User,
  directory: Users,
  jobs: Briefcase,
  messages: MessageSquare,
  mentorship: Handshake,
  events: CalendarDays,
  alerts: Bell,
  map: Globe2,
  settings: Settings,
};

export function Sidebar({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (label: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <section className="panel constellation overflow-hidden">
        <div className="grid-veil relative h-20 bg-gradient-to-br from-primary/30 via-violet/20 to-transparent" />
        <div className="relative px-4 pb-4">
          <div className="-mt-8 mb-3">
            <Avatar initials={profile.initials} size="xl" ring />
          </div>
          <h2 className="text-[15px] font-semibold tracking-tight">{profile.name}</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">{profile.headline}</p>
          <p className="mt-1 text-xs font-medium text-primary-soft">{profile.batch}</p>

          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-3">
            <Stat value={profile.connections} label="Connections" />
            <Stat value={profile.profileViews} label="Profile Views" />
          </div>
        </div>
      </section>

      <nav className="panel p-2">
        <p className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Navigate
        </p>
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = icons[item.icon] ?? Home;
            const isActive = active === item.label;
            return (
              <li key={item.label}>
                <button
                  onClick={() => onSelect(item.label)}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-200",
                    isActive
                      ? "nav-active font-medium"
                      : "text-muted-foreground hover:translate-x-0.5 hover:bg-surface-2 hover:text-foreground",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive ? "text-primary-soft" : "group-hover:text-primary-soft",
                    )}
                    strokeWidth={1.7}
                  />
                  <span className="truncate">{item.label}</span>
                  {item.badge ? (
                    <span className="ml-auto rounded-md bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary-soft">
                      {item.badge}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-lg px-2 py-1 text-center transition-colors hover:bg-surface-2">
      <p className="text-lg font-semibold text-primary-soft">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}
