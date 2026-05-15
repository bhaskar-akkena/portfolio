import type { Project } from "@/lib/types";

export const projects: Project[] = [
  /* --- PILLAR 1: AI RESEARCH --- */
  {
    id: "toxicity-optimization",
    title: "LLM Toxicity Optimization and Evaluation",
    description:
      "Engineered an automated evolutionary search loop to benchmark and mitigate toxicity in LLM outputs. Achieved a 37% reduction in mean toxicity scores by integrating Hugging Face Transformers with real-time scoring via the Perspective API.",
    category: "AI Research",
    tags: ["PyTorch", "Hugging Face", "Evolutionary Algorithms", "Perspective API"],
    featured: true,
  },
  {
    id: "bias-travel-narratives",
    title: "Multilingual Bias in AI Narratives",
    description:
      "A research-driven investigation into cultural asymmetries within multilingual travel discourse. Analyzed 500,000+ generated samples using GPT-4 and IndicBERT to characterize systematic bias in AI-generated travel narratives.",
    category: "AI Research",
    tags: ["NLP", "IndicBERT", "GPT-4", "Semantic Embeddings", "Bias Characterization"],
    featured: true,
  },

  /* --- PILLAR 2: DATA SCIENCE --- */
  {
    id: "apple-performance-forecast",
    title: "Predictive Analytics for Market Performance",
    description:
      "Developed a multi-modal forecasting system integrating Reddit sentiment analysis with financial indicators. Utilized Prophet time-series modeling to project revenue and stock trends through 2028, identifying strategic growth anchors across hardware ecosystems.",
    category: "Data Science",
    tags: ["Prophet", "Time-Series Forecasting", "Sentiment Analysis", "Financial Analytics"],
    featured: true,
  },
  {
    id: "reddit-lens",
    title: "RedditLens: High-Scale Sentiment Intelligence",
    description:
      "Built a data ingestion pipeline to analyze public discourse across diverse subreddits. Processes massive datasets using PRAW and NLP libraries to visualize cultural sentiment trends and community engagement patterns.",
    category: "Data Science",
    tags: ["Python", "NLP", "PRAW", "Data Visualization", "Matplotlib"],
    featured: true,
  },
  {
    id: "job-classification",
    title: "Fraudulent Job Posting Classifier",
    description:
      "Developed a predictive modeling system to detect fraudulent job listings globally. Achieved an 80% precision rate by implementing Random Forest and Gradient Descent algorithms with a focus on high-stakes feature engineering.",
    category: "Data Science",
    tags: ["scikit-learn", "Random Forest", "Feature Engineering", "Predictive Modeling"],
    featured: false,
  },

  /* --- PILLAR 3: SYSTEMS AND AUTOMATION --- */
  {
    id: "comet-commit-generator",
    title: "COMET: AI Commit Message Generator",
    description:
      "Developed a developer productivity tool using DeepSeek-coder-instruct to analyze code diffs and automate standard-compliant Git commit messages. Integrated a Python-based API with a VS Code extension to bridge software automation and LLMs.",
    category: "Systems and Automation",
    tags: ["Python", "DeepSeek LLM", "VS Code Extension", "Git Hooks"],
    featured: true,
  },
  {
    id: "linux-apm-tool",
    title: "Linux Application Performance Monitor",
    description:
      "Built a lightweight observability solution for Linux systems to collect and visualize process metrics in real time. Features Python-based dashboards that detect system anomalies and bottlenecks, reducing downtime by over 30%.",
    category: "Systems and Automation",
    tags: ["Python", "Linux Systems", "Dashboarding", "Anomaly Detection"],
    featured: false,
  },

  /* --- PILLAR 4: FULL-STACK AND DESIGN --- */
  {
    id: "tutor-scheduling-app",
    title: "RIT Tutor Scheduling Application",
    description:
      "Led the senior capstone project to design a scheduling platform that automated tutor hour tracking for RIT's GCCIS. Developed scalable Node.js APIs and optimized SQL database queries, reducing administrative workload by 50%.",
    category: "Full-Stack",
    tags: ["Node.js", "SQL", "Role-Based Access Control", "API Development"],
    featured: false,
  },
  {
    id: "club-froggy",
    title: "ClubFroggy: Multithreaded Java Messaging",
    description:
      "Architected a real-time messaging platform utilizing Java Socket programming. Engineered a multithreaded server-client architecture with a dynamic UI built using JavaFX and Swing to handle concurrent user connections.",
    category: "Full-Stack",
    tags: ["Java", "Networking", "Multithreading", "JavaFX"],
    featured: false,
  },
  {
    id: "visit-qatar-web",
    title: "Visit Qatar: Multimedia Travel Platform",
    description:
      "An interactive tourism platform developed at RIT to showcase regional culture. Built with a focus on semantic HTML5 and CSS3 layout architecture to deliver a high-fidelity travel guide experience.",
    category: "Full-Stack",
    tags: ["HTML5", "CSS3", "UI/UX Design", "Regional Tourism"],
    featured: false,
  },
];