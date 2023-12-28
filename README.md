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

### Database

Si la base de données n'est pas créer
```bash
    symfony console doctrine:database:create
```

Ensuite, une fois la BDD créer, il faut maintenant générer les migrations s'il ne sont pas déjà générer. Par défault, les fichiers de migrations sont stockés dans le répertoire migrations à la racine du projet Symfony.
```bash
    symfony console m:migration
```

Une fois les fichiers de migration générer, il faut les executer. Pour faire cela, il faut aller à la racine du projet Symfony, puis executer la commande suivante :
```bash
    symfony console doctrine:migration:migrate
```

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

## Authentification

L'authentification se fait via un formulaire de connexion standard. La méthode de connexion côté backend différe de mes habites de conception mais reste fondamentalement le même. Le système de connexion va générer un token qui sera retourné à l'utilisateur et pour tout les prochains call API, le token généré devra être utilisé dans le header de la requête : `Authorization: "Bearer <token>"`. Le projet utilisant ReactJS, j'utiliserai la librarie `axios` pour les call API (beaucoup plus simple que `fetch` de JavaScript).

- `lexik/jwt-authentication-bundle` (côté Symfony)
- `axios/axios` (côté ReactJS)

### Configuration Symfony

Une fois que la dépendance a été ajouté, il faudra maintenant générer une clé. Cette clé sera ensuite utilisé pour générer les token qui seront envoyer aux utilisateurs de la plateforme (normalement, se ne sera que les admin). Voici la commande pour générer ces clés :
```bash
    php bin/console lexik:jwt:generate-keypair
```
Une fois la commande ci-dessus lancée, elle va créer un sous-dossier `jwt` dans le dossier `config`. Dans ce sous-dossier, on aura 2 fichiers, ces 2 fichiers sont les clés privés et publics qui seront utlisé dans les actions de génération du token. A ce niveau, on a rien de plus.

Il faut maintenant configurer l'authentification dans le fichier `packages/security.yaml`.


### Configuration ReactJS

Il n'y a rien a faire côté ReactJS. La seule qu'il faudra faire, c'est appelé la route `/api/login_check` dans le formulaire de connexion.

Si le token a expiré, l'API retournera une erreur `402`, quand l'API nous retournera cette erreur, il faudra re-générer le token (et donc se reconnecter).

## Command

### Symfony
Pour générer un mot de passe hasher

```bash
    bin/console security:hash-password
```