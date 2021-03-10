import {MutationTree} from 'vuex';
import {RootState} from '@/store';
import {RESET_STATE} from '@/types/store.types';

export const mutations: MutationTree<RootState> = {
  [RESET_STATE]: (state, commit) => {
    // reset store
  },

};
