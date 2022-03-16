import { createPinia, defineStore } from 'pinia'

const pinia = createPinia()

export default pinia

export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
    name: 'Eduardo',
    isAdmin: true
  })
})
