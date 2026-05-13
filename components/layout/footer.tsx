import { Mail } from "lucide-react";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.116-3.176 0 0 1.005-.322 3.3 1.23a11.51 11.51 0 0 1 3.005-.404c1.02.005 2.045.138 3.005.404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.6-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.596-.015 2.88-.015 3.275 0 .32.21.694.825.576C20.565 21.796 24 17.296 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7 0h4.8v2.22h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 6 3.33 6 7.66V24h-5v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.74 1.86-2.74 3.8V24H7V8z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-200/70 dark:border-zinc-800/80 py-14">
      <div className="container-custom relative z-10 flex flex-col gap-10">
        <div className="max-w-3xl">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">Javier Cabañas</p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight ">

            Building scalable web products with modern frontend and backend technologies.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/vichule"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/80 px-4 py-3 text-sm text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800/70 dark:bg-zinc-950/90 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 hover:-translate-y-0.5 transition-all duration-300"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/javinteger"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/80 px-4 py-3 text-sm text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800/70 dark:bg-zinc-950/90 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 hover:-translate-y-0.5 transition-all duration-300"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/80 px-4 py-3 text-sm text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800/70 dark:bg-zinc-950/90 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">© 2026</p>
        </div>
      </div>
    </footer>
  );
}
