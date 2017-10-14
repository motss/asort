// @ts-check

/** Import project dependencies */
import fs from 'fs';
import { promisify } from 'util';

export const rename = promisify(fs.rename);

export default rename;
