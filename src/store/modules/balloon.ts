import { GetterTree, MutationTree } from 'vuex'

interface IBalloonAction {
	action: () => {}
	text: string
}

interface IBalloon {
	id: number
	type: string | 'info' | 'question' | 'success' | 'warning' | 'error'
	head: string
	text: string
	actions: Array<IBalloonAction>
	duration: number
}

interface IBalloonState {
	balloons: IBalloon[]
}

const initialState = (): IBalloonState => ({
	balloons: []
})

const getters: GetterTree<IBalloonAction, IBalloonAction> = {
	getBalloons (state: IBalloonState): IBalloon[] {
		return state.balloons
	}
}

const mutations: MutationTree<IBalloonState> = {
	addBalloons (state: IBalloonState, balloon) {

	}
}

export default {
	namespaced: true,
	state: initialState,
	mutations,
	getters
}