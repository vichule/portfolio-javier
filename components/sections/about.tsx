import { Section } from "../ui/section";

export function About() {
    return (
        <Section id="about">
            <div className="max-w-3xl">
                <div className="max-w-3xl">
                    <p className="text-sm text-zinc-500 mb-4">
                        About me
                    </p>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">                        about me and my experience building modern web applications with clean design and scalable architecture.
                    </h1>

                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        React, Laravel, Node.js and modern frontend experiences focused on performance, usability and elegant interfaces.
                    </p>
                </div>
            </div>
        </Section>
    );
}