import { Navigation } from "@/components/ui/Navigation";
import { MotionPreference } from "@/components/ui/MotionPreference";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { ScrollController } from "@/components/ui/ScrollController";
import { CanvasLoader as ExperienceCanvas } from "@/components/canvas/CanvasLoader";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navigation />
      <MotionPreference />
      <ScrollController />
      <ExperienceCanvas />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} {portfolio.name}
        </span>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </>
  );
}
