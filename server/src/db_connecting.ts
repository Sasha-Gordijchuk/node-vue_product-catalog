/* eslint-disable no-console */
import { Sequelize } from 'sequelize-typescript';
import { Phone } from './models/Phone.js';

export const sequelize = new Sequelize(
  'postgres',
  'postgres',
  '1234',
  {
    host: 'localhost',
    dialect: 'postgres',
    schema: 'public',
    models: [Phone],
  },
);

// export const sequelize = new Sequelize({
//   database: 'postgres',
//   dialect: 'postgres',
//   password: '1234',
//   host: 'localhost',
//   models: [Phone],
// });

export const createTables = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  try {
    await sequelize.sync();
  } catch (e) {
    console.log('++++++++++++++++++++++++');
    console.log(e);
    console.log('++++++++++++++++++++++++');
  }
};
