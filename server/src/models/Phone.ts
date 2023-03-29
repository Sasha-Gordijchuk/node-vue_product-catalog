/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  Table, Column, Model,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  })
export class Phone extends Model {
  @Column({primaryKey: true})
  id: string;

  @Column
  category: string;

  @Column
  phoneId: string;

  @Column
  itemId: string;

  @Column
  name: string;

  @Column
  fullPrice: number;

  @Column
  price: number;

  @Column
  screen: string;

  @Column
  capacity: string;

  @Column
  color: string;

  @Column
  ram: string;

  @Column
  year: number;

  @Column
  image: string;
}

// Phone.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//   },
// }, {
//   sequelize,
// });

// try {
//   await Phone.sync();
// } catch {
//   console.log('error');
// }

// console.log('hello');
