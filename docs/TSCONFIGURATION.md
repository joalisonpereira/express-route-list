## Setup

Export the app (regardless of where you are declaring it)

```ts
//app.ts

export default app;
```

Create a configuration file:

```ts
//route-list.ts
import { configure } from 'express-route-list';
import app from './app';

configure(app, { showIndex: true, prefix: '' });
```

## Execute

You can use [tsx](https://www.npmjs.com/package/tsx) or [ts-node](https://www.npmjs.com/package/tsx) to execute this script.

```bash
npm pkg set scripts.route-list="tsx route-list.ts"
```

```bash
npx route-list
```

## Output Example

![](./output.png)
