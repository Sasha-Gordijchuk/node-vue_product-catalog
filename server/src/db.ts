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

export const syncTables = async () => {
  try {
    await sequelize.sync();
  } catch (e) {
    console.error(e);
  }
};

// export const addData = async () => {
//   phones.map((phone) => {
//     const ph = Phone.build(phone);

//     ph.save();

//     return phone;
//   });
// };
