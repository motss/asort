// @ts-check

/** Import project dependencies */
import fs from 'fs';
import { promisify } from 'util';

export const readdir = promisify(fs.readdir);

export default readdir;
