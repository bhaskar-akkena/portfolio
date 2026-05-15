import type { ReactNode } from "react";

type TShapeLayoutProps = {
  breadth: ReactNode;
  depth: ReactNode;
};

export function TShapeLayout({ breadth, depth }: TShapeLayoutProps) {
  return (
    <div className="relative mx-auto max-w-6xl px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 right-6 top-0 hidden h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[calc(16rem+1.5rem)] top-0 hidden h-full w-px bg-gradient-to-b from-zinc-700/50 via-zinc-800/30 to-transparent lg:block"
      />

      <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">{breadth}</aside>
        <main className="min-w-0 space-y-24">{depth}</main>
      </div>
    </div>
  );
}
