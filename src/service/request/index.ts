import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ETCRequestInterceptors, ETCRequestConfig } from './type'
import { ElLoading } from 'element-plus'

class ETCRequest {
  instance: AxiosInstance
  interceptors?: ETCRequestInterceptors
  showLoading: boolean

  constructor(config: ETCRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true
    this.interceptors = config.interceptors

    // config中取出的拦截器是相对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 创建所有实例都有的拦截器（拦截器本质上就是一个函数）
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例中都存在的拦截器:请求拦截成功')

        if (this.showLoading) {
          const loadingInstance = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(250,255,255,0.5)'
          }).close()
        }
        return config
      },
      (err) => {
        console.log('......:请求拦截失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('......:响应拦截成功')

        const loadingInstance = ElLoading.service({
          lock: true,
          text: '正在请求数据',
          background: 'rgba(25,255,255,0.5)'
        }).close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败，错误信息')
        } else {
          return data
        }
        return res
      },
      (err) => {
        console.log('......:响应拦截失败')

        const loadingInstance = ElLoading.service({
          lock: true,
          text: '正在请求数据',
          background: 'rgba(25,255,255,0.5)'
        }).close()

        return err
      }
    )
  }

  request(config: ETCRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res.data)
    })
  }
}

export default ETCRequest
