import IMainLayout, { IMainLayoutStripeButton, IMainLayoutElems, IMainLayoutStripe } from '@/models/IMainLayout'
import { MutationTree, ActionTree, GetterTree } from 'vuex'

const initialState = (): IMainLayout => (
  {
    theme: null,
    elems: {
      stripeRight: {
        left: [],
        right: []
      },
      stripeLeft: {
        left: [],
        right: []
      },
      stripeBottom: {
        left: [],
        right: []
      },
      navbar: {
        path: [],
        toolbar: []
      },
      tools: {
        leftLeft: null,
        leftRight: null,
        rightLeft: null,
        rightRight: null,
        bottomLeft: null,
        bottomRight: null
      },
      toolbarHidden: false,
      toolbarHover: false
    }
  }
)

const mutations = <MutationTree<IMainLayout>> {
  setTheme (state: IMainLayout, theme: string | null) {
    state.theme = theme
  },

  /** Stripe Mutations **/
  removeStripeButton (state: IMainLayout, toRemove: IMainLayoutStripeButton) {
    const elems: IMainLayoutElems = state.elems
    const stripes: Array<IMainLayoutStripe> = [elems.stripeLeft, elems.stripeRight, elems.stripeBottom]
    const filter = e => e.name !== toRemove
    for (const stripe of stripes) {
      stripe.left.filter(filter)
      stripe.right.filter(filter)
    }
  },
  addStripeButton (state: IMainLayout, add: { who: IMainLayoutStripeButton, to: string }) {
    state.elems[add.to.split('.')[0]][add.to.split('.')[1]].push(add.who)
  },
  moveStripeButton (state: IMainLayout, move: { who: IMainLayoutStripeButton, to: string }) {
    this.removeStripeButton(state, move.who)
    this.addStripeButton(state, move)
  },

  /** Toolbar Mutations **/
  toggleToolbar (state: IMainLayout) {
    console.info('toggleToolbar')
    state.elems.toolbarHidden = !state.elems.toolbarHidden
    if (!state.elems.toolbarHidden) {
      state.elems.toolbarHover = false
    }
  },
  enterToolbar (state: IMainLayout) {
    console.info('enterToolbar')
    console.log(state.elems.toolbarHidden)
    if (state.elems.toolbarHidden === true) {
      state.elems.toolbarHover = true
    }
  },
  leaveToolbar (state: IMainLayout) {
    console.info('leaveToolbar')
    state.elems.toolbarHover = false
  }
}

const actions = <ActionTree<IMainLayout, any>> {
  loadMainLayout () {

  },
  saveMainLayout () {

  }
}

const getters = <GetterTree<IMainLayout, any>> {

  /** Toolbar Getters **/
  getToolbarHidden (state: IMainLayout) {
    return state.elems.toolbarHidden
  },
  getToolbarHover (state: IMainLayout) {
    console.log('getToolbarHover:', state.elems.toolbarHover)
    return state.elems.toolbarHover
  }

  /** Stripe Getters **/
}

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters
}