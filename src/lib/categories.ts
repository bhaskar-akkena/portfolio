import type { ProjectCategory } from "./types";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI Research",
  "Data Science",
  "Systems & DevOps",
  "Full-Stack",
];

export const categoryStyles: Record<
  ProjectCategory,
  { accent: string; border: string; glow: string; badge: string }
> = {
  "AI Research": {
    accent: "text-violet-400",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/10",
    badge: "bg-violet-500/15 text-violet-300 ring-violet-500/25",
  },
  "Data Science": {
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/10",
    badge: "bg-cyan-500/15 text-cyan-300 ring-cyan-500/25",
  },
  "Systems & DevOps": {
    accent: "text-amber-400",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/10",
    badge: "bg-amber-500/15 text-amber-300 ring-amber-500/25",
  },
  "Full-Stack": {
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/10",
    badge: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/25",
  },
};
