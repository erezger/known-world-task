import {RootState} from '@/store';
import {ActionTree} from 'vuex';
import {RESET_STATE, RESET_STORE} from '@/types/store.types';

export const actions: ActionTree<RootState, RootState> = {
  [RESET_STORE]: ({commit}: any) => {
    commit(RESET_STATE, commit);
  },
};
