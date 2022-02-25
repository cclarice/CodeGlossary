import { MutationTree } from 'vuex'

interface IEventState {
  events: Array<Event>
	progress: Array<Event>
}

interface Event {
	id?: number
	status: 'progress' | 'error' | 'abort' | 'done'
	type: string
	name: string
	value?: unknown
	progress?: {
		value: number
		done: number
	}
	events?: Array<Event>
}

const initialState = (): IEventState => ({
	events: [],
	progress: []
})

const mutations: MutationTree<IEventState> = {
	add (state: IEventState, event: Event): number {
		event.id = state.events.length
		state.events.push(event)
		if (event.status === 'progress') {
			state.progress.push(event)
		}
		return event.id
	},
	done (state: IEventState, id: number): void {
		if (state.events[id].status === 'progress') {
			state.progress = state.progress.filter((event) => event.id !== id)
		}
		state.events[id].status = 'done'
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
	}
}

export default {
	namespaced: true,
	state: initialState,
	mutations
}
