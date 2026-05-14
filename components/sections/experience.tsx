import { ExperienceItem } from "../ui/experience-item";
import { FadeIn } from "../ui/fade-in";
import { Section } from "../ui/section";

export function Experience() {
    return (
        <Section id="experience">
            <div className="max-w-4xl">

                <div className="mb-20">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                        Experience
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                        Building real-world applications across frontend, backend and infrastructure.
                    </h2>

                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                        Experience working on production applications, APIs, databases and deployments while collaborating directly with clients and product requirements.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Aries */}
                    <FadeIn>
                        <ExperienceItem
                            year="2024 — 2025"
                            title="Full Stack Developer · ARIES Grupo de Comunicación"
                            description="Development and maintenance of modern web applications across frontend and backend. Worked with React, Laravel, Inertia.js, Node.js, Express and SQL databases while managing deployments, domains and infrastructure through Plesk environments."
                            technologies={[
                                "JavaScript",
                                "MySQL",
                                "PHP/Laravel",
                                "Inertia.js",
                                "Plesk",
                                "React.js",
                                "Node.js",
                                "Express.js",
                                "Redux",
                                "Styled Components",
                            ]}
                        />
                    </FadeIn>

                    {/* Oxygen */}
                    <FadeIn>
                        <ExperienceItem
                            year="2024"
                            title="Junior Full Stack Developer · Oxygen Workspace"
                            description="Practical full stack training focused on MERN technologies, Laravel and TypeScript while developing real-world projects with code reviews and collaborative workflows."
                            technologies={[
                                "MongoDB",
                                "Express",
                                "React",
                                "Styled Components",
                                "Node.js",
                                "TypeScript",
                                "PHP",
                            ]}
                        />
                    </FadeIn>


                    {/* Crownet */}
                    <FadeIn>
                        <ExperienceItem
                            year="2022"
                            title="Software Developer Intern · Crownet Sistemas"
                            description="Worked on ERP web applications using .NET, JavaScript and SQL technologies, contributing to customizable dashboards and business management solutions."
                            technologies={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "MySQL",
                                ".NET",
                            ]}
                        />
                    </FadeIn>


                </div>
            </div>
        </Section>
    );
}


