"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const findings = [
  "Geographic stereotyping in destination descriptions",
  "Cultural bias amplification across model families",
  "Quantitative fairness metrics vs. human audit alignment",
];

export function BiasHighlight() {
  return (
    <FadeIn>
      <section id="bias-research" className="scroll-mt-28">
        <div id="research" className="scroll-mt-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-400/80">
            T — Depth · Featured
          </p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
            Bias in AI-Generated Travel Narratives
          </h2>
        </div>

        <motion.article
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-violet-500/25 bg-gradient-to-br from-midnight-elevated via-midnight-surface to-midnight p-8 shadow-2xl shadow-violet-950/30 sm:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-base leading-relaxed text-zinc-400">
                A research-driven investigation into how large language models
                perceive and represent global cultures[cite: 14]. This study analyzes 
                500,000+ generated samples to characterize systematic asymmetries in 
                multilingual travel discourse through automated validation frameworks 
                and semantic analysis[cite: 14, 15].
              </p>

              <ul className="mt-6 space-y-3">
                {findings.map((finding) => (
                  <li
                    key={finding}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                    {finding} [cite: 14]
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {["NLP", "Data Pipelines", "Semantic Embeddings", "Bias Characterization"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-violet-300 ring-1 ring-violet-500/20"
                  >
                    {tag} [cite: 15]
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 lg:min-w-[180px]">
              <div className="rounded-xl border border-violet-500/20 bg-midnight/60 p-4 text-center">
                <p className="font-mono text-2xl font-light text-violet-300">
                  500k+
                </p>
                <p className="mt-1 text-xs text-zinc-500">Narratives analyzed [cite: 14]</p>
              </div>
              <div className="rounded-xl border border-violet-500/20 bg-midnight/60 p-4 text-center">
                <p className="font-mono text-2xl font-light text-violet-300">
                  12
                </p>
                <p className="mt-1 text-xs text-zinc-500">Bias dimensions [cite: 14]</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap gap-4 border-t border-violet-500/15 pt-6">
            <a
              href="/DSCI_602.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              Read paper →
            </a>
            <a
              href="#projects"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              View methodology
            </a>
          </div>
        </motion.article>
      </section>
    </FadeIn>
  );
}