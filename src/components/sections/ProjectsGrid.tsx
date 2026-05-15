"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES, categoryStyles } from "@/lib/categories";
import type { ProjectCategory } from "@/lib/types";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { FadeIn } from "@/components/ui/FadeIn";

type FilterValue = ProjectCategory | "All";

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const filters: FilterValue[] = ["All", ...PROJECT_CATEGORIES];

  return (
    <FadeIn>
      <section id="projects" className="scroll-mt-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Portfolio
        </p>
        <h2 className="mt-2 text-2xl font-medium text-zinc-100">Projects</h2>
        <p className="mt-2 max-w-xl text-sm text-zinc-500">
          A filterable gallery across research, data, systems, and full-stack
          work.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const accent =
              filter !== "All"
                ? categoryStyles[filter as ProjectCategory].accent
                : "text-zinc-300";

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-zinc-100 text-midnight"
                    : "bg-midnight-elevated text-zinc-400 ring-1 ring-midnight-border hover:text-zinc-200"
                }`}
              >
                <span className={isActive ? "" : accent}>{filter}</span>
              </button>
            );
          })}
        </div>

        <motion.ul
          layout
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const style = categoryStyles[project.category];

              return (
                <motion.li
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <article
                    className={`group flex h-full flex-col rounded-xl border bg-midnight-elevated/40 p-5 transition-all hover:bg-midnight-elevated/70 ${style.border} hover:shadow-lg ${style.glow}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-medium text-zinc-100 transition-colors group-hover:text-zinc-50">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="shrink-0 rounded bg-violet-500/20 px-2 py-0.5 font-mono text-[10px] uppercase text-violet-300">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <CategoryBadge category={project.category} />
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] text-zinc-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.href && (
                      <a
                        href={project.href}
                        className={`mt-4 text-xs font-medium ${style.accent} opacity-0 transition-opacity group-hover:opacity-100`}
                      >
                        Learn more →
                      </a>
                    )}
                  </article>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </section>
    </FadeIn>
  );
}
