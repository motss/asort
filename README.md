🚨 No longer maintained 🚨

<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">asort</h1>

  <p>Renaming files in ascending order</p>
</div>

<hr />

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![NSP Status][nsp-badge]][nsp-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-url]

[![Code of Conduct][coc-badge]][coc-url]

> A package helps renaming files in an ascending order. Each renamed file will contain its own index starting from 1.

## Pre-requisite

- [Node.js][node-js-url] >= 8.6.0
- [NPM][npm-url] >= 5.3.0 ([NPM][npm-url] comes [Node.js][node-js-url] so there is no need to install separately.)

## How to use

It can be used as a dependency or as a CLI directly from your favorite terminal.

### To use it as a dependency

```bash
# Install it as a dependency in your project
npm install --save asort

# Import the package via 'require'
const { asort } = require('asort'); # OR const asort = require('asort').default;

# Import the package with ES module
import asort from 'asort';
```

### To install the CLI

You can choose to either use the CLI directly with [npx][npx-url] or to install the CLI globally with [NPM][npm-url].

*\* Please note that as of [npx][npx-url] is bundled with [NPM][npm-url] as of the version of [5.2.0][npx-the-npm-package-runner-url].*

```bash
# Use CLI with npx
$ npx asort <command>

# Install globally via NPM
$ npm install -g asort
```

### Commands

- Show help via `-h` or `--help`.

  ```bash
  # asort --help
  $ asort -h
  ```

- Show version via `-v` or `--version`.

  ```bash
  # asort --version
  $ asort -v
  ```

- Rename files

  ```bash
  # Rename files in current directory
  $ asort ./

  # Rename files with defined directory path
  $ asort ~/my-videos/

  # Rename files with defined language for sorting files before renaming
  $ asort ~/my-videos/ -l "ja-JP"

  # Rename files with RegExp + replacer function
  $ asort ~/my-videos/ -r "/^(\\S+)[\\s\\S]*?(\\d*)\\.(\\w+)\$/i" -p "\$1 - \$2.\$3"
  ```

## API reference

### asort(dirName[, lang = 'en-US', regex, replace])

- `dirname` <[string][string-mdn-url]> Path to the directory that contains files to be renamed.
- `lang` <[string][string-mdn-url]> Language of the files to be renamed. This is needed for sorting the files before renaming. Defaults to `en-US`.
- `regex` <[string][string-mdn-url]|[Regex][regex-mdn-url]> Custom RegExp to filter files that need to be renamed.
- `replacer` <[string][string-mdn-url]|[Function][string-replace-mdn-url]> Custom replacer string or [function][string-replace-mdn-url] when renaming the files.

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[npx-url]: https://www.npmjs.com/package/npx
[npx-the-npm-package-runner-url]: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[regex-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[string-replace-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

[travis-badge]: https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/asort.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/asort.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/92a9a3b3-c0c8-4172-917d-f1c7e0d5ef9f/badge
[daviddm-badge]: https://img.shields.io/david/expressjs/express.svg?style=flat-square
[greenkeeper-badge]: https://badges.greenkeeper.io/motss/asort.svg
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square

[travis-url]: https://travis-ci.org/motss/asort
[version-url]: https://www.npmjs.com/package/asort
[downloads-url]: http://www.npmtrends.com/asort
[mit-license-url]: https://github.com/motss/asort/blob/master/LICENSE
[daviddm-url]: https://david-dm.org/motss/asort
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/92a9a3b3-c0c8-4172-917d-f1c7e0d5ef9f
[greenkeeper-url]: https://greenkeeper.io/
[coc-url]: https://github.com/motss/asort/blob/master/CODE_OF_CONDUCT.md
