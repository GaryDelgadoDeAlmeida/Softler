# SOFTLER

Ce projet est une reproduction du site internet :
<a href="https://demo.templatemonster.com/demo/322648.html" target="_blacnk">
    https://demo.templatemonster.com/demo/322648.html
</a>

J'ai essayer de reproduir le plus fidélement possible le design et toute les fonctionnalités visuelles de l'application. La reproduction n'est pas parfaite mais suffisante par rapport au site d'origine.

Le but de ce site est tout simplement pour tester et pratiquer mes capacités de designer.

<strong><em>Question : </em></strong>Pourquoi copier ce site spéciquement ?
<strong><em>Réponse : </em></strong>Je l'ai trouvé à la fois beau et en même temps, intéressé à copier pour de futur référence (notamment dans sa conception que j'ai entièrement fait sans utilisé de librairie quelconque). Le but ne va vraiment pas plus loin que la pratique.

## Installation

### React

Pour installer toutes les dépendances nécessaires côté ReactJS :
```bash
    npm install
```
OU
```bash
    yarn install
```

### Symfony

Pour installer toutes les dépendances nécessaires côté Symfony :
```bash
    composer install
```

### Style

Si les styles ne sont pas automatiquement compiler, veuillez utiliser la commande suivante pour compiler les styles SASS dans un fichier CSS :
```bash
    sass --style compressed ./public/assets/sass/index.scss ./public/assets/build/app.css
```