#!/usr/bin/env node
import fs from 'node:fs/promises';
import chalk from 'chalk';
import { init } from './init';
import path from 'path';
import { exec } from 'node-exec-promise';
import {
  getConfig,
  getConfigAbsoutePath,
  getConfigExists,
  getConfigTemplate
} from './utils';

async function configure(): Promise<void> {
  if (await getConfigExists()) {
    console.info(
      chalk.redBright('A configuration file already exists for your project.')
    );

    process.exit(1);
  }

  const configFilename = getConfigAbsoutePath();

  await fs.writeFile(configFilename, getConfigTemplate(), {
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

async function compileTsProject(): Promise<string> {
  const tscPath = path.join(path.resolve(), 'node_modules/.bin/tsc');

  if (!(await fs.stat(tscPath)))
    throw new Error(`Please install typescript in your project`);

  const buildDir = 'node_modules/express-route-list/project';

  await exec(`${tscPath} --outDir ${buildDir} || rm -r ./${buildDir}`);

  return path.resolve() + `/${buildDir}`;
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

    const routeListConfig = getConfig();

    const { appPath, config } = routeListConfig;

    let app: any;

    if (routeListConfig.ts) {
      const buildDir = await compileTsProject();

      app = require(`${buildDir}/${appPath}`).default;
    } else {
      app = require(path.resolve() + `/${appPath}`);
    }

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
