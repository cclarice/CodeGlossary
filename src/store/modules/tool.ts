import { GetterTree, MutationTree } from 'vuex'

export interface IToolState {
	stripes: { [key in 'leftRight' | 'leftLeft' | 'rightRight' | 'rightLeft' | 'bottomRight'| 'bottomLeft']: Array<ITool> },
	aTools: { [key in 'leftRight' | 'leftLeft' | 'rightRight' | 'rightLeft' | 'bottomRight'| 'bottomLeft']: ITool | null },
	tools: Array<ITool>
}

interface ITool {
	id: number
	name: string
	visible: boolean
	enabled: boolean
	component: string
}

const ve = {
	visible: false,
	enabled: false
}

const initialState = (): IToolState => ({
	stripes: {
		leftRight: [],
		leftLeft: [],
		rightRight: [],
		rightLeft: [],
		bottomRight: [],
		bottomLeft: []
	},
	// Active Tools
	aTools: {
		leftRight: null,
		leftLeft: null,
		rightRight: null,
		rightLeft: null,
		bottomRight: null,
		bottomLeft: null
	},
	tools: [
		{
			id: 0,
			name: 'Bookmarks',
			...ve,
			component: 'Bookmarks'
		},
		{
			id: 1,
			name: 'Project',
			...ve,
			component: 'Project'
		},
		{
			id: 2,
			name: 'Translate',
			...ve,
			component: 'Translate'
		},
		{
			id: 3,
			name: 'String',
			...ve,
			component: 'StringManipulator'
		},
		{
			id: 4,
			name: 'Color',
			...ve,
			component: 'ColorEditor'
		},
		{
			id: 5,
			name: 'Calculate',
			...ve,
			component: 'Calculate'
		}
	]
})

const mutations: MutationTree<IToolState> = {
	togEnableTool (state: IToolState, ident: ITool['name'] | ITool['id']) {
		const tool = state.tools
			.find(t => (typeof ident === 'number' ? t.id === ident : t.name === ident))

		if (tool) {
			tool.enabled = !tool.enabled
		}
	},
	togVisibleTool (state: IToolState, ident: ITool['name'] | ITool['id']) {
		const tool = state.tools
			.find(t => (typeof ident === 'number' ? t.id === ident : t.name === ident))

		if (tool) {
			tool.visible = !tool.visible
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