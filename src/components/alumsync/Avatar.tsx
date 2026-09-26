import { cn } from "@/lib/utils";

const accentMap: Record<string, string> = {
  primary: "from-primary/80 to-violet/60",
  violet: "from-violet/80 to-primary/50",
  cyan: "from-cyan/70 to-primary/50",
  success: "from-success/70 to-cyan/50",
  warning: "from-warning/70 to-destructive/50",
};

export function Avatar({
  initials,
  size = "md",
  accent = "primary",
  ring = false,
  className,
}: {
  initials: string;
  size?: "sm" | "md" | "lg" | "xl";
  accent?: keyof typeof accentMap | string;
  ring?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "h-8 w-8 text-[11px]",
    md: "h-10 w-10 text-xs",
    lg: "h-12 w-12 text-sm",
    xl: "h-16 w-16 text-lg",
  } as const;

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-semibold tracking-wide text-foreground transition-transform duration-300 hover:scale-105",
        accentMap[accent] ?? accentMap["primary"],
        sizes[size],
        ring && "ring-2 ring-primary/40 ring-offset-2 ring-offset-background",
        className,
      )}
    >
      {initials}
    </div>
  );
}
