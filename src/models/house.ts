import {IPoint} from './point';

export default class House {
  public id: number;
  public name: string;
  public position: IPoint;
  public flag: string;
  public strength: number;
  public score: number;

  constructor(options: {
    id?: number;
    name?: string;
    position?: {
      x: number;
      y: number;
    };
    flag?: string;
    strength?: number;
    score?: number;
  } = {}) {
    this.id = options.id || 0;
    this.name = options.name || '';
    this.position = options.position || {x: 0, y: 0};
    this.flag = options.flag || '';
    this.strength = options.strength || 5;
    this.score = this.calcScore()
  }

  private calcScore(): number {
    return Math.ceil(Math.random() * 10);
  }
}
