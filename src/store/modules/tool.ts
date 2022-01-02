import { DefineComponent } from 'vue'
import { GetterTree, MutationTree } from 'vuex'

export interface IToolState {
	tools: Array<ITool>
}

interface ITool {
	id: number
	name: string
	visible: boolean
	enabled: boolean
	component: () => DefineComponent
}

const initialState = (): IToolState => ({
	tools: []
})

const mutations: MutationTree<IToolState> = {
	togTool (state: IToolState, ident: ITool['name'] | ITool['id']) {
		const tool = state.tools
			.find(t =>
				(typeof ident === 'number' ? t.id === ident : t.name === ident)
			)

		if (tool) {
			tool.enabled = !tool.enabled
		}
	}
}

const getters: GetterTree<IToolState, IToolState> = {
	getTools (state: IToolState): IToolState['tools'] {
		return state.tools
	}
}

export default {
	namespaced: true,
	state: initialState,
	mutations,
	getters
}