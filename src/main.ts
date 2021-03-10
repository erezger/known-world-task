import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './lang/lang';
import '@/globals/filters';

import WorldMap from '@/components/world-map.vue';

Vue.component('world-map', WorldMap);

Vue.config.productionTip = false;

const eventsHub = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

export {eventsHub};
