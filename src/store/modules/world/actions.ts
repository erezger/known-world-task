import {RootState} from '@/store/index';
import {ActionContext, ActionTree} from 'vuex';
import {WorldState} from '@/store/modules/world/index';
import WorldService from '@/globals/world.service';
import {$httpClient} from '@/globals/http-client';
import {authErrorInterceptor} from '@/globals/error.interceptors';
import {CREATE_NEW_UPDATE, GET_HOUSE_BY_NAME, GET_HOUSES, INIT_UPDATES, SET_HOUSES} from '@/types/world.types';

const worldService = new WorldService();
$httpClient.addResponseInterceptor(authErrorInterceptor);

export const actions: ActionTree<WorldState, RootState> = {

  [GET_HOUSES]: ({state, commit}: ActionContext<WorldState, RootState>) => {
    worldService.getHouses()
      .subscribe(
        (data) => {
          commit(SET_HOUSES, data.houses);
        },
      );
  },

  [INIT_UPDATES]: ({state, commit}: ActionContext<WorldState, RootState>) => {
    (function loop() {
      const rand = Math.round(Math.random() * (3000 - 500)) + 500;
      setTimeout(() => {
        commit(CREATE_NEW_UPDATE);
        if (!state.winner) {
          loop();
        }
      }, rand);
    }());
  },

  [GET_HOUSE_BY_NAME]: (
    {state, commit}: ActionContext<WorldState, RootState>,
    houseName: string) => {
    return state.houses.find((h) => h.name === houseName);
  },
};
