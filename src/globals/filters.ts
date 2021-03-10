import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', (value: number) => {
  if (value) {
    return moment(value).format('MM/DD/YYYY hh:mm:ss')
  }

  return null;
});
