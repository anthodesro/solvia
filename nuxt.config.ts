export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  app: {
    baseURL: '/solvia/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the beginning of the folder name to avoid nojkill conflict
    head: {
      title: "Solvia",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:5000',
    },
  },
});

