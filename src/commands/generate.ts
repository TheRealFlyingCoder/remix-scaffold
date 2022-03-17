import type { Arguments, CommandBuilder } from 'yargs';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import chalk from 'chalk';
import { YamlConfig } from '../typings/Config';
import { validateConfig } from '../utils/routesSchema';

type Options = {
	definition: string;
	// clear: boolean;
	// reset: boolean;
};

export const command: string = 'generate';
export const desc: string = 'Generate the structure defined in your YAML routes definition file';

export const builder: CommandBuilder<Options, Options> = yargs =>
	yargs.options({
		definition: {
			type: 'string',
			alias: 'd',
			default: './routes.yml',
			description: 'Path to your YAML routes definition',
		},
		// clear: {
		// 	type: 'boolean',
		// 	alias: 'c',
		// 	default: false,
		// 	description: 'Clear folders and files that no longer exist in the YAML routes definition',
		// },
		// reset: {
		// 	type: 'boolean',
		// 	alias: 'r',
		// 	default: false,
		// 	description: 'Override existing route folders and files, and clear missing ones',
		// },
	});

export const handler = (argv: Arguments<Options>): void => {
	try {
		const { definition } = argv;

		let defPath = path.join(process.cwd(), definition);
		if (!defPath.endsWith('.yml')) defPath = `${defPath}.yml`;

		if (!fs.existsSync(defPath)) {
			throw `Missing YAML route definition at ${defPath}`;
		}

		const doc = yaml.load(fs.readFileSync(defPath, 'utf8'), { json: true }) as YamlConfig;
		const config = validateConfig(doc);
		//WE HAVE A VALID AND FORMATTED ROUTES OBJECT

	} catch (e) {
		console.log(chalk.red(e));
		process.exit();
	}
};
