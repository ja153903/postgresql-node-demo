import yaml from 'js-yaml';
import fs from 'fs';

import { ENV_YAML_FILE } from './constants';

const getDatabaseURI = () => {
  try {
    const envFile = fs.readFileSync(ENV_YAML_FILE, 'utf-8');
    const {database: { uri }} = yaml.safeLoad(envFile);

    return uri;
  } catch (e) {
    console.log(e);
  }
};

const isConnectionUp = async seqObj => {
  try {
    await seqObj.authenticate();
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export { getDatabaseURI,isConnectionUp };
