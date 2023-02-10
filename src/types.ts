export interface Route {
  path: string;
  method: keyof typeof Methods;
}

export enum Column {
  Index = 'Index',
  Route = 'Route',
  Method = 'Method'
}

export enum Methods {
  'get' = 'get',
  'post' = 'post',
  'put' = 'put',
  'patch' = 'patch',
  'delete' = 'delete',
  'all' = 'all'
}

export interface Config {
  showIndex?: boolean;
  prefix?: string;
}

export const ALL_METHODS_COUNT = 34;

export const CONFIG_TEMPLATES = {
  js: `
    const app = require('./replace-with-app-path');

    module.exports = {
      app,
      config: { showIndex: true, prefix: '' } // Default
    };
  `,
  ts: `
    import app from './replace-with-app-path';

    export default {
      app,
      config: { showIndex: true, prefix: '' } // Default
    };
  `
};
