# Portfolio - BUT Informatique 3ème année

Portfolio personnel créé avec Next.js 15, React et Tailwind CSS.

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Lancement du serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📝 Personnalisation

### Informations personnelles

Modifiez les informations suivantes dans `app/page.tsx` :

- **Nom** : Remplacez "Votre Nom" par votre nom
- **Email** : Remplacez "votre.email@example.com" par votre email
- **Liens sociaux** : Ajoutez vos liens GitHub et LinkedIn

### Projets

Les projets sont affichés dans la section "Mes projets". Pour ajouter vos propres projets :

1. Modifiez la boucle de mapping dans la section Projects
2. Remplacez les données factices par vos vrais projets
3. Ajoutez des images dans le dossier `public/`
4. Mettez à jour les liens vers vos repositories GitHub

### Compétences

Personnalisez les compétences dans les trois catégories :
- Front-End
- Back-End
- Outils

### Image de profil

Ajoutez votre photo dans le dossier `public/` et remplacez le placeholder dans la section "À propos".

## 📦 Structure du projet

```
portfolio-app/
├── app/
│   ├── page.tsx        # Page principale
│   ├── layout.tsx      # Layout principal
│   └── globals.css     # Styles globaux
├── public/             # Ressources statiques
└── package.json        # Dépendances
```

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Icônes

## 🌐 Déploiement

### Vercel (recommandé)

1. Connectez votre repository GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Cliquez sur "Deploy"

### Build manuel

```bash
npm run build
npm start
```

## 📄 License

Ce projet est libre d'utilisation pour votre portfolio personnel.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
