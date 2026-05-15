import { breadthPillars } from "@/data/breadth";
import { FadeIn } from "@/components/ui/FadeIn";

export function BreadthPillars() {
  return (
    <FadeIn>
      <section aria-label="Foundational breadth">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          T — Breadth
        </p>
        <h2 className="mt-2 text-lg font-medium text-zinc-200">
          CS Foundations
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          The horizontal bar — broad expertise across infrastructure and
          computer science fundamentals.
        </p>

        <ul className="mt-8 space-y-6">
          {breadthPillars.map((pillar, index) => (
            <FadeIn key={pillar.id} delay={index * 0.08}>
              <li className="group rounded-lg border border-midnight-border/80 bg-midnight-elevated/50 p-4 transition-colors hover:border-zinc-700">
                <h3 className={`text-sm font-medium ${pillar.accent}`}>
                  {pillar.label}
                </h3>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="rounded bg-midnight-surface px-2 py-0.5 font-mono text-[10px] text-zinc-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </FadeIn>
  );
}
