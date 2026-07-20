import { Section } from "../ui/section";
import { ProjectCard } from "../ui/project-card";
import { FadeIn } from "../ui/fade-in";
import { projects } from "@/data/projects";

export function Projects() {

  return (
    <Section id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            Projects
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Showcasing my latest work and contributions.
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            A collection of projects that demonstrate my expertise in full-stack development,
            from e-commerce platforms to mobile applications and analytics dashboards.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <FadeIn  key={index}>
              <ProjectCard {...project} />
            </FadeIn>

          ))}
        </div>
      </div>
    </Section>
  );
}