import fs from 'node:fs/promises';
import path from 'node:path';
import chalk from 'chalk';
import { CONFIG_FILE_NAME } from './config';
import { configure } from './configure';
import { fileExists } from './utils';
export * from './configure';

async function run(): Promise<void> {
  const rootDir = path.resolve();

  const configPath = `${rootDir}/${CONFIG_FILE_NAME}`;

  try {
    const rootConfig = await import(configPath);

    const { app, config } = rootConfig.default;

    configure(app, config);
  } catch (error: any) {
    if (!(await fileExists(configPath))) {
      const templateFile = await fs.readFile(
        `${rootDir}/src/templates/config.txt`,
        {
          encoding: 'utf-8'
        }
      );

      await fs.writeFile(CONFIG_FILE_NAME, templateFile, {
        encoding: 'utf-8'
      });

      console.info(chalk.cyan(`Config generated in ${configPath}\n`));

      console.info(
        chalk.yellowBright('OBS: Now you need import your app in config file')
      );
    } else {
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
