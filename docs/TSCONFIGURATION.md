## Setup

Export the app (regardless of where you are declaring it)

```ts
//app.ts

export default app;
```

Create a configuration file with this configs:

```ts
//route-list.ts
import { configure } from 'express-route-list';
import app from './app';

configure(app, { showIndex: true, prefix: '' });
```

## Create script to execute

You can use [tsx](https://www.npmjs.com/package/tsx) or [ts-node](https://www.npmjs.com/package/tsx) to execute this script.

```bash
npm pkg set scripts.route-list="tsx route-list.ts"
```

## Output Example

![](./docs/output.png)

## Why use this package?

This package provides a quick way to easily visualize your application's routes, with a minimal configuration.

## Author

© 2023 - [Joalison Pereira](https://joalisonpereira.github.io/)
