import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { BackgroundBlobs } from "@/components/layout/background-blobs";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden page-background">

        <BackgroundBlobs />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />

      </main>
    </>
  );
}