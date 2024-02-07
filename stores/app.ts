import { defineStore } from 'pinia'

type StateProps = {
  sideBarIsOpen: boolean,
  useful: string
}
export const useAppStore = defineStore('app', {
  state: (): StateProps => ({
    sideBarIsOpen: false,
    useful: 'Nothing useful here'
  }),
  actions: {
    toggleSidebar () {
      this.sideBarIsOpen = !this.sideBarIsOpen
    }
  }
})
