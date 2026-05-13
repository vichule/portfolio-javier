import { AboutCard } from "../ui/about-card";
import { FadeIn } from "../ui/fade-in";
import { Section } from "../ui/section";

export function About() {
    return (
        <Section id="about">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

                <div className="space-y-8 ">
                    <p className="text-sm text-zinc-500 mb-4">
                        About me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-relaxed mb-8">
                        Full stack development focused on modern products and scalable architecture.
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Over the last few years I've worked building and maintaining real-world web applications, handling everything from frontend interfaces to backend architecture, deployments and database management.
                    </p>

                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        I enjoy creating modern user experiences while keeping applications scalable, maintainable and production-ready.
                    </p>

                </div>
                <div className="grid gap-4">
                    <FadeIn>
                        <AboutCard eyebrow="Frontend & Architecture" title="Full Stack Development" description="Building scalable applications with React, Next.js, Laravel and modern frontend ecosystems focused on performance and maintainability" />
                    </FadeIn>
                    <FadeIn>
                        <AboutCard eyebrow="Backend & Infrastructure" title="Backend & Infrastructure" description="Experience designing REST APIs, managing SQL databases, deployments, domains and production environments using Plesk and modern backend tooling." />
                    </FadeIn>
                    <FadeIn>
                        <AboutCard eyebrow="Product & Collaboration" title="Product Mindset" description="Translating business requirements into scalable solutions while working closely with clients, teams and real-world product needs" />
                    </FadeIn>
                </div>
            </div>

        </Section>
    );
}