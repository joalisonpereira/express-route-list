# Express Print Routes

> List routes for Express Framework

![](./docs/badge-statements.svg) ![](./docs/badge-functions.svg) ![](./docs/badge-lines.svg) ![](./docs/badge-branches.svg)

[license-url]: https://opensource.org/licenses/MIT

## Usage

1. Install express-print-routes in your project or global

   _Project_ (in your project folder):

   `npm install -D express-print-routes`

   or

   `yarn add express-print-routes`

2. Configure Jest (in `package.json`):

   _(optional: "text" and "lcov")_

   ```json
   "jest": {
     "coverageReporters": [
       "json-summary",
       "text",
       "lcov"
     ]
   }
   ```

   If you installed in your project, you can create a script to run it, for example:

   ```json
   "scripts": {
     "test:coverage": "npm test -- --coverage",
     "test:badges": "npm run test:coverage  && express-print-routes"
   }
   ```

3. Run `npm test -- --coverage`

4. Run `express-print-routes` (or just run: `npm run test:badges`)

   Resulting in badges:

   - `./coverage/badge-statements.svg`
   - `./coverage/badge-lines.svg`
   - `./coverage/badge-functions.svg`
   - `./coverage/badge-branches.svg`

#### CLI Options

- **input** [default: ./coverage/coverage-summary.json] - the file (and its path) of the summary json that contains the coverage data
- **output** [default: ./coverage] - the path to the directory where the svg files will be placed after download. If path doesn't exist it will be created.

**Example**:
`$ express-print-routes --input "./cov" --output "./badges"`

After this you can add into Github readme (for example) :smiley:

## Why use this package?

This package provides a quick way to easily visualize your application's routes.

## Author

© 2023 - [Joalison Pereira](https://joalisonpereira.github.io/)
