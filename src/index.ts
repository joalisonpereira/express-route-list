import fs from 'node:fs/promises';
import path from 'node:path';
import chalk from 'chalk';
import { CONFIG_FILE_NAME } from './types';
import { configure } from './configure';
import { fileExists } from './utils';
export * from './configure';

async function run(): Promise<void> {
  const rootDir = path.resolve();

  const configPath = `${rootDir}/${CONFIG_FILE_NAME}`;

  try {
    const rootConfig = require(configPath);

    const { app, config } = rootConfig;

    configure(app, config);
  } catch (error: any) {
    if (!(await fileExists(configPath))) {
      await fs.writeFile(
        CONFIG_FILE_NAME,
        `
          const app = require('./server');

          module.exports = {
            app,
            config: { showIndex: true, prefix: '' } // Default
          };
        `,
        { encoding: 'utf-8' }
      );

      console.info(chalk.cyan(`${CONFIG_FILE_NAME} generated\n`));

      console.info(chalk.yellowBright('Now you need import your app'));
    } else {
      console.log(error);

      console.error(chalk.red(error.message) + '\n');

      console.info(
        chalk.yellowBright(
          'Did you remember to import the app in your config file?'
        )
      );
    }
  }
}

void run();
