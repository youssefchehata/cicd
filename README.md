Build and Deploy to GitHub Pages

Description

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages via GitHub Actions. Il utilise gh-pages et netlify pour la mise en ligne et React pour le développement.
![image](https://github.com/user-attachments/assets/f5680408-d75e-4773-aaa8-bc623f6546b1)

Prérequis

Avant d'exécuter le projet localement ou de le déployer, assurez-vous d'avoir installé :

Node.js (version 22.14.0 recommandée)

npm (généralement installé avec Node.js)

Installation

Clonez ce dépôt :

git clone [https://github.com/VOTRE_UTILISATEUR/NOM_DU_DEPOT.git](https://github.com/youssefchehata/cicd.git)

Accédez au dossier du projet :

cd cicd

Installez les dépendances :

npm ci

Scripts disponibles

Les scripts suivants peuvent être exécutés via npm :

npm start : Lance l'application en mode développement.

npm test : Exécute les tests unitaires.

npm run build : Génère une version optimisée du projet pour la production.

npm run eject : Éjecte la configuration par défaut de React (irréversible).

npm run deploy : Déploie le projet sur GitHub Pages et Netlify.

Déploiement automatique via GitHub Actions

Un workflow GitHub Actions est configuré pour :

Construire le projet à chaque push sur la branche main.

Déployer automatiquement le projet sur GitHub Pages.

Générer un artefact contenant les fichiers de build avant le déploiement.

Configuration de GitHub Actions

Le fichier de workflow .github/workflows/build-and-deploy.yml est utilisé pour l'automatisation du déploiement. Ce fichier YAML définit les étapes suivantes :

Vérifie le code source.

Installe Node.js (version 22.14.0).

Installe les dépendances (npm ci).

Construit l'application (npm run build).

Sauvegarde les fichiers générés en tant qu'artefact GitHub Actions.

Déploie le dossier build sur la branche gh-pages.

Déploiement manuel

Si nécessaire, vous pouvez déployer manuellement avec :

npm run deploy

Secrets GitHub

Pour le bon fonctionnement du déploiement, un secret GitHub GITHUB_TOKEN est utilisé automatiquement par GitHub Actions.

Liens utiles

GitHub Pages

GitHub Actions

gh-pages

Netlify

Auteur

Votre Nom - [Votre GitHub](https://github.com/youssefchehata)
