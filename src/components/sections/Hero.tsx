"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden border-b border-midnight-border/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-midnight)_85%)]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2 text-5xl font-light tracking-tight text-zinc-50 sm:text-6xl md:text-7xl"
        >
          Bhaskar Akkena
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-2xl font-light tracking-tight text-zinc-400 sm:text-3xl md:text-4xl"
        >
          AI Researcher <span className="text-zinc-500"> and Data Scientist</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          I am a Data Scientist and AI Engineer with extensive experience in systems administration, networking, and task automation. This unique combination of skills allows me to bridge the gap between high-level AI research and the complex engineering required to make it work in the real world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#research"
            className="rounded-full bg-violet-600/90 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
          >
            Featured Research
          </a>
          <a
            href="#projects"
            className="rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}