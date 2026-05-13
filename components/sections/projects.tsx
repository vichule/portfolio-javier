import { Section } from "../ui/section";

export function Projects() {
    return (
        <Section id="projects">
            <div className="max-w-3xl">
                <div className="max-w-3xl">
                    <p className="text-sm text-zinc-500 mb-4">
                        Projects
                    </p>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">                        Showcasing my latest work and contributions.
                    </h1>

                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        Showcasing my latest work and contributions with clean design and scalable architecture.
                    </p>
                </div>
            </div>
        </Section>
    );
}