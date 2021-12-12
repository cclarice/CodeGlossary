import IMainLayout, { IMainLayoutStripeButton, IMainLayoutElems, IMainLayoutStripe } from '@/models/IMainLayout'
import { MutationTree, ActionTree, GetterTree } from 'vuex'

const initialState = (): IMainLayout => (
  {
    theme: null,
    elems: {
      stripeLeft: {
        side: 'Left',
        left: [],
        right: []
      },
      stripeRight: {
        side: 'Right',
        left: [],
        right: []
      },
      stripeBottom: {
        side: 'Bottom',
        left: [],
        right: []
      },
      stripes: [
        {
          id: 0,
          icon: require('@/assets/icons/stripes/navigation.svg'),
          name: 'Navigation',
          component: () => import('@/components/layout/main/tool/navigation/MainToolNavigation.vue'),
          active: false,
          location: 'stripeLeft',
          side: 'right',
          hidden: false
        },
        {
          id: 1,
          icon: require('@/assets/icons/stripes/favorites.svg'),
          name: 'Favorites',
          component: null,
          active: false,
          location: 'stripeLeft',
          side: 'left',
          hidden: false
        },
        {
          id: 2,
          icon: require('@/assets/icons/stripes/calculate.svg'),
          name: 'Calculate',
          component: () => import('@/components/layout/main/tool/calculate/MainToolCalculate.vue'),
          active: false,
          location: 'stripeLeft',
          side: 'left',
          hidden: false
        }
      ],
      navbar: {
        path: [],
        toolbar: []
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
  setDefaultStripes (state: IMainLayout) {
    const stripes = state.elems.stripes

    for (const stripe of stripes) {
      if (!stripe.hidden) {
        state.elems[stripe.location][stripe.side].push(stripe)
      }
    }
  },
  toggleStripe (state: IMainLayout, stripeId: number) {
    const stripe  = state.elems.stripes.find(stripe => stripe.id === stripeId)

    if (stripe) {
      state.elems[stripe.location][stripe.side].forEach((stripeButton) => {
        if (stripeButton !== stripe) {
          stripeButton.active = false
        }
      })
      stripe.active = !stripe.active
    }
  },
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
    state.elems.toolbarHidden = !state.elems.toolbarHidden
    if (!state.elems.toolbarHidden) {
      state.elems.toolbarHover = false
    }
  },
  enterToolbar (state: IMainLayout) {
    if (state.elems.toolbarHidden === true) {
      state.elems.toolbarHover = true
    }
  },
  leaveToolbar (state: IMainLayout) {
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
    return state.elems.toolbarHover
  },

  /** Stripe Getters **/
  getStripes (state: IMainLayout) {
    return state.elems
  }
}

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters
}