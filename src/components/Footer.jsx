import Logo from "./Logo";
import { FULL_NAME, GITHUB_URL } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-neutral-600 dark:text-neutral-400 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3"><Logo /><span>MLSA Learning Hub · <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-ms hover:underline dark:hover:text-ms-light">{FULL_NAME}</a></span></div>
        <p>Site communautaire non officiel. Microsoft et ses marques appartiennent à Microsoft Corporation.</p>
      </div>
    </footer>
  );
}
