import { Section } from "../ui/section";

export function Education() {
  return (
    <Section id="education">
      <div className="max-w-4xl">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
          Education
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
          Technical background and continuous learning.
        </h2>

        <div className="space-y-8">
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Higher Degree in Multiplatform Application Development
                </h3>

                <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                  CEV — Escuela Superior de Nuevas Tecnologías
                </p>

                <p className="text-sm text-zinc-500 mt-3">
                 HTML · CSS · JavaScript · PHP · MySQL · Java · Android Studio · Unity · Laravel · 3D Modeling · UI/UX Design
                </p>
              </div>

              <span className="text-sm text-zinc-500 whitespace-nowrap">
                2020 — 2022
              </span>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">
                  MERN Full Stack Specialization
                </h3>

                <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                  OXYGEN Academy & Recruiting
                </p>

                <p className="text-sm text-zinc-500 mt-3">
                  React · Redux · Node.js · Express · MongoDB · AWS
                </p>
              </div>

              <span className="text-sm text-zinc-500 whitespace-nowrap">
                2023 — 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}