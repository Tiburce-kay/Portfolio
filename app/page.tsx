// app/page.tsx
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectPage from "@/components/ProjectPage";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#0b0a20] via-[#1f1e3a] to-[#0b0a20]">
      <Hero />
      <About />
      <ProjectPage />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

