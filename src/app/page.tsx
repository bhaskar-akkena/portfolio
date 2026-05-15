import { Header } from "@/components/layout/Header";
import { TShapeLayout } from "@/components/layout/TShapeLayout";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BreadthPillars } from "@/components/sections/BreadthPillars";
import { BiasHighlight } from "@/components/sections/BiasHighlight";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <div className="py-20">
        <TShapeLayout
          breadth={<BreadthPillars />}
          depth={
            <>
              <BiasHighlight />
              <ProjectsGrid />
              <ExperienceTimeline />
              <Contact />
            </>
          }
        />
      </div>

      <Footer />
    </>
  );
}
