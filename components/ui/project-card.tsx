import { Project } from "@/types/project";
import Image from "next/image";

type ProjectCardProps = Project;

export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  stack,
  links,
  reverse = false,
  imagePosition = "center",
}: ProjectCardProps) {
  return (
    <div className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Image  */}
      <div className={`relative ${reverse ? 'lg:col-start-2' : ''}`}>
        <div className="
          relative overflow-hidden rounded-2xl
          bg-zinc-100 dark:bg-zinc-800
          transition-all duration-500
          group-hover:shadow-xl
          dark:group-hover:shadow-2xl
          aspect-[16/10]
        ">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectPosition: imagePosition }}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.10]
              "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Content  */}
      <div className={`space-y-6 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h3>
          <div className="flex gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm font-medium"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            >
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}