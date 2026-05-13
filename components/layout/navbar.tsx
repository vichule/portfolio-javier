import { ThemeToggle } from "../theme/theme-toggle";

const navItems = [
  "About",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

export function Navbar() {
  return (
    <header className="fixed top-6 left-0 w-full z-50">
      <div className="container-custom">
        <div
          className="
            flex items-center justify-between
            px-6 py-4
            rounded-full
            border border-white/10
            bg-black/30
            backdrop-blur-xl
          "
        >
          <a className="font-medium tracking-tight" href="#">
            Javier
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-sm text-muted-foreground
                  transition-colors duration-300
                  hover:text-white
                "
              >
                {item}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}