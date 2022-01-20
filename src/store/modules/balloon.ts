import { GetterTree, MutationTree } from 'vuex'

interface IBalloonAction {
	action: () => boolean
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
	balloons: IBalloon[],
	icons: { [key: string]: string }
}

const initialState = (): IBalloonState => ({
	balloons: [],
	icons: {
		info:			require('@/assets/icons/status/info.svg'),
		question:	require('@/assets/icons/status/question.svg'),
		success:	require('@/assets/icons/status/success.svg'),
		warning:	require('@/assets/icons/status/warning.svg'),
		error:		require('@/assets/icons/status/error.svg'),
	}
})

const getters: GetterTree<IBalloonState, IBalloonState> = {
	getBalloons (state: IBalloonState): IBalloonState['balloons'] {
		return state.balloons
	}
}

const mutations: MutationTree<IBalloonState> = {
	addBalloons (state: IBalloonState, balloon: ) {

	},
	removeBalloonById (state: IBalloonState, id: number) {
		state.balloons.filter(balloon => balloon.id !== id)
	}
}

export default {
	namespaced: true,
	state: initialState,
	mutations,
	getters
}