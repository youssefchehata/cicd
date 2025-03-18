# Assurez-vous d'être sur la branche main
git checkout main

# Récupérez les dernières modifications du dépôt distant
git fetch origin

# Réinitialisez la branche gh-pages pour qu'elle corresponde à main
git branch -D gh-pages
git checkout -b gh-pages
git push origin gh-pages --force



=>git push --force origin main

----------------
git checkout --orphan gh-pages
git rm -rf .
git commit --allow-empty -m "Initial commit for gh-pages"
git push origin gh-pages
Configurer la source de publication :

Définissez la branche gh-pages comme source de publication dans les paramètres de votre dépôt :

Allez dans l'onglet Settings de votre dépôt sur GitHub.
Dans la section Pages, sous Source, sélectionnez gh-pages dans le menu déroulant des branches.
Cliquez sur Save pour appliquer les modifications.