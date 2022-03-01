import { MutationTree, ActionTree } from 'vuex'

interface IEventState {
  events: Array<EventLog>
	progress: Array<EventLog>
}

export interface EventLog {
	id?: number
	status: 'progress' | 'error' | 'abort' | 'done'
	type: string
	name: string
	value?: unknown
	loaded?: number
	total?: number
	abort?: XMLHttpRequest['abort']
	events?: Array<EventLog>
}

const initialState = (): IEventState => ({
	events: [],
	progress: []
})

const mutations: MutationTree<IEventState> = {
	add (state: IEventState, event: EventLog): number {
		event.id = state.events.length
		state.events.push(event)
		if (event.status === 'progress') {
			state.progress.push(event)
		}
		return event.id
	},
	progress (state: IEventState, event: EventLog): void {
		const progress = state.progress.find((e) => e.id === event.id)
		if (progress) {
			progress.loaded = event.loaded
		}
	},
	done (state: IEventState, event: EventLog): void {
		if (event.id || event.id === 0) {
			if (state.events[event.id].status === 'progress') {
					state.progress = state.progress.filter((e) => e.id !== event.id)
				}
			state.events[event.id].value = event.value
			state.events[event.id].status = 'done'
		}
	},
	error (state: IEventState, id: number): void {
		if (state.events[id].status === 'progress') {
			state.progress = state.progress.filter((event) => event.id !== id)
		}
		state.events[id].status = 'error'
	},
	abort (state: IEventState, id: number): void {
		if (state.events[id].status === 'progress') {
			state.progress = state.progress.filter((event) => event.id !== id)
		}
		state.events[id].status = 'abort'
	},
	remove (state: IEventState, id: number): void {
		state.events = state.events.filter((event) => event.id !== id || event.status !== 'progress')
	}
}

const actions: ActionTree<IEventState, IEventState> = {
	add ({ state, commit }, event: EventLog) {
		event.id = state.events.length
		commit('add', event)
		return event.id
	}
}

export default {
	namespaced: true,
	state: initialState,
	actions,
	mutations
}
