## Working in Progress 🚧

# Express Route List

> List routes for Express Framework

![](./docs/badge-statements.svg) ![](./docs/badge-functions.svg) ![](./docs/badge-lines.svg) ![](./docs/badge-branches.svg)

[license-url]: https://opensource.org/licenses/MIT

## Install

```bash
npm install -D express-route-list
```

## Configuration

Use the follow command to generate the config file.

```bash
npx route-list configure
```

Export the app (regardless of where you are declaring it)

```js
//server.js

module.exports = app;
```

Pass your _app_ to the _configure_ function in config file

```js
//route-list.config.js

const app = require('./replace-with-app-path');

module.exports = {
  app,
  config: { showIndex: false, prefix: '' } // Default
};
```

## Execute

```bash
npx route-list
```

## Output Example

![](./docs/output.png)

## Why use this package?

This package provides a quick way to easily visualize your application's routes, with a minimal configuration.

## Author

© 2023 - [Joalison Pereira](https://joalisonpereira.github.io/)
