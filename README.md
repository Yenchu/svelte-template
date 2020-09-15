# svelte-demo

A demo project for Svelte, Sapper and Smelte.

## Install Sapper

```bash
npx degit "sveltejs/sapper-template#rollup" svelte-demo
```

### Install Smelte

```bash
cd svelte-demo
npm install smelte
```

### Edit rollup.config.js

- Import Smelte rollup plugin

```js
const smelte = require("smelte/rollup-plugin-smelte");
```

- Setup Smelte rollup plugin

```js
client: {
  ...
  smelte({
    purge: !dev,
    output: "static/global.css", // this overrides the default global.css
    postcss: [],
    whitelist: [],
    whitelistPatterns: [],
    tailwind: {
      theme: {
        extend: {
          spacing: {
            72: "18rem",
            84: "21rem",
            96: "24rem"
          }
        }
      },
      colors: {
        primary: "#b027b0",
        secondary: "#009688",
        error: "#f44336",
        success: "#4caf50",
        alert: "#ff9800",
        blue: "#2196f3",
        dark: "#212121"
      },
      darkMode: true,
    },
  }),
```

### Edit src/template.html

Include material icons.

```js
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons&display=swap" />
```

### Edit src/routes/_layout.svelte

Add Tailwind utilites CSS.

```js
import "smelte/src/tailwind.css";
```

### Build & Run the project

```bash
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.
