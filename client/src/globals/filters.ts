import Vue from 'vue';
import moment from 'moment';
import {IUpdate} from '@/models/update';

Vue.filter('formatDate', (value: number) => {
  if (value) {
    return moment(value).format('MM/DD/YYYY hh:mm:ss')
  }

  return null;
});

Vue.filter('formatHouseUpdate', (update: IUpdate) => {
  if (update.house) {
    return `House <strong>${update.house.name}</strong> has moved ${update.steps} and gained ${update.score} strength.`
  }
  return null;
});
