import { useState } from "react";
import {
  BarChart3,
  Bookmark,
  BriefcaseBusiness,
  FileText,
  Image as ImageIcon,
  MessageCircle,
  MoreHorizontal,
  Radio,
  Repeat2,
  ThumbsUp,
  Video,
  Zap,
  BadgeCheck,
  Globe,
} from "lucide-react";
import { Avatar } from "./Avatar";
import { posts, profile, type Post } from "./data";
import { cn } from "@/lib/utils";

const tabs = ["For you", "Following", "Jobs", "Mentorship"];

export function Feed() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col gap-4">
      <ProfileCompletion />
      <Composer />

      <div className="panel flex items-center gap-1 p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "relative flex-1 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-300",
              tab === t
                ? "nav-active"
                : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function ProfileCompletion() {
  return (
    <section className="panel lift constellation relative overflow-hidden p-4 sm:p-5">
      <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-violet/15 blur-3xl" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/12 text-primary-soft">
          <Zap className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <h3 className="text-sm font-semibold tracking-tight">Complete your profile</h3>
            <span className="text-xl font-semibold text-gradient">{profile.completion}%</span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Add skills &amp; experience to get discovered by recruiters and alumni.
          </p>
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-surface-3">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-cyan transition-all duration-700"
              style={{ width: `${profile.completion}%` }}
            />
          </div>
        </div>
        <button className="shrink-0 rounded-lg bg-gradient-to-r from-primary to-primary-soft px-4 py-2 text-xs font-semibold text-primary-foreground transition-all duration-300 hover:shadow-glow">
          Complete Now
        </button>
      </div>
    </section>
  );
}

const composerActions = [
  { label: "Photo", icon: ImageIcon, tone: "text-cyan" },
  { label: "Video", icon: Video, tone: "text-violet" },
  { label: "Article", icon: FileText, tone: "text-primary-soft" },
  { label: "Job Post", icon: BriefcaseBusiness, tone: "text-warning" },
  { label: "Poll", icon: BarChart3, tone: "text-success" },
];

function Composer() {
  return (
    <section className="panel p-4">
      <div className="flex items-center gap-3">
        <Avatar initials={profile.initials} size="md" />
        <input
          placeholder="Share an update, achievement, or opportunity…"
          className="glass h-11 w-full rounded-xl px-4 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary/40 focus:shadow-glow"
        />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1 border-t border-border pt-3">
        {composerActions.map(({ label, icon: Icon, tone }) => (
          <button
            key={label}
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <Icon className={cn("h-4 w-4", tone)} strokeWidth={1.7} />
            {label}
          </button>
        ))}
        <button className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-destructive/30 px-2.5 py-1.5 text-xs font-medium text-destructive transition-colors hover:bg-destructive/10">
          <Radio className="h-3.5 w-3.5" />
          Go Live
        </button>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="panel lift overflow-hidden">
      <div className="flex items-start gap-3 p-4">
        <Avatar initials={post.initials} size="lg" accent={post.accent} ring />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="text-sm font-semibold tracking-tight">{post.author}</h3>
            {post.verified && (
              <span className="inline-flex items-center gap-1 rounded-md bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium text-primary-soft">
                <BadgeCheck className="h-3 w-3" /> Verified
              </span>
            )}
            <span className="rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
              {post.batch}
            </span>
          </div>
          <p className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <span>{post.role}</span>
            <span>·</span>
            <span>{post.time} ago</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Globe className="h-3 w-3" /> {post.visibility}
            </span>
          </p>
        </div>
        <button className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="px-4 pb-3">
        <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
          {post.body.map((chunk, i) =>
            chunk.strong ? (
              <strong key={i} className="font-semibold text-foreground">
                {chunk.text}
              </strong>
            ) : (
              <span key={i}>{chunk.text}</span>
            ),
          )}
        </p>

        {post.banner && (
          <div className="constellation grid-veil mt-3 flex h-44 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-surface-2 to-surface text-xs text-muted-foreground">
            <span className="relative">{post.banner}</span>
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.hashtags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface-2/60 px-2 py-0.5 text-[11px] text-primary-soft transition-colors hover:border-primary/35"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
        <span>
          {post.likes + (liked ? 1 : 0)} reactions · {post.comments} comments
        </span>
        <span>
          {post.reposts} reposts · {post.saves + (saved ? 1 : 0)} saves
        </span>
      </div>

      <div className="flex items-center gap-1 border-t border-border px-2 py-1.5">
        <Action
          icon={ThumbsUp}
          label={String(post.likes + (liked ? 1 : 0))}
          active={liked}
          onClick={() => setLiked((v) => !v)}
        />
        <Action icon={MessageCircle} label="Comment" />
        <Action icon={Repeat2} label="Repost" />
        <Action
          icon={Bookmark}
          label={saved ? "Saved" : "Save"}
          active={saved}
          onClick={() => setSaved((v) => !v)}
          className="ml-auto"
        />
      </div>
    </article>
  );
}

function Action({
  icon: Icon,
  label,
  active,
  onClick,
  className,
}: {
  icon: typeof ThumbsUp;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 active:scale-95",
        active
          ? "bg-primary/15 text-primary-soft"
          : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
        className,
      )}
    >
      <Icon className={cn("h-4 w-4", active && "fill-current")} strokeWidth={1.7} />
      {label}
    </button>
  );
}
