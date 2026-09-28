import { useMemo, useState } from "react";
import { CATEGORIES } from "./data/resources";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryTiles from "./components/CategoryTiles";
import ResourceList from "./components/ResourceList";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const total = CATEGORIES.reduce((n, c) => n + c.items.length, 0);

  const sections = useMemo(() => {
    const q = query.toLowerCase();
    return CATEGORIES.filter((c) => cat === "all" || c.id === cat)
      .map((c) => ({ ...c, items: c.items.filter((i) => (i[0] + i[1]).toLowerCase().includes(q)) }))
      .filter((c) => c.items.length);
  }, [query, cat]);

  const select = (id) => { setCat(id); document.getElementById("resources")?.scrollIntoView(); };

  return (
    <>
      <Header />
      <Hero total={total} />
      <CategoryTiles categories={CATEGORIES} active={cat} onSelect={select} />
      <ResourceList sections={sections} query={query} onQuery={setQuery}
        activeTitle={CATEGORIES.find((c) => c.id === cat)?.title} onReset={() => setCat("all")} />
      <Footer />
    </>
  );
}
