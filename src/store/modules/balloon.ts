import { GetterTree, MutationTree } from 'vuex'

interface IBalloonAction {
	action: () => void
	text: 	string
}

interface IBalloon {
	id:				null | number
	type:			null | IBalloonType
	head:			null | string
	text:			null | string
	actions:	null | Array<IBalloonAction>
	duration: null | number
}

type IBalloonType = 'info' | 'question' | 'success' | 'warning' | 'error'

interface IBalloonState {
	balloons: IBalloon[]
	icons: { [key: string]: string }
}

const initialState = (): IBalloonState => ({
	balloons: [
		{
			id: 1,
			type: 'info',
			head: 'Maven projects need to be imported',
			text: 'Random text here right now generated like frog in the my swam.',
			actions: [
				{
					action: () => console.log('Request Accepted!'),
					text: 'Accept'
				},
				{
					action: () => console.log('Request Disciplined!'),
					text: 'Reject'
				}
			],
			duration: 5000
		}
	],
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
	},
	getBalloonsIcons (state: IBalloonState): IBalloonState['icons'] {
		return state.icons
	}
}

const mutations: MutationTree<IBalloonState> = {
	addBalloons (state: IBalloonState, balloon: IBalloon) {
		if (!balloon.id)				{ balloon.id = state.balloons.length + Date.now() }
		if (!balloon.type)			{ balloon.type = 'info' }
		if (!balloon.duration)	{ balloon.duration = 5000 }
		state.balloons.push(balloon)
		setTimeout(() => {
			state.balloons.filter(_balloon => _balloon.id !== balloon.id)
		}, balloon.duration)
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