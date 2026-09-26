import { ArrowUpRight, Plus, TrendingUp } from "lucide-react";
import { Avatar } from "./Avatar";
import { events, onlineCount, onlineNow, suggestions, trending } from "./data";

export function RightRail() {
  return (
    <div className="flex flex-col gap-4">
      <section className="panel flex items-center gap-3 p-3">
        <span className="pulse-dot h-2 w-2 rounded-full bg-success" />
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{onlineCount} alumni</span> online right now
        </p>
        <div className="ml-auto flex -space-x-2">
          {onlineNow.slice(0, 4).map((i, idx) => (
            <Avatar
              key={i + idx}
              initials={i}
              size="sm"
              accent={["primary", "violet", "cyan", "success"][idx % 4]}
              className="h-7 w-7 border border-background text-[10px]"
            />
          ))}
        </div>
      </section>

      <Card title="People You May Know" action="See all">
        <ul className="space-y-1">
          {suggestions.map((p) => (
            <li
              key={p.name}
              className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-surface-2"
            >
              <Avatar initials={p.initials} size="md" accent={p.accent} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium">{p.name}</p>
                <p className="truncate text-[11px] text-muted-foreground">{p.role}</p>
              </div>
              <button className="inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-[11px] font-medium text-primary-soft transition-all duration-200 hover:border-primary/45 hover:bg-primary/10">
                <Plus className="h-3 w-3" /> Add
              </button>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Upcoming Events" action="See all">
        <ul className="space-y-1">
          {events.map((e) => (
            <li
              key={e.title}
              className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-surface-2"
            >
              <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                <span className="text-sm font-semibold leading-none text-primary-soft">{e.day}</span>
                <span className="mt-0.5 text-[9px] font-semibold tracking-wider text-muted-foreground">
                  {e.month}
                </span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-medium">{e.title}</p>
                <p className="truncate text-[11px] text-muted-foreground">{e.meta}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Trending on AlumSync">
        <ul className="space-y-1">
          {trending.map((t, i) => (
            <li
              key={t.tag}
              className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-surface-2"
            >
              <span className="w-4 text-center text-xs font-semibold text-muted-foreground">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-primary-soft">{t.tag}</p>
                <p className="text-[11px] text-muted-foreground">{t.posts}</p>
              </div>
              <TrendingUp className="h-3.5 w-3.5 text-success" />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

function Card({
  title,
  action,
  children,
}: {
  title: string;
  action?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="panel lift p-3">
      <div className="flex items-center justify-between px-1 pb-2">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {title}
        </h3>
        {action && (
          <button className="inline-flex items-center gap-0.5 text-[11px] font-medium text-primary-soft transition-colors hover:text-foreground">
            {action} <ArrowUpRight className="h-3 w-3" />
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
