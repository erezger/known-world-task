import {Request, Response} from 'express';
import HouseController from "../controllers/house.controller";


export class Router {
  public houseController: HouseController = new HouseController();

  public routes(app): void {

    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfulll!!!!'
        })
      });

    // world routes
    app.route('/api/house')
      // get all users
      .get(this.houseController.getAllHouses);

  }
}
