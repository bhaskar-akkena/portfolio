export function Footer() {
  return (
    <footer className="border-t border-midnight-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
        <p className="text-xs text-zinc-700">
          Networks → Databases → Systems → Data → AI
        </p>
      </div>
    </footer>
  );
}
