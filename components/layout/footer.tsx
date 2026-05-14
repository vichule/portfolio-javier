import { GithubIcon, LinkedinIcon } from "../ui/styled-icons";

export function Footer() {
  return (
    <footer className="relative z-10 py-10">
      <div className="
        container-custom
        flex flex-col md:flex-row
        items-start md:items-center
        justify-between
        gap-6
        border-t border-zinc-200/70 dark:border-zinc-800/80
        pt-8
      ">

        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 Javier Cabañas
          </p>
        </div>

        <div className="flex items-center gap-5 text-zinc-500 dark:text-zinc-400">

          <a
            href="https://github.com/vichule"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/javinteger"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon />
          </a>

        </div>
      </div>
    </footer>
  );
}