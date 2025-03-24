# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# axios
yarn add axios

# Divers lib python pour le serveur Flask
pip install python-dotenv
pip install flask
pip install flask_jwt_extended
pip install flask flask_sqlalchemy
npm install jwt-decode # Permet de lire le rôle de l'utilisateur stocker dans son token JWT
npm install sqlite3
pip install sqlcipher3
npm install @tabler/icons-vue


```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Si problème de dépendences faire :

```bash
# Lister les plugins installés
npm list --depth=0

# Supprimer node_modules et package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

# Nettoyer le cache NPM
npm cache clean --force

# Réinstaller les dépendances
npm install --legacy-peer-deps

# Vérifier si tout est bien installé
npm list --depth=0

# Vérifier la version de Node.js et NPM
node -v
npm -v
a177558aebf955d87be8d53def6de7de72f35cffd0319768

yarn add @tabler/icons-vue

```