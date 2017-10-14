// @ts-check

/** Import project dependencies */
import path from 'path';

/** Import other modules */
import readdir from './readdir';
import rename from './rename';

export async function asort(
  dirName: string,
  lang: string = 'en-US',
  regex?: string | RegExp,
  replacer?: any
) {
  const files = await readdir(dirName);

  if (Array.isArray(files) && files.length > 0) {
    const renamed = files
      .sort(Intl.Collator(lang).compare)
      .map(async (file, idx) => {
        const newFilename = file.replace(
          typeof regex !== 'undefined'
            ? typeof regex === 'string'
              ? new RegExp(
                  regex.replace(/^\/(.+)\/\w*$/i, '$1'),
                  regex.replace(/.+\/(\w+)$/i, '$1')
                )
              : new RegExp(regex)
            : /^(\D+)\d+\w+\.(\w+)$/i,
          typeof replacer !== 'undefined'
            ? replacer
            : `$1 - ${idx + 1}.$2`
        );
        const oldFilePath = path.resolve(dirName, `./${file}`);
        const newFilePath = path.resolve(dirName, `./${newFilename}`);

        await rename(oldFilePath, newFilePath);

        return `${file} --> ${newFilename}`;
      });

    return Promise.all(renamed);
  }
}

export default asort;
