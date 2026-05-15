export type ProjectCategory =
  | "AI Research"
  | "Data Science"
  | "Systems and Automation"
  | "Full-Stack";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export type ExperienceEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  phase: "foundations" | "analytics" | "research";
};

export type BreadthPillar = {
  id: string;
  label: string;
  items: string[];
  accent: string;
};
