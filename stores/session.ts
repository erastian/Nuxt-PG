import { useApi } from '~/composables/useApi'

type IUser = {
  id: string
  username: string
  email: string
  role: string
}

type StateProps = {
  user: IUser | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

type LoginProps = {
  email: string
  password: string
}
type LoginReturningProps = {
  user: IUser
  accessToken: string
}

type RegisterProps = {
  email: string
  password: string
  username: string
}

export const useSessionStore = defineStore('session', {
  state: (): StateProps => ({
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoading: false
  }),
  actions: {
    async login(loginData: LoginProps) {
      this.isLoading = true

      try {
        const { data } = await useApi().post<LoginReturningProps>('/auth/login', loginData)
        this.accessToken = data.accessToken
        localStorage.setItem('accessToken', data.accessToken)
        this.user = data.user
        this.isAuthenticated = true
        this.isLoading = false

        navigateTo('/')
      } catch (e: Error | any) {
        throw e.message
      }
    },

    register(registerData: RegisterProps) {
      console.log(registerData) // eslint-disable-line no-console
    },

    async logout() {
      try {
        await usePrivateApi().get('/auth/logout')
        this.accessToken = null
        localStorage.removeItem('accessToken')
        this.user = null
        this.isAuthenticated = false
      } catch (e: Error | any) {
        throw e.message
      }
    },

    async getUser() {
      try {
        this.isLoading = true
        const { data } = await usePrivateApi().get('/users/profile')
        this.user = data.user
        this.accessToken = localStorage.getItem('accessToken')
        this.isAuthenticated = true
        this.isLoading = false
      } catch (e: Error | any) {
        this.isLoading = false
        throw e.message
      }
    },

    async refreshToken() {
      try {
        console.log('Refreshing token') // eslint-disable-line no-console
        const { data } = await useApi().get('/auth/token')
        this.accessToken = data.accessToken
        localStorage.setItem('accessToken', data.accessToken)
      } catch (e: Error | any) {
        throw e.message
      }
    }
  },
  getters: {
    isAuth(state) {
      return state.isAuthenticated
    },

    userRole(state) {
      return state.user?.role
    }
  }
})
