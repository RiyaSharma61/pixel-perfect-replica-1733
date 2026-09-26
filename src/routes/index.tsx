import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { TopBar } from "@/components/alumsync/TopBar";
import { Sidebar } from "@/components/alumsync/Sidebar";
import { Feed } from "@/components/alumsync/Feed";
import { RightRail } from "@/components/alumsync/RightRail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlumSync — Alumni Network, Mentorship & Careers" },
      {
        name: "description",
        content:
          "AlumSync is the alumni intelligence platform for networking, mentorship, referrals, jobs and reunions — all in one premium dark workspace.",
      },
      { property: "og:title", content: "AlumSync — Alumni Network, Mentorship & Careers" },
      {
        property: "og:description",
        content:
          "Connect with alumni, find referrals and mentors, and never miss a reunion on AlumSync.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const [active, setActive] = useState("Home Feed");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 grid-veil opacity-40" />
      <div className="pointer-events-none fixed -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none fixed -bottom-40 right-10 h-96 w-96 rounded-full bg-violet/10 blur-[120px]" />

      <div className="relative">
        <TopBar onToggleNav={() => setNavOpen((v) => !v)} />

        <main className="mx-auto grid max-w-[1560px] grid-cols-1 gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[264px_minmax(0,1fr)] xl:grid-cols-[264px_minmax(0,1fr)_320px]">
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <Sidebar active={active} onSelect={setActive} />
            </div>
          </aside>

          <section className="min-w-0">
            <Feed />
          </section>

          <aside className="hidden xl:block">
            <div className="sticky top-20">
              <RightRail />
            </div>
          </aside>

          <aside className="xl:hidden">
            <RightRail />
          </aside>
        </main>
      </div>

      {navOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close navigation"
            onClick={() => setNavOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <div className="glass absolute left-0 top-0 h-full w-[280px] overflow-y-auto p-3">
            <button
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation"
              className="mb-2 ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <Sidebar
              active={active}
              onSelect={(l) => {
                setActive(l);
                setNavOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
