import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "toxicity-control",
    title: "Evolutionary Search for Toxicity Control in LLMs",
    description:
      "Implemented an evolutionary optimization loop reducing mean toxicity scores by 37% using Sentence Transformers and Perspective API.",
    category: "AI Research",
    tags: ["Python", "Hugging Face", "PyTorch", "Evolutionary Algorithms"],
    featured: true,
  },
  {
    id: "bias-travel-narratives",
    title: "Bias in AI-Generated Travel Narratives",
    description:
      "Interrogated cultural bias and asymmetries in multilingual travel discourse across 500,000+ samples using GPT-4 and IndicBERT.",
    category: "AI Research",
    tags: ["NLP", "IndicBERT", "Data Pipelines", "Semantic Embeddings"],
    featured: true,
  },
  {
    id: "job-classification",
    title: "Fraudulent Job Posting Classification",
    description:
      "Developed a predictive model to identify fake job postings globally, achieving an 80% Precision rate using Random Forest and Gradient Descent.",
    category: "Data Science",
    tags: ["scikit-learn", "Logistic Regression", "Feature Engineering"],
    featured: false,
  },
];