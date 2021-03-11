import {Observable} from 'rxjs';
import {$httpClient} from '@/globals/http-client';
import House from '@/models/house';

export default class WorldService {
  private readonly baseApi: string;

  constructor() {
    this.baseApi = 'api';
    // this.baseApi = 'init.json';
  }

  public getHouses(): Observable<House[]> {
    return $httpClient.get(this.baseApi + '/house');
    // return $httpClient.get(this.baseApi);
  }
}
