import {Component, Vue, Watch} from 'vue-property-decorator';
import {Action, Getter, Mutation} from 'vuex-class';
import {StoreNamespace} from '@/globals/store-namespace';
import {
  GET_HOUSE_BY_NAME,
  GET_HOUSES,
  HOUSES,
  INIT_UPDATES,
  LATEST_UPDATE, RESET_WORLD_STATE,
  SET_WINNER, SORTED_UPDATES,
  UPDATE_HOUSE,
  UPDATES, WINNER,
} from '@/types/world.types';
import House from '@/models/house';
import {IUpdate} from '@/models/update';
import {IPoint} from '@/models/point';

@Component({})
export default class HomeComponent extends Vue {

  @Action(GET_HOUSES, StoreNamespace.WORLD) public getHouses: () => void;
  @Action(INIT_UPDATES, StoreNamespace.WORLD) public initUpdates: () => void;
  @Action(GET_HOUSE_BY_NAME, StoreNamespace.WORLD) public getHouseByName: (houseName: string) => Promise<House>;

  @Mutation(UPDATE_HOUSE, StoreNamespace.WORLD) public updateHouse: (data: House) => void;
  @Mutation(SET_WINNER, StoreNamespace.WORLD) public setWinner: (data: House | undefined) => void;
  @Mutation(RESET_WORLD_STATE, StoreNamespace.WORLD) public resetWorldState: () => void;

  @Getter(HOUSES, StoreNamespace.WORLD) public houses!: House[];
  @Getter(LATEST_UPDATE, StoreNamespace.WORLD) public latestUpdate!: IUpdate;
  @Getter(UPDATES, StoreNamespace.WORLD) public updates!: IUpdate[];
  @Getter(SORTED_UPDATES, StoreNamespace.WORLD) public sortedUpdates!: IUpdate[];
  @Getter(WINNER, StoreNamespace.WORLD) public winner!: House;

  public kingHouse!: House;

  public created() {
    this.getHouses();
    this.initUpdates();
  }

  /**
   * watch for updates
   * TODO: move houses according to updates.
   * @param latestUpdate
   */
  @Watch('latestUpdate')
  public async onLatestUpdate(latestUpdate: IUpdate) {
    this.kingHouse = this.kingHouse || await this.getHouseByName('Lannister');
    if (latestUpdate && latestUpdate.steps) {
      const houseToUpdate = latestUpdate.house;
      const houseX = latestUpdate.house.position.x;
      const houseY = latestUpdate.house.position.y;
      const kingHouseX = this.kingHouse.position.x;
      const kingHouseY = this.kingHouse.position.y;
      houseToUpdate.score = latestUpdate.score;
      houseToUpdate.position = this.calcNewPosition(houseX, houseY, kingHouseX, kingHouseY, latestUpdate.steps);
      if (houseToUpdate.position.x === this.kingHouse.position.x
        && houseToUpdate.position.y === this.kingHouse.position.y) {
        const winner = houseToUpdate.score > this.kingHouse.score ? houseToUpdate : this.kingHouse;
        this.setWinner(winner);
        this.$notify({
          group: 'world',
          title: 'WINNER!!!',
          type: 'success',
          text: `House ${winner.name} has Won!`,
        });
      } else {
        this.updateHouse(houseToUpdate);
      }
      return;
    } else {
      this.kingHouse!.score = latestUpdate?.score;
    }
  }

  /**
   * TODO: calculate the new position
   * @param x1 house x position
   * @param y1 house y position
   * @param x2 destination x position
   * @param y2 destination y position
   * @param length number of steps towards destination
   */
  public calcNewPosition(x1: number, y1: number, x2: number, y2: number, length: number): IPoint {
    return {
      x: x1 < x2 ? x1 + length : x1 > x2 ? x1 - length : x1,
      y: y1 < y2 ? y1 + length : y1 > y2 ? y1 - length : y1,
    }
  }

  public startOver() {
    this.resetWorldState();
    this.getHouses();
    this.initUpdates();
  }

  get housesSortedByScore() {
    const sortedHouses = [...this.houses];
    return sortedHouses.sort(((a, b) => {
      return a.score < b.score ? 1 : -1;
    }))
  }
}
