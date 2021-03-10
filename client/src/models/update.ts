import {Moment} from 'moment';
import House from './house';

export interface IUpdate {
  timestamp: Moment;
  house: House;
  steps: number;
  score: number;
}
