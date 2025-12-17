# sushifast_oscar_enzo
TP3 – ANTUNES & BAER
L’objectif principal est de mettre en pratique :

l’organisation d’un projet web,
l’utilisation de dépendances externes,
la structuration propre des fichiers.

Arborescence du projet
TP3_ANTUNES_BAER/
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
│
├── sushifast/
│   ├── node_modules/
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── AnimatedBackground.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   └── MenuCard.jsx
│       ├── data/
│       │   └── boxes.json
│       ├── pages/
│       │   ├── Contact.jsx
│       │   ├── Home.css
│       │   ├── Home.jsx
│       │   ├── MenuDetail.jsx
│       │   └── Menus.jsx
│       ├── AnimatedBackground.css
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx



 Technologies utilisées

* **HTML / CSS / JavaScript**
* **Node.js**
* **npm** (gestionnaire de dépendances)
* **Bootstrap** (framework CSS)
* **React** (librairie JavaScript)
* **Vite** (librairie JavaScript)

Installation et lancement du projet

Prérequis

* Avoir **Node.js** installé sur sa machine et **Vite**
* Avoir **npm** (fourni avec Node.js)

Installation des dépendances

Dans le dossier du projet :

```bash
npm install
```

Lancement du projet

Selon la configuration du projet :

```bash
npm start
```

ou

```bash
npm run dev
```

---

Rôle des fichiers principaux

* **package.json** :

  * Contient les informations du projet
  * Liste les dépendances
  * Définit les scripts npm

* **package-lock.json** :

  * Garantit les versions exactes des dépendances installées

* **node_modules/** :

  * Contient toutes les librairies installées automatiquement
