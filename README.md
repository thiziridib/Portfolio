# 🚀 Portfolio Thiziri Dib

## 📁 Structure du projet

```
portfolio-thiziri/
├── index.html          ← Page principale
├── css/
│   └── style.css       ← Tous les styles
├── js/
│   ├── script.js       ← Navigation, thème, formulaire
│   └── three-scene.js  ← Globe 3D et fond spatial (Three.js)
├── images/
│   └── (mets ta photo ici)
└── README.md
```

## 🖼️ Ajouter ta photo

1. Place ta photo dans le dossier `images/` (ex: `photo.jpg`)
2. Dans `index.html`, cherche les commentaires `💡 POUR AJOUTER TA PHOTO`
3. Remplace `<div class="av-initials">TD</div>` par :
   ```html
   <img src="images/photo.jpg" alt="Thiziri Dib">
   ```
4. Fais de même pour `<div class="av-sm">TD</div>` dans la section À propos

## 📄 Ajouter ton CV

1. Place ton CV PDF dans `images/` (ex: `cv-thiziri.pdf`)
2. Dans `js/script.js`, remplace la fonction `cvClick` par :
   ```js
   function cvClick(btn) {
     window.open('images/cv-thiziri.pdf', '_blank');
   }
   ```

## 🔗 Mettre à jour les liens

Dans `index.html`, cherche et remplace :
- `https://github.com` → ton vrai lien GitHub
- `https://linkedin.com` → ton vrai lien LinkedIn
- `dibthiziri4@gmail.com` → ton email

## 🌐 Lancer le projet

Double-clique sur `index.html` ou utilise VS Code avec l'extension **Live Server**.

## ✨ Fonctionnalités

- 🌌 Fond spatial animé (étoiles + anneaux) via Three.js
- 🪐 Avatar avec 3 anneaux orbitaux animés
- 🌍 Globe 3D interactif dans la section Contact
- 🌙 Mode clair / sombre
- 📱 Navbar flouée (backdrop-filter)
- 🎯 Navigation fluide avec animations
- 🏷️ Logos officiels via Devicons CDN
- 📬 Formulaire de contact avec feedback visuel
- 📱 Responsive mobile
