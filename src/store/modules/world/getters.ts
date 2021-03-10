import {GetterTree} from 'vuex';
import {RootState} from '@/store/index';
import {WorldState} from '@/store/modules/world/index';
import {HOUSES, KINGS_LANDING_POSITION, LATEST_UPDATE, UPDATES, WINNER} from '@/types/world.types';
import House from '@/models/house';
import {IPoint} from '@/models/point';

export const getters: GetterTree<WorldState, RootState> = {

  [UPDATES](state): Array<{ house: House; steps: number; score: number; }> {
    return state.updates;
  },

  [LATEST_UPDATE](state): { house: House; steps: number; score: number; } | null {
    return state.updates[state.updates.length - 1] || null;
  },

  [HOUSES](state): House[] {
    return state.houses;
  },

  [KINGS_LANDING_POSITION](state): IPoint {
    return state.kingsLandingPosition;
  },

  [WINNER](state): House | undefined {
    return state.winner;
  },
};
