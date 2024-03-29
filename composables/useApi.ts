import type { AxiosInstance } from 'axios'
import { axiosInstance, axiosPrivateInstance } from '~/utils/axios'
import { useSessionStore } from '~/stores/session'

export function usePrivateApi (): AxiosInstance {
  const sessionStore = useSessionStore()

  watchEffect(() => {
    axiosPrivateInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
        }
        return config
      },
      error => Promise.reject(error)
    )

    axiosPrivateInstance.interceptors.response.use(
      response => response,
      async (error) => {
        const prevRequest = error.config
        if (error.response.status === 403 && !prevRequest._retry) {
          prevRequest._retry = true

          try {
            await sessionStore.refreshToken()
            
            prevRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`

            return axiosPrivateInstance(prevRequest)
          } catch (e) {
            return Promise.reject(e)
          }
        }
        return Promise.reject(error)
      }
    )
  })
  return axiosPrivateInstance
}

export function useApi () {
  return axiosInstance
}
