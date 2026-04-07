import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen grid-pattern pt-32 md:pt-40 overflow-x-clip bg-surface">
      <Navbar />


      {/* Atmospheric Bleeds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}
