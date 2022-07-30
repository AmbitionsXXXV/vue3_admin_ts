import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ETCRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface ETCRequestConfig extends AxiosRequestConfig {
  interceptors?: ETCRequestInterceptors
  showLoading?: boolean
}
