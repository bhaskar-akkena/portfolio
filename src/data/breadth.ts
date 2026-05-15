import type { BreadthPillar } from "@/lib/types";

export const breadthPillars: BreadthPillar[] = [
  {
    id: "ai-research",
    label: "AI Research",
    items: [
      "Large Language Model Evaluation", // Broad skill from your LLM work
      "Algorithmic Fairness and Bias",   // Domain expertise from travel research
      "Natural Language Processing",     // Core research field
      "Safety and Toxicity Control"      // Niche specialization
    ],
    accent: "text-violet-400/90",
  },
  {
    id: "data-science",
    label: "Data Science and Machine Learning",
    items: [
      "Deep Learning Frameworks",        // Covers PyTorch, TensorFlow, Keras
      "Statistical Analysis and R",      // Highlights mathematical rigor
      "Predictive Modeling",             // General capability from your projects
      "Advanced Data Visualization"      // Proficiency in Plotly and Matplotlib
    ],
    accent: "text-cyan-400/90",
  },
  {
    id: "core-engineering",
    label: "Core Engineering and Databases",
    items: [
      "Java and JavaScript",             // Software development foundations
      "SQL and Relational Design",       // Database architecture
      "Graph and NoSQL Databases",       // Specialized data storage
      "Full Stack Development"           // End to end application building
    ],
    accent: "text-amber-400/90",
  },
  {
    id: "infra-devops",
    label: "Systems and Infrastructure",
    items: [
      "Cloud Architecture",              // AWS and Google Cloud skills
      "Container Orchestration",         // Kubernetes and Docker expertise
      "Enterprise System Management",    // Active Directory and VMware work
      "Linux and Task Automation"        // Bash and Python scripting roots
    ],
    accent: "text-emerald-400/90",
  },
];