import type { Arguments, CommandBuilder } from 'yargs';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

export const command: string = 'init [type]';
export const desc: string = 'Creates a pre-defined YAML definition based off the provided type.';

type Options = {
	type: 'blog' | 'portal'
}

const getDefinitionOptions = () => { 
	const files = fs.readdirSync(path.join(__dirname, '../templates/definitions'));
	return files.map(file => path.basename(file, '.yml'));
}

export const builder: CommandBuilder<Options> = yargs =>
	yargs.positional('type', { choices: getDefinitionOptions(), default: 'default' });

export const handler = (argv: Arguments<Options>): void => {
	try {
		const { type } = argv;
		console.log(type);

	} catch (e) {
		console.log(chalk.red(e));
		process.exit();
	}
};
