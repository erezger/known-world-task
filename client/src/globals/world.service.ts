import {Observable} from 'rxjs';
import {$httpClient} from '@/globals/http-client';
import {BaseResponse} from '@/models/base-response.model';
import House from '@/models/house';

export default class WorldService {
  private readonly baseApi: string;

  constructor() {
    this.baseApi = 'init.json';
  }

  public getHouses(): Observable<{ houses: House[] }> {
    return $httpClient.get(this.baseApi);
  }
}
