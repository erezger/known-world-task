import {Component, Vue, Watch} from 'vue-property-decorator';
import {Action, Getter, Mutation} from 'vuex-class';
import {StoreNamespace} from '@/globals/store-namespace';
import {GET_HOUSES, HOUSES, INIT_UPDATES, LATEST_UPDATE, UPDATE_HOUSE, UPDATES} from '@/types/world.types';
import House from '@/models/house';
import {IUpdate} from '@/models/update';
import {IPoint} from '@/models/point';

@Component({})
export default class HomeComponent extends Vue {

  @Action(GET_HOUSES, StoreNamespace.WORLD) public getHouses: () => void;
  @Action(INIT_UPDATES, StoreNamespace.WORLD) public initUpdates: () => void;
  // @Action(SORT_LIBRARY_LIST, StoreNamespace.LIBRARY) public sortLibraryList: () => void;
  // @Action(UPDATE_LIBRARY_LIST_ITEM, StoreNamespace.LIBRARY) public updateLibraryListItem: (item: LibraryItemModel) => void;

  @Mutation(UPDATE_HOUSE, StoreNamespace.WORLD) public updateHouse: (data: House) => void;
  // @Mutation(SET_IS_LIST_VIEW, StoreNamespace.LIBRARY) public setIsListView: (data: boolean) => void;
  // @Mutation(FILTER_LIBRARY_LIST, StoreNamespace.LIBRARY) public filterLibraryList: (filterObj: FilterObjModel) => void;
  // @Mutation(SEARCH_ON_LIBRARY_LIST, StoreNamespace.LIBRARY) public searchOnLibraryList: (word: string) => void;

  @Getter(HOUSES, StoreNamespace.WORLD) public houses!: House[];
  @Getter(LATEST_UPDATE, StoreNamespace.WORLD) public latestUpdate!: IUpdate;
  // @Getter(FILTERED_LIBRARY_LIST, StoreNamespace.LIBRARY) public filteredLibraryList!: LibraryItemModel[];
  // @Getter(GROUPED_LIST, StoreNamespace.LIBRARY) public groupedList!: GroupListModel;
  // @Getter(IS_LIST_VIEW, StoreNamespace.LIBRARY) public isListView!: boolean;

  public mounted(): void {
    this.initUpdates();
    this.getHouses();
  }

  /**
   * watch for updates
   * TODO: move houses according to updates.
   * @param latestUpdate
   */
  @Watch('latestUpdate')
  public onLatestUpdate(latestUpdate: IUpdate) {
    const houseToUpdate = latestUpdate.house;
    const houseX = latestUpdate.house.position.x;
    const houseY = latestUpdate.house.position.y;
    houseToUpdate.position = this.calcNewPosition(houseX, houseY, houseX + latestUpdate.steps, houseY + latestUpdate.steps, latestUpdate.steps);
    this.updateHouse(houseToUpdate);
    return;
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
    // debugger
    return {x: x2, y: y2}
  }
}
