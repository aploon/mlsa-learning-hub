# MLSA Learning Hub

Vite + React 18 + Tailwind CSS 3 + lucide-react.

## Démarrage
```bash
cp .env.example .env   # renseignez VITE_STUDENT_ID et VITE_FULL_NAME
npm install
npm run dev
```

## Personnaliser
- `src/data/resources.js` : catégories et liens (le Student ID est ajouté automatiquement)
- `public/hero.svg` : image du hero (remplacez par `hero.jpg` et changez le chemin dans `src/components/Hero.jsx`)

## Déployer sur Netlify
Poussez sur GitHub, importez le repo dans Netlify (la config est dans `netlify.toml`), puis ajoutez
`VITE_STUDENT_ID` et `VITE_FULL_NAME` dans Site settings > Environment variables.
