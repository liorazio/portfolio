# portfolio

See [https://liorazio.github.io/#/](https://liorazio.github.io/#/).

To deploy current status to github.io use the `./deploy` script.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### build local distribution to test before deployment

```
npm run buildlocal
npm run preview
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Changelog

### v0.9.0 (May 2026)
- **Dependencies updated:** Vue 3.5.x, vue-router 4.6.x, Vite 6.x, @vitejs/plugin-vue 6.x
- **Removed `vue-uuid`:** Replaced with Vue's built-in `useId()` for unique element IDs
- **Fixed Vite 6 compatibility:** Migrated asset loading from `new URL()` to `import.meta.glob()`
- **Code cleanup:** Removed dead code, unused props, debug console.logs, and non-idiomatic patterns
