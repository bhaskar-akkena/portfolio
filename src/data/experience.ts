import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "exp-research",
    period: "2024 – Present",
    title: "AI Researcher and Data Scientist",
    organization: "Rochester Institute of Technology",
    description:
      "Developing high-throughput data pipelines and automated validation frameworks to quantify discourse patterns across large-scale language models. Leveraged a 500,000-sample multilingual corpus and cross-model semantic analysis to engineer robust mitigation strategies for systematic asymmetries in AI-generated travel data.",
    phase: "research",
  },
  {
    id: "exp-ta",
    period: "Aug 2022 – Dec 2022, Jan 2025 – Dec 2025",
    title: "Graduate Teaching Assistant",
    organization: "Rochester Institute of Technology",
    description:
      "Mentoring 150+ students in advanced computing and task automation. Conducting intensive code reviews and managing laboratory sessions focused on Python-based data analysis and Linux/Bash shell scripting to improve student engineering efficiency.",
    phase: "analytics",
  },
  {
    id: "exp-sysadmin",
    period: "May 2023 – May 2024",
    title: "System Administrator",
    organization: "Saunders College of Business",
    description:
      "Managed 50+ enterprise systems and virtualized infrastructure. Migrated high-availability Docker workloads to Kubernetes clusters and implemented Zabbix-based proactive monitoring, reducing critical system downtime by 25% across the college's data center.",
    phase: "foundations",
  },
  {
    id: "exp-it-analyst",
    period: "Jan 2023 – May 2023",
    title: "IT Support Analyst",
    organization: "Saunders College of Business",
    description:
      "Provided enterprise-level technical support for hardware and software systems. Optimized imaging processes and resolved complex networking issues for faculty and staff, ensuring seamless integration within a Macintosh and Windows hybrid environment.",
    phase: "foundations",
  },
];