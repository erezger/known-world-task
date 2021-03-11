import {NextFunction, Request, Response} from 'express';
import houseModel from '../models/house';
import HttpException from '../exceptions/http-exception';

export default class HouseController {

  // get all houses
  public getAllHouses(req: Request, res: Response, next: NextFunction) {
    try {
      // find houses
      houseModel.find({}, (err, houses) => {
        if (err) {
          res.send(err);
        }
        res.json(houses);
      });
    } catch (error) {
      next(new HttpException(401, 'unAuthorized access token'));
    }
  }

}
