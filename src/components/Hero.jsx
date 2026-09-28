import { ChevronRight } from "lucide-react";
import { FULL_NAME } from "../config";

export default function Hero({ total }) {
  return (
    <section className="bg-[url('/hero-students.jpg')] bg-cover bg-center md:bg-[url('/hero.svg')]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-24">
        <div className="max-w-lg bg-white p-8 shadow-xl dark:bg-neutral-900 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Microsoft Learn Student Ambassadors
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-neutral-900 dark:text-white md:text-4xl">
            Les ressources Microsoft pour apprendre, créer et progresser
          </h1>
          <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
            Cloud, IA, data, low-code et entrepreneuriat : une sélection de {total} ressources officielles, partagée par {FULL_NAME}.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="#resources" className="inline-flex items-center gap-2 bg-ms px-6 py-2.5 font-semibold text-white transition hover:bg-ms-dark">
              Explorer les ressources <ChevronRight size={18} />
            </a>
            <a href="#categories" className="font-semibold text-ms hover:underline dark:text-ms-light">Voir les catégories</a>
          </div>
        </div>
        <img
          src="/hero-students.jpg"
          alt="Deux étudiants souriants travaillant sur un ordinateur portable et une tablette"
          className="hidden w-full object-cover shadow-xl md:block"
        />
      </div>
    </section>
  );
}
