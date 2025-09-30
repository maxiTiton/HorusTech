import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Stats />
      <About />
      <CTA />
      <Contact />
    </div>
  );
}
