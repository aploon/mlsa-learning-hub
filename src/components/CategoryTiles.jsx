import Icon from "./Icon";

export default function CategoryTiles({ categories, active, onSelect }) {
  return (
    <section id="categories" className="border-b border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Parcourir par domaine</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            const on = active === c.id;
            return (
              <button key={c.id} onClick={() => onSelect(on ? "all" : c.id)}
                className={"rounded-sm border bg-white p-4 text-left transition dark:bg-neutral-900 " +
                  (on ? "border-ms ring-1 ring-ms" : "border-neutral-200 hover:border-neutral-400 dark:border-neutral-800")}>
                <Icon name={c.icon} size={26} className="text-ms dark:text-ms-light" />
                <div className="mt-3 text-sm font-semibold text-neutral-900 dark:text-white">{c.title}</div>
                <div className="mt-0.5 text-xs text-neutral-500">{c.items.length} ressources</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
