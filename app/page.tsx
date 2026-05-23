import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern bg-[size:42px_42px] opacity-[0.08]" />
      <div className="pointer-events-none fixed left-[-8rem] top-[-8rem] -z-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none fixed right-[-8rem] top-[8rem] -z-10 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none fixed bottom-[-8rem] left-[30%] -z-10 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
