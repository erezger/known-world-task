import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import VuexPersistence from 'vuex-persist';
import {world} from '@/store/modules/world';

Vue.use(Vuex);

export interface RootState {
  state?: string;
}

const vuexLocal = new VuexPersistence({
  key: 'world-vuex',
  storage: window.localStorage,
  supportCircular: true,
  reducer: (state: any) => ({
    // world: state.world,
  }),
});

const initialState: RootState = {};

export const store: StoreOptions<RootState> = {
  state: initialState,
  actions,
  getters,
  mutations,
  modules: {
    world,
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(
  store,
);
