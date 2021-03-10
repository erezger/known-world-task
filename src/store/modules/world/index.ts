import Vue from 'vue';
import Vuex, {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import {RootState} from '@/store';
import {GroupListModel} from '@/models/group-list.model';
import House from '@/models/house';
import {IPoint} from '@/models/point';

Vue.use(Vuex);

export interface WorldState {
  kingsLandingPosition: IPoint;
  winner: House | undefined;
  houses: House[];
  updates: Array<{
    house: House;
    steps: number;
    score: number;
  }>;
}

// message state model init
export const initialState = (): WorldState => {
  return {
    kingsLandingPosition: {x: 260, y: 470},
    winner: undefined,
    houses: [],
    updates: [],
  };
};

export const world: Module<WorldState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
