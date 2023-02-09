export type Route = { path: string; method: string; [key: string]: any };

export function pick<T = Record<string, any>>(obj: T, keys: Array<keyof T>): T {
  const ret = {} as T;

  for (const key of keys) {
    ret[key] = obj[key];
  }

  return ret;
}

export function getRoutes(app: any): Route[] {
  let routes = [];

  // Express 3
  if (app.routes) {
    routes = Object.values(app.routes).flat();
  }

  // Express 4 or 5
  else if (app._router?.stack ?? app.router?.stack) {
    routes = (app._router ?? app.router).stack
      .map(
        (item: any) =>
          item.route ?? item.handle.stack?.map((item: any) => item.route)
      )
      .flat()
      .filter(Boolean);

    routes = routes.map((item: any) => ({
      path: item.path,
      method: item.stack[0].method
    }));
  }

  routes = routes.map((item: any) => pick<Route>(item, ['path', 'method']));

  return routes;
}
