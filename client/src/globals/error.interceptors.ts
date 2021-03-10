import {eventsHub} from '@/main';
import {AxiosResponse} from 'axios';

export const authErrorInterceptor = {
  onFulFilled: (response: AxiosResponse) => {
    return response;
  },
  onError: (error) => {
    // on Error Occurred
  },
};
