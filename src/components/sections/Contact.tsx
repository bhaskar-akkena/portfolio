import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <FadeIn>
      <section id="contact" className="scroll-mt-28 border-t border-midnight-border/50 pt-16 pb-32">
        <h2 className="text-xl font-medium text-zinc-200">Get in touch</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Open to research collaborations, engineering roles, and consulting.
        </p>
        
        <div className="mt-6 space-y-6">
          {/* Row 1: Contact and Social Links */}
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="mailto:bsa3464@rit.edu"
              className="text-sm text-violet-300 transition-colors hover:text-violet-200"
            >
              bsa3464@rit.edu
            </a>
            <a
              href="https://github.com/akkena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akkena/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              LinkedIn
            </a>
          </div>

          {/* Row 2: Primary Action */}
          <div>
            <a
              href="/Bhaskar_Akkena_Resume.pdf"
              download
              className="inline-flex items-center rounded-full bg-zinc-800/50 px-5 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-zinc-700 border border-zinc-700/50 hover:border-zinc-600"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}