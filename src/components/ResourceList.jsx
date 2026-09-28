import { Search } from "lucide-react";
import Icon from "./Icon";
import ResourceCard from "./ResourceCard";

export default function ResourceList({ sections, query, onQuery, activeTitle, onReset }) {
  return (
    <main id="resources" className="mx-auto max-w-7xl px-5 py-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Toutes les ressources</h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {activeTitle || "Tous les domaines"}
            {activeTitle && <button onClick={onReset} className="ml-3 text-ms hover:underline dark:text-ms-light">Réinitialiser</button>}
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input value={query} onChange={(e) => onQuery(e.target.value)} placeholder="Rechercher une ressource"
            className="w-full rounded-sm border border-neutral-300 bg-white py-2.5 pl-10 pr-3 outline-none focus:border-ms focus:ring-1 focus:ring-ms dark:border-neutral-700 dark:bg-neutral-900" />
        </div>
      </div>

      {sections.length === 0 && <p className="mt-16 text-center text-neutral-500">Aucun résultat pour « {query} ».</p>}

      {sections.map((c) => (
        <section key={c.id} className="mt-12">
          <div className="flex items-center gap-3 border-b border-neutral-200 pb-3 dark:border-neutral-800">
            <Icon name={c.icon} className="text-ms dark:text-ms-light" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{c.title}</h3>
            <span className="hidden text-sm text-neutral-500 sm:block">{c.desc}</span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.items.map((i) => <ResourceCard key={i[0]} item={i} />)}
          </div>
        </section>
      ))}
    </main>
  );
}
