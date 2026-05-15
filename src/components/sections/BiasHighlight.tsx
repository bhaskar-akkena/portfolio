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
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm leading-relaxed text-zinc-400">
                An empirical investigation into how large language models
                reproduce and amplify stereotypes when generating travel content.
                This research combines automated bias detection, geographic
                fairness scoring, and structured human evaluation to surface
                harms that standard benchmarks often miss.
              </p>

              <ul className="mt-6 space-y-3">
                {findings.map((finding, i) => (
                  <motion.li
                    key={finding}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {finding}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {["NLP", "Fairness", "LLM Evaluation", "HCI"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-500/10 px-3 py-1 font-mono text-xs text-violet-300 ring-1 ring-violet-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 lg:min-w-[180px]">
              <div className="rounded-xl border border-violet-500/20 bg-midnight/60 p-4 text-center">
                <p className="font-mono text-2xl font-light text-violet-300">
                  4+
                </p>
                <p className="mt-1 text-xs text-zinc-500">Model families</p>
              </div>
              <div className="rounded-xl border border-violet-500/20 bg-midnight/60 p-4 text-center">
                <p className="font-mono text-2xl font-light text-violet-300">
                  12
                </p>
                <p className="mt-1 text-xs text-zinc-500">Bias dimensions</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap gap-4 border-t border-violet-500/15 pt-6">
            <a
              href="#"
              className="text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              Read paper →
            </a>
            <a
              href="#projects"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              Related projects
            </a>
          </div>
        </motion.article>
      </section>
    </FadeIn>
  );
}
