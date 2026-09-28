import { ArrowUpRight } from "lucide-react";
import { withTracking } from "../lib/track";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-semibold text-neutral-900 dark:text-white">Microsoft</span>
          <span className="hidden h-5 w-px bg-neutral-300 dark:bg-neutral-700 sm:block" />
          <span className="hidden text-neutral-700 dark:text-neutral-300 sm:block">Microsoft Student Ambassadors</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#categories" className="hidden hover:text-ms dark:hover:text-ms-light md:block">Catégories</a>
          <a href="#resources" className="hidden hover:text-ms dark:hover:text-ms-light md:block">Ressources</a>
          <a href={withTracking("https://mvp.microsoft.com/studentambassadors")} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1.5 font-medium text-ms dark:text-ms-light">
            Programme MLSA <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
