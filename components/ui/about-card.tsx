"use client";

interface AboutCardProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function AboutCard({ eyebrow, title, description }: AboutCardProps) {
  return (
    <div className="card-surface p-8 rounded-[24px] transition-all duration-300 hover:-translate-y-1  hover:border-white/20">
                        <p className="text-sm text-zinc-500 mb-2">
                            {eyebrow}
                        </p>
                        <h3 className="text-xl font-semibold mb-2">
                            {title}
                        </h3>
                        <p className="text-sm text-zinc-500 mb-2">
                            {description}
                        </p>
                    </div>
  );
}
