import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/home/home.component';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent,
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
