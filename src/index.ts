// import path from 'node:path';
import express from 'express5';
import { getRoutes } from './utils';

const appExpress = express();

appExpress.get('/status', () => null);

appExpress.post('/statusx/:id', () => null);

appExpress.put('/statusdd/:i', () => null);

// const router = express.Router();

// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now());
//   next();
// });

// // define the home page route
// router.get('/', function (req, res) {
//   res.send('Birds home page');
// });
// // define the about route
// router.put('/about', function (req, res) {
//   res.send('About birds');
// });

// appExpress.use(router);

export default function configure(app: any): void {
  const routes = getRoutes(app);

  console.log(routes);
}
