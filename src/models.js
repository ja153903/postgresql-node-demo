import { DataTypes } from 'sequelize';
import db from './database';

const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export { User };