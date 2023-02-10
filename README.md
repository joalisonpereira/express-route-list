# Express Route List

> List routes for Express Framework

![](./docs/badge-statements.svg) ![](./docs/badge-functions.svg) ![](./docs/badge-lines.svg) ![](./docs/badge-branches.svg)

[license-url]: https://opensource.org/licenses/MIT

## Install

```bash
yarn add -D express-route-list
```

## Usage

Use the follow command to generate the config file.

```bash
yarn run route-list configure
```

Export the app (regardless of where you are declaring it)

```js
//server.js

export { app };
```

Pass your _app_ to the _configure_ function in config file

```js
//route-list.config.js

import { app } from './replace-with-app-path';

module.exports = {
  app,
  config: { showIndex: false, prefix: '' } // Default
};
```

## Execute

```bash
yarn run route-list
```

## Output

![](./docs/output.png)

## Why use this package?

This package provides a quick way to easily visualize your application's routes.

## Author

© 2023 - [Joalison Pereira](https://joalisonpereira.github.io/)
