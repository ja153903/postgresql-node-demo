import { Sequelize } from 'sequelize';

import { getDatabaseURI, isConnectionUp } from './utils';

const URI = getDatabaseURI();

const sequelize = new Sequelize(URI);

if (isConnectionUp(sequelize)) {
  console.log('Database connection created...');
} else {
  console.error('Database connection failed...')
}

sequelize.sync();

export default sequelize;