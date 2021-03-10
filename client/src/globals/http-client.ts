import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {from, Observable} from 'rxjs';
import {AxiosRequestInterceptor} from '@/models/axios-request.interceptor';
import {AxiosResponseInterceptor} from '@/models/axios-response.interceptor';
import {map} from 'rxjs/operators';

const globalConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_ROOT_API,
  timeout: 90000,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'VER': 1,
  },
};

export class HttpClient {
  public static getGlobalConfig(baseUrl: string) {
    return {
      ...globalConfig,
      baseURL: baseUrl,
    };
  }

  private axiosInstance: AxiosInstance;
  private defaults: AxiosRequestConfig;

  constructor(config) {
    this.axiosInstance = axios.create(config);
    this.defaults = config;
  }

  set setDefaults(value: AxiosRequestConfig) {
    this.defaults = value;
  }

  get getDefaults(): AxiosRequestConfig {
    return this.defaults;
  }

  public addRequestInterceptor(interceptor: AxiosRequestInterceptor): void {
    this.axiosInstance.interceptors.request.use(
      (value) => interceptor.onConfig(value),
      (error) => interceptor.onError(error),
    );
  }

  public addResponseInterceptor(interceptor: AxiosResponseInterceptor): void {
    this.axiosInstance.interceptors.response.use(
      (value) => interceptor.onFulFilled(value),
      (error) => interceptor.onError(error),
    );
  }

  public request<T = any>(config: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return from(this.axiosInstance.request(config));
  }

  public get<T = any>(path: string): Observable<T> {
    return from(this.axiosInstance.get<T>(path))
      .pipe(
        map((response: AxiosResponse) => response.data),
      );
  }

  public delete<T = any>(url: string): Observable<T> {
    return from(this.axiosInstance.delete(url))
      .pipe(
        map((response: AxiosResponse) => response.data),
      );
  }

  public head<T = any>(url: string): Observable<AxiosResponse<T>> {
    return from(this.axiosInstance.head(url));
  }

  public post<T = any>(url: string, data?: any, timeout = 35000): Observable<T> {
    return from(this.axiosInstance.post<T>(url, data, {timeout}))
      .pipe(
        map((response: AxiosResponse) => response.data),
      );
  }

  public put<T = any>(url: string, data?: any): Observable<T> {
    return from(this.axiosInstance.put<T>(url, data))
      .pipe(
        map((response: AxiosResponse) => response.data),
      );
  }

  public patch<T = any>(url: string, data?: any): Observable<T> {
    return from(this.axiosInstance.patch<T>(url, data))
      .pipe(
        map((response: AxiosResponse) => response.data),
      );
  }

}

export const $httpClient = new HttpClient(globalConfig);
