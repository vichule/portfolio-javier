"use client";

import { Section } from "../ui/section";
import { ButtonLink } from "../ui/styled-buttons";
import {
    Code2,
    Database,
    ExternalLink,
    Rocket,
    Smartphone,
    Workflow,
    Zap,
} from "lucide-react";

interface StackBadge {
    name: string;
    icon: React.ReactNode;
}

export function Hero() {
    const stackBadges: StackBadge[] = [
        { name: "React", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Node.js", icon: <Rocket className="w-4 h-4" /> },
        { name: "Express", icon: <Zap className="w-4 h-4" /> },
        { name: "Next.js", icon: <Workflow className="w-4 h-4" /> },
        { name: "Laravel", icon: <ExternalLink className="w-4 h-4" /> },
        { name: "PHP", icon: <Code2 className="w-4 h-4" /> },
        { name: "MySQL", icon: <Database className="w-4 h-4" /> },
    ];

    return (
        <Section id="hero">
             <div className="max-w-5xl">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                        Full Stack Developer
                    </p>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
                        Building modern web experiences with clean design and scalable architecture.
                    </h1>

                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
                        React, Laravel, Node.js and modern frontend experiences focused on performance, usability and elegant interfaces.
                    </p>

                    <div className="flex gap-4 mb-12">
                        <ButtonLink href="#projects">View projects</ButtonLink>
                        <ButtonLink href="#contact" variant="secondary">
                            Contact me
                        </ButtonLink>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {stackBadges.map((badge) => (
                            <div
                                key={badge.name}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors "
                            >
                                {badge.icon}
                                <span className="text-sm font-medium">{badge.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
        </Section>
    );
}