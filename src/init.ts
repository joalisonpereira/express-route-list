import { Table } from 'console-table-printer';
import chalk from 'chalk';
import { getRoutes } from './utils';
import { Column, type Config } from './types';

export function init(
  app: any,
  config: Config = { showIndex: true, prefix: '' }
): void {
  const columns = [
    {
      name: Column.Index,
      title: chalk.cyan(Column.Index),
      minLen: 15
    },
    {
      name: Column.Route,
      title: chalk.cyan(Column.Route),
      minLen: 15
    },
    {
      name: Column.Method,
      title: chalk.cyan(Column.Method),
      minLen: 15
    }
  ];

  if (!config.showIndex) {
    columns.shift();
  }

  const table = new Table({ columns });

  const rows = getRoutes(app).map((item, index) => {
    if (!config.showIndex) {
      return {
        [Column.Route]: `${config.prefix}${item.path}`.replace(/\/\//g, '/'),
        [Column.Method]: item.method.toUpperCase()
      };
    }

    return {
      [Column.Index]: index,
      [Column.Route]: `${config.prefix}${item.path}`.replace(/\/\//g, '/'),
      [Column.Method]: item.method.toUpperCase()
    };
  });

  rows.forEach((item) => table.addRow(item));

  table.printTable();
}
