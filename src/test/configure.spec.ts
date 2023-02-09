import { describe, it, vi, expect, afterEach } from 'vitest';
import express3 from 'express3';
import express4 from 'express4';
import express5 from 'express5';
import { configure } from 'src';
import ConsoleTablePrint from 'console-table-printer';

const handler = (_: any, res: any): void => res.send('handled');

const addRow = vi.fn();

const printTable = vi.fn();

ConsoleTablePrint.Table = vi
  .fn()
  .mockImplementation(() => ({ addRow, printTable }));

afterEach(() => {
  vi.clearAllMocks();
});

describe('Express 3', () => {
  it('should execute without errors', () => {
    const app = express3();

    app.get('/test', handler);

    configure(app);

    expect(addRow).toHaveBeenCalledTimes(1);

    expect(printTable).toHaveBeenCalledTimes(1);
  });

  it('should execute with all methods', () => {
    const app = express3();

    app.all('/test', handler);

    configure(app);

    expect(addRow).toHaveBeenCalledTimes(1);

    expect(printTable).toHaveBeenCalledTimes(1);
  });
});

describe('Express 4', () => {
  it('should execute without errors', () => {
    const app = express4();

    app.get('/test', handler);

    configure(app);

    expect(addRow).toHaveBeenCalledTimes(1);

    expect(printTable).toHaveBeenCalledTimes(1);
  });

  it('should execute without errors using Router feature', () => {
    const app = express4();

    const router = express4.Router();

    router.get('/router-test', (_: any, res: any) =>
      res.send('Birds home page')
    );

    app.get('/test', handler);

    app.use(router);

    configure(app);

    expect(addRow).toHaveBeenCalledTimes(2);

    expect(printTable).toHaveBeenCalledTimes(1);
  });

  it('should execute without errors using Router feature and all method', () => {
    const app = express4();

    const router = express4.Router();

    router.all('/router-test', (_: any, res: any) =>
      res.send('Birds home page')
    );

    app.get('/test', handler);

    app.use(router);

    configure(app);

    expect(addRow).toHaveBeenCalledTimes(2);

    expect(printTable).toHaveBeenCalledTimes(1);
  });
});

describe('Express 5', () => {
  it('should execute without errors', () => {
    const app = express5();

    app.get('/test', handler);

    configure(app, { showIndex: false, prefix: 'api/' });

    expect(addRow).toHaveBeenCalledTimes(1);

    expect(printTable).toHaveBeenCalledTimes(1);
  });

  it('should execute without errors using Router feature', () => {
    const app = express5();

    const router = express5.Router();

    router.get('/router-test', (_: any, res: any) =>
      res.send('Birds home page')
    );

    app.get('/test', handler);

    app.use(router);

    configure(app);

    expect(addRow).toHaveBeenCalledTimes(2);

    expect(printTable).toHaveBeenCalledTimes(1);
  });

  it('should execute without errors using Router feature and all method', () => {
    const app = express5();

    const router = express5.Router();

    router.all('/router-test', (_: any, res: any) =>
      res.send('Birds home page')
    );

    app.all('/test', handler);

    app.use(router);

    configure(app);

    expect(addRow).toHaveBeenCalledTimes(2);

    expect(printTable).toHaveBeenCalledTimes(1);
  });
});
