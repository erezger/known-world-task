import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import '@/globals/filters';
import Notifications from 'vue-notification';

import WorldMap from '@/components/world-map.vue';

Vue.component('world-map', WorldMap);

Vue.use(Notifications);

Vue.config.productionTip = false;

const eventsHub = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

export {eventsHub};
