import {MutationTree} from 'vuex';
import {initialState, WorldState} from '@/store/modules/world/index';
import moment from 'moment';
import {
  CREATE_NEW_UPDATE,
  RESET_WORLD_STATE,
  SET_HOUSES,
  SET_WINNER,
  UPDATE_HOUSE,
} from '@/types/world.types';
import House from '@/models/house';
import {Vue} from 'vue-property-decorator';
import {eventsHub} from '@/main';

export const mutations: MutationTree<WorldState> = {

  [SET_HOUSES]: (state, houses: House[]) => {
    state.houses = [...houses];
  },

  [SET_WINNER]: (state, winner: House | undefined) => {
    state.winner = winner;
  },

  [UPDATE_HOUSE]: (state, house: House) => {
    const i = state.houses.findIndex((item) => item.id === house.id);
    if (i > -1) {
      const houses = JSON.parse(JSON.stringify(state.houses));
      houses[i] = {...house};
      state.houses = JSON.parse(JSON.stringify(houses));
    }
  },

  [CREATE_NEW_UPDATE]: (state) => {
    if (state.winner) {
      return;
    }
    const randHouse: House = state.houses[Math.floor(Math.random() * state.houses.length)];
    const max = 10;
    const min = 5;
    const randSteps: number = randHouse.name !== 'Lannister'
      ? Math.floor(Math.random() * (max - min) + min) * randHouse.strength : 0;
    const update = {house: randHouse, steps: randSteps, score: randSteps + 100, timestamp: moment()};
    state.updates.push(update);
    state.sortedUpdates = [update, ...state.updates];
  },

  [RESET_WORLD_STATE]: (state) => {
    Object.assign(state, initialState());
  },
};
