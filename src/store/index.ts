import { createPinia, defineStore } from 'pinia'

const pinia = createPinia()

export default pinia

export const useTools = defineStore('Tools', {
  state: () => ({
    buttons: {
      topLeft: [],
      topRight: [],
      leftRight: [],
		  leftLeft: [],
		  rightRight: [],
		  rightLeft: [],
		  bottomRight: [],
		  bottomLeft: []
    },
    activeTools: {
      topLeft: null,
      topRight: null,
      leftRight: null,
		  leftLeft: null,
		  rightRight: null,
		  rightLeft: null,
		  bottomRight: null,
		  bottomLeft: null
    },
    tools: [

    ]
  })
})
