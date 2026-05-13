import { Section } from "../ui/section";

export function Hero() {
    return (
        <Section id="hero">
            <div className="max-w-3xl">

                <div className="max-w-3xl">
                    <p className="text-sm text-zinc-500 mb-4">
                        Full Stack Developer
                    </p>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">                        Building modern web experiences with clean design and scalable architecture.
                    </h1>

                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        React, Laravel, Node.js and modern frontend experiences focused on performance, usability and elegant interfaces.
                    </p>
                </div>
            </div>
        </Section>
    );
}