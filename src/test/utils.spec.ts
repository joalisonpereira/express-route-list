import { describe, it, expect } from 'vitest';
import express3 from 'express3';
import express4 from 'express4';
import express5 from 'express5';
import path from 'node:path';
import {
  fileExists,
  getConfigAbsoutePath,
  getConfigExists,
  getConfigFilename,
  getRoutes,
  pick
} from 'src/utils';
import { Methods } from 'src/types';

const handler = (_: any, res: any): void => res.send('handled');

describe('Pick', () => {
  it('should pick some values from object', () => {
    const person = { id: 1, name: 'john' };

    expect(pick(person, ['id'])).toEqual({ id: 1 });
  });
});

describe('getRoutes', () => {
  it('should return array with object with path and method', () => {
    const app = express3();

    app.get('/test', handler);

    const routes = getRoutes(app);

    expect(routes).toHaveLength(1);

    expect(routes[0].path).toBe('/test');

    expect(routes[0].method).toBe(Methods.get);
  });

  it('should return objects array with path and method', () => {
    const app = express4();

    app.all('/test', handler);

    app.get('/get-test', handler);

    const routes = getRoutes(app);

    expect(routes).toHaveLength(2);

    expect(routes[0].path).toBe('/test');

    expect(routes[0].method).toBe(Methods.all);

    expect(routes[1].path).toBe('/get-test');

    expect(routes[1].method).toBe(Methods.get);
  });

  it('should return empty array', () => {
    const app = express5();

    const routes = getRoutes(app);

    expect(routes).toHaveLength(0);
  });
});

describe('fileExists', () => {
  it('should check if fileExists and return false', async () => {
    const result = await fileExists(`./${Math.random()}.${Math.random()}`);

    expect(result).toBe(false);
  });

  it('should check if fileExists and return true', async () => {
    const result = await fileExists(`${path.resolve() + '/package.json'}`);

    expect(result).toBe(true);
  });
});

describe('getConfigFilename', () => {
  it('should return name for js config file', async () => {
    const result = getConfigFilename('js');

    expect(result.endsWith('.js')).toBe(true);
  });

  it('should return name for ts config file', async () => {
    const result = getConfigFilename('ts');

    expect(result.endsWith('.ts')).toBe(true);
  });
});

describe('getConfigAbsoutePath', () => {
  it('should return absolute path for js config file', async () => {
    const result = getConfigAbsoutePath('js');

    expect(result.endsWith('.js')).toBe(true);
  });

  it('should return absolute path for ts config file', async () => {
    const result = getConfigAbsoutePath('ts');

    expect(result.endsWith('.ts')).toBe(true);
  });
});

describe('getConfigAbsoutePath', () => {
  it('should return if config file exists', async () => {
    const result = await getConfigExists();

    expect(result).toBe(false);
  });
});
