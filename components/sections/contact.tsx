import { Section } from "../ui/section";
import { SocialButton } from "../ui/styled-buttons";
import { GithubIcon, LinkedinIcon } from "../ui/styled-icons";
import { Download, Mail } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact">
            <div className="
                card-surface
                relative overflow-hidden
                p-10 md:p-14
                rounded-[32px]
            ">

                {/* glow */}
                <div className="
                    absolute
                    top-0 right-0
                    w-[320px] h-[320px]
                    bg-sky-500/10
                    blur-3xl
                    rounded-full
                    pointer-events-none
                " />
                <div className="
                    absolute
                    bottom-[-120px] left-[-80px]
                    w-[240px] h-[240px]
                    bg-lime-400/10
                    blur-3xl
                    rounded-full
                    pointer-events-none
                " />

                <p className="
                    text-sm
                    text-zinc-500 dark:text-zinc-400
                    mb-4
                    relative z-10
                ">
                    Contact
                </p>

                <p className="
                    text-sm md:text-base
                    text-zinc-600 dark:text-zinc-400
                    mb-4
                    relative z-10
                ">
                    Building scalable web products with modern frontend
                    and backend technologies.
                </p>

                <h2 className="
                    text-4xl md:text-6xl
                    font-semibold
                    tracking-tight
                    leading-tight
                    max-w-4xl
                    mb-6
                    relative z-10
                ">
                    Let’s build something meaningful together.
                </h2>

                <p className="
                    text-lg
                    text-zinc-600 dark:text-zinc-400
                    leading-relaxed
                    max-w-2xl
                    mb-10
                    relative z-10
                ">
                    Interested in building modern applications alongside
                    strong teams focused on product quality, scalability
                    and great user experiences.
                </p>

                <div className="flex flex-wrap gap-4 relative z-10">
                    <SocialButton href="https://github.com/vichule">
                        <GithubIcon />
                        GitHub
                    </SocialButton>

                    <SocialButton href="https://www.linkedin.com/in/javinteger">
                        <LinkedinIcon />
                        LinkedIn
                    </SocialButton>

                    <SocialButton href="mailto:javier.cabanasdiaz@gmail.com">
                        <Mail className="h-4 w-4" />
                        Email
                    </SocialButton>
                    <SocialButton href="/javierCV.pdf" target="_blank" rel="noreferrer">
                        <Download className="h-4 w-4" />
                        Resume
                    </SocialButton>
                </div>

            </div>
        </Section>
    );
}