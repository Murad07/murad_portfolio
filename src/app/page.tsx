import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen grid-pattern pt-32 md:pt-40 pb-20 overflow-hidden bg-surface">
      <Navbar />


      {/* Atmospheric Bleeds */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Hero />
      <About />
      <Skills />
      <Experience />

      <Footer />
    </main>
  );
}
