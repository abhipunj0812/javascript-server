import * as dotenv from 'dotenv';
console.log(dotenv);
import * as secret_key from 'secret-key';
console.log(secret_key);

import { Iconfig } from './IConfig';

// tslint:disable-next-line:no-var-requires
const envVars = require('dotenv').config();
console.log('Inside config', envVars);
const config: Iconfig = envVars.parsed;
Object.freeze( config );
export default config;