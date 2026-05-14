import React from "react";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const buttonBaseStyles =
  "inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-colors";
const buttonVariants = {
  primary:
    "bg-zinc-900 dark:bg-zinc-200 text-white dark:text-zinc-900 hover:bg-zinc-600 dark:hover:bg-zinc-300",
  secondary:
    "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${buttonBaseStyles} ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

interface SocialButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const socialButtonStyles =
  "inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/80 px-4 py-3 text-sm text-zinc-700 transition-all duration-300 hover:bg-zinc-100 hover:border-zinc-300 hover:-translate-y-[1px] dark:border-zinc-800/70 dark:bg-zinc-950/90 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900";

export function SocialButton({
  href,
  children,
  className = "",
  ...props
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${socialButtonStyles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
