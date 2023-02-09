// import path from 'node:path';
// import express from 'express3';
import { Table } from 'console-table-printer';
import chalk from 'chalk';
import { getRoutes } from './utils';
import { Column } from './types';

// const testApp = express();

// testApp.get('/status', () => null);

// testApp.post('/statusx/:id', () => null);

// testApp.put('/statusdd/:i', () => null);

// testApp.delete('/statuxsdd/:i', () => null);

// testApp.patch('/statusddd/:i', () => null);

// testApp.all('/all/:i', () => null);

// testApp.all('/all', () => null);

// const router = express.Router();

// router.use((req, res, next) => {
//   console.log('Time: ', Date.now());
//   next();
// });

// router.all('/', function (req, res) {
//   res.send('Birds home page');
// });

// router.put('/about', function (req, res) {
//   res.send('About birds');
// });

// testApp.use(router);

export function configure(app: any): void {
  const table = new Table({
    columns: [
      {
        name: Column.Index,
        title: chalk.cyan(Column.Index)
      },
      {
        name: Column.Route,
        title: chalk.cyan(Column.Route)
      },
      {
        name: Column.Method,
        title: chalk.cyan(Column.Method)
      }
    ]
  });

  const routes = getRoutes(app).map((item, index) => ({
    [Column.Index]: index,
    [Column.Route]: item.path,
    [Column.Method]: item.method.toUpperCase()
  }));

  routes.forEach((item) => table.addRow(item));

  table.printTable();
}

// configure(testApp);
