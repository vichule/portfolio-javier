"use client";

interface ExperienceItemProps {
  year: string;
  title: string;
  description: string;
  technologies: string[];
}

export function ExperienceItem({
  year,
  title,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <div className="grid md:grid-cols-[140px_1fr] gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">

      <div>
        <p className="text-sm text-zinc-500">
          {year}
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}