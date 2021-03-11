import * as mongoose from 'mongoose';
import {IPoint} from '../../../client/src/models/point';

export interface IHouse {
  id: number;
  name: string;
  position: IPoint;
  flag: string;
  strength: number;
  score: number;
}

const Schema = mongoose.Schema;

const houseSchema = new Schema({
  id: {
    type: 'Number',
    require: 'Enter user name',
  },
  name: {
    type: 'String',
    require: 'Enter user name',
  },
  flag: {
    type: 'String',
    require: 'Enter user email address',
    unique: true,
  },
  strength: {
    type: 'String',
    require: 'Enter user password',
  },
  position: {
    x: 'Number',
    y: 'Number',
  },
  score: {
    type: 'Number',
    require: 'Enter user password',
  },
});

const House = mongoose.model<IHouse & mongoose.Document>('houses', houseSchema);
export default House;
