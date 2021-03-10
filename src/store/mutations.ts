import {MutationTree} from 'vuex';
import {RootState} from '@/store';
import {RESET_STATE} from '@/types/store.types';
import {RESET_WORLD_STATE, WORLD_ROOT} from '@/types/world.types';

export const mutations: MutationTree<RootState> = {
  [RESET_STATE]: (state, commit) => {
    commit(WORLD_ROOT + RESET_WORLD_STATE);
  },

};
