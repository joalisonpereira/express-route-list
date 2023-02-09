# Express Print Routes

> List routes for Express Framework

![](./docs/badge-statements.svg) ![](./docs/badge-functions.svg) ![](./docs/badge-lines.svg) ![](./docs/badge-branches.svg)

[license-url]: https://opensource.org/licenses/MIT

## Install

```
yarn add -D express-route-list
```

## Usage

Add this config in your package.json

```json
"scripts": {
  "route:list": "express-route-list"
}
```

Export your app config (in the end of file)

```js
//server.js

export { app };
```

Pass your _app_ to the _configure_ function in config file

```js
//express-route-list.config.js

import { configure } from 'express-route-list';
import { app } from './server';

const config = { showIndex: true, prefix: '' }; //Default

module.exports = configure(app, config);
```

## Execute

```
yarn run route:list
```

## Why use this package?

This package provides a quick way to easily visualize your application's routes.

## Author

© 2023 - [Joalison Pereira](https://joalisonpereira.github.io/)
