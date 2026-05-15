"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { FadeIn } from "@/components/ui/FadeIn";

const phaseColors = {
  foundations: {
    dot: "bg-amber-400",
    ring: "ring-amber-400/30",
    label: "text-amber-400/90",
  },
  analytics: {
    dot: "bg-cyan-400",
    ring: "ring-cyan-400/30",
    label: "text-cyan-400/90",
  },
  research: {
    dot: "bg-violet-400",
    ring: "ring-violet-400/30",
    label: "text-violet-400/90",
  },
};

const phaseLabels = {
  foundations: "Foundations",
  analytics: "Data Science",
  research: "AI Research",
};

export function ExperienceTimeline() {
  return (
    <FadeIn>
      <section id="experience" className="scroll-mt-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Journey
        </p>
        <h2 className="mt-2 text-2xl font-medium text-zinc-100">Experience</h2>
        <p className="mt-2 max-w-xl text-sm text-zinc-500">
          From SysAdmin and analyst roles to data science and AI research.
        </p>

        <ol className="relative mt-10 space-y-0">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-500/40 via-cyan-500/40 to-violet-500/40"
          />

          {experience.map((entry, index) => {
            const colors = phaseColors[entry.phase];

            return (
              <motion.li
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                  <div className="relative z-10 mt-1.5 flex shrink-0 flex-col items-center">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className={`h-3.5 w-3.5 rounded-full ${colors.dot} ring-4 ${colors.ring}`}
                    />
                  </div>

                  <div className="min-w-0 flex-1 rounded-xl border border-midnight-border/80 bg-midnight-elevated/30 p-5 transition-colors hover:border-zinc-700">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider ${colors.label}`}
                      >
                        {phaseLabels[entry.phase]}
                      </span>
                      <time className="font-mono text-xs text-zinc-600">
                        {entry.period}
                      </time>
                    </div>

                    <h3 className="mt-2 text-lg font-medium text-zinc-100">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{entry.organization}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {entry.description}
                    </p>
                  </div>
              </motion.li>
            );
          })}
        </ol>
      </section>
    </FadeIn>
  );
}
