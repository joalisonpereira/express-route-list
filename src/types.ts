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

export interface RouteListConfig {
  appPath: string;
  config: Config;
  ts: boolean;
}

export const ALL_METHODS_COUNT = 34;

export const CONFIG_FILE_NAME = 'route-list.config.json';
