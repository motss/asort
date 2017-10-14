#!/usr/bin/env node

/** Import project dependencies */
import meow from 'meow';
import chalk from 'chalk';

/** Import other modules */
import styleError from './style-error';
import asort from './';

const helpScreen =
`
${chalk.underline('asort')}
${chalk.cyan('Renaming files in ascending order')}

${chalk.underline('Available Commands')}

  -h, --help      Show help.
  -v, --version   Show version.
  -l, --lang      Specify language for sorting file names while renaming.
  -r, --regex     RegExp for renaming files.
  -p, --replacer  Replacer function for defined RegExp.

${chalk.underline('Examples')}

  # Rename files in current directory
  $ asort ./

  # Rename files with defined directory path
  $ asort ~/my-videos/

  # Rename files with defined language for sorting files before renaming
  $ asort ~/my-videos/ -l "ja-JP"

  # Rename files with RegExp + replacer function
  $ asort ~/my-videos/ -r "/^(\\S+)[\\s\\S]*?(\\d*)\\.(\\w+)\$/i" -p "\$1 - \$2.\$3"
`;
const cli = meow({
  description: false,
  help: helpScreen,
  version: true,
}, {
  alias: {
    h: 'help',
    v: 'version',

    l: 'lang',
    r: 'regex',
    p: 'replacer',
  },
});
const {
  flags /** @type {Object} */,
  input /** @type {string[]} */,
  showHelp /** @type {Function} */,
} = cli;

interface CLIFlags {
  l: string | boolean;
  r: string | boolean;
  p: string | boolean;
}

async function main(flags: CLIFlags, input: string[]) {
  try {
    const lang = flags.l;
    const regex = flags.r;
    const replacer = flags.p;
    const dirName = input[0];

    if (typeof lang === 'boolean') {
      throw new TypeError('lang can NOT be null');
    } else if (typeof regex === 'boolean') {
      throw new TypeError('regex can NOT be null');
    } else if (typeof replacer === 'boolean') {
      throw new TypeError('replacer can NOT be null');
    }

    console.log(`Renaming files in ${
      chalk.green.bold(input[0])
    }...`);

    const renamed = await asort(input[0], lang, regex, replacer);

    console.log(`\n${
      renamed
        .map(n => `  ${n.replace(/(\-\-\>)/i, chalk.magenta('-->'))}  `)
        .join('\n')
    }\n`);

    console.log(`All files in ${
      chalk.green.bold(dirName)
    } have their new names!`);
  } catch (e) {
    console.error(styleError(e.message));
    process.exit(-1);
  }
}

if (Object.keys(flags || {}).length > 0 ||Array.isArray(input) && input.length > 0) {
  main(flags, input);

  /** Terminate processes */
  process.on('SIGTERM', () => {
    process.exit(0);
  });
  process.on('SIGINT', () => {
    process.exit(0);
  });
} else {
  showHelp();
}

