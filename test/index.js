/** Import project dependencies */
const test = require('ava');
const execa = require('execa');
const fs = require('fs');
const path = require('path');
const tmpDir = require('os').tmpdir;
const { promisify } = require('util');

/** Import other modules */
const asort = require('../dist').default;
const pkgJson = require('../package.json');

/** Setting up */
const mkdtemp = promisify(fs.mkdtemp);
const writeFile = promisify(fs.writeFile);

test('asort', async (t) => {
  try {
    const folder = await mkdtemp(`${tmpDir}${path.sep}`);
    const tmpFiles = Array(10).fill(0).map((n, idx) =>
      writeFile(path.resolve(`${folder}`, `tmpFile${
        ('0' + idx).slice(-2)
      }.txt`), 'random-data'), 'random-data');
    const expected = Array(10)
      .fill(0)
      .map((n, idx) => `tmpFile${('0' + idx).slice(-2)}.txt --> tmpFile - ${(idx + 1)}.txt`)
      .join('\n');

    await Promise.all(tmpFiles);

    const renamed = await asort(folder);

    t.is(renamed.join('\n'), expected);
  } catch (e) {
    t.fail();
  }
});

test('throw when dirName is undefined', async (t) => {
  try {
    await asort();
    t.fail();
  } catch (e) {
    t.is(e.message, 'path must be a string or Buffer');
  }
});

/** [START] CLI specific tests */
test('show help screen when running with no parameters', async (t) => {
  try {
    t.regex(
      await execa.stdout('./dist/cli.js'),
      /asort/i
    );
  } catch (e) {
    t.fail();
  }
});

test('show help screen', async (t) => {
  try {
    t.regex(
      await execa.stdout('./dist/cli.js', ['--help']),
      /asort/i
    );
  } catch (e) {
    t.fail();
  }
});

test('show version', async (t) => {
  try {
    t.is(
      await execa.stdout('./dist/cli.js', ['--version']),
      pkgJson.version
    );
  } catch (e) {
    t.fail();
  }
});
/** [END] CLI specific tests */
