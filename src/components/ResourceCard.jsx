import { ArrowRight } from "lucide-react";
import { withTracking } from "../lib/track";

export default function ResourceCard({ item }) {
  const [name, desc, url] = item;
  return (
    <a href={withTracking(url)} target="_blank" rel="noopener noreferrer"
       className="group flex flex-col justify-between rounded-sm border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <div>
        <h4 className="font-semibold text-neutral-900 dark:text-white">{name}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{desc}</p>
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ms transition-all group-hover:gap-2.5 dark:text-ms-light">
        Ouvrir la ressource <ArrowRight size={16} />
      </span>
    </a>
  );
}
