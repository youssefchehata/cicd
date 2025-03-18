# Assurez-vous d'être sur la branche main
git checkout main

# Récupérez les dernières modifications du dépôt distant
git fetch origin

# Réinitialisez la branche gh-pages pour qu'elle corresponde à main
git branch -D gh-pages
git checkout -b gh-pages
git push origin gh-pages --force
