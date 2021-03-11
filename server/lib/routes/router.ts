import {Request, Response} from 'express';
import HouseController from "../controllers/house.controller";


export class Router {
  public houseController: HouseController = new HouseController();

  public routes(app): void {

    // check ok page
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfulll!!!!'
        })
      });

    // house routes
    app.route('/api/house')
      // get all houses
      .get(this.houseController.getAllHouses);

  }
}
