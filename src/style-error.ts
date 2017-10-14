// @ts-check

/** Import project dependencies */
import chalk from 'chalk';

export function styleError(message: string) {
  return `${chalk.red.bold('ERROR')}: ${message}`;
}

export default styleError;
