import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "exp-sysadmin",
    period: "Jan 2023 – May 2024",
    title: "System Administrator",
    organization: "Saunders College of Business",
    description:
      "Managed 50+ enterprise systems, migrated Docker workloads to Kubernetes, and implemented Zabbix monitoring to reduce downtime by 25%.",
    phase: "foundations",
  },
  {
    id: "exp-ta",
    period: "Aug 2022 – Dec 2022, Jan 2025 – Dec 2025",
    title: "Graduate Teaching Assistant",
    organization: "Rochester Institute of Technology",
    description:
      "Mentored 150+ students in task automation and analysis using Python and Bash while managing weekly lab sessions and code reviews for advanced computing courses.",
    phase: "analytics",
  },
  {
    id: "exp-research",
    period: "2024 – Present",
    title: "AI Researcher & MS Data Science",
    organization: "RIT (Master's Student)",
    description:
      "Researching toxicity control and cultural bias in LLMs while maintaining a 3.6 GPA in Data Science.",
    phase: "research",
  },
];