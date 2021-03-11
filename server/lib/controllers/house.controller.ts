import {NextFunction, Request, Response} from 'express';
import houseModel from '../models/house';
import HttpException from '../exceptions/http-exception';

const ObjectId = require('mongodb').ObjectID;

export default class HouseController {

  public getAllHouses(req: Request, res: Response, next: NextFunction) {
    try {
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
