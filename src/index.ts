#!/usr/bin/env node
import fs from 'node:fs/promises';
import { execSync } from 'child_process';
import chalk from 'chalk';
import prompts from 'prompts';
import path from 'node:path';
import { CONFIG_TEMPLATES } from './types';
import { init } from './init';
import {
  getConfigAbsoutePath,
  getConfigExists,
  getConfigFilename
} from './utils';

const ROOT = path.resolve();

async function configure(): Promise<void> {
  if (await getConfigExists()) {
    console.info(
      chalk.redBright('A configuration file already exists for your project.')
    );

    process.exit(1);
  }

  const { value: isTs } = await prompts({
    type: 'toggle',
    name: 'value',
    message: 'Your project uses Typescript?',
    initial: true,
    active: 'Y',
    inactive: 'n'
  });

  if (isTs === undefined) {
    process.exit(1); // User not choose option
  }

  const configFilename = getConfigAbsoutePath(isTs);

  await fs.writeFile(configFilename, CONFIG_TEMPLATES[isTs ? 'ts' : 'js'], {
    encoding: 'utf-8'
  });

  console.info(chalk.greenBright(`Config file created.\n`));

  console.info(
    chalk.cyan(
      `Please configure ${chalk.bold.whiteBright(
        'app'
      )} import in ${chalk.bold.whiteBright(configFilename)}`
    )
  );
}

function getConfig(): any {
  try {
    const tscPath = path.join(ROOT, 'node_modules/.bin/tsc');

    const buildPath = path.join(
      ROOT,
      'node_modules/express-route-list',
      'exec-build'
    );

    execSync(
      `${tscPath} --outDir ${buildPath} || echo "tsc compilation failed. Please resolve issues in your project." >&2`,
      { cwd: ROOT }
    );

    return require(`${buildPath}/${getConfigFilename('js')}`);
  } catch (error) {
    const configJsPath = getConfigAbsoutePath('js');

    try {
      return require(configJsPath);
    } catch (error) {
      return null;
    }
  }
}

async function run(): Promise<void> {
  try {
    const option = process.argv[2];

    if (option === 'configure') {
      await configure();

      process.exit(1);
    } else if (option !== undefined) {
      console.info(
        chalk.redBright(`${chalk.bold.redBright(option)} is an invalid option.`)
      );

      process.exit(1);
    }

    const routeListConfig = getConfig();

    if (!(await getConfigExists())) {
      console.info(
        chalk.redBright(
          `You do not have a valid configuration file, please use the ${chalk.bold.whiteBright(
            'configure'
          )} command.`
        )
      );

      process.exit(1);
    }

    const { app, config } = routeListConfig?.default ?? routeListConfig;

    init(app, config);
  } catch (error: any) {
    console.info(chalk.redBright(`ERROR: ${error.message}`));

    console.info(
      chalk.yellowBright(
        'Did you remember to import the app in your config file?'
      )
    );
  }
}

void run();
