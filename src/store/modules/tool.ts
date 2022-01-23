import { GetterTree, MutationTree } from 'vuex'

export interface IToolState {
	stripes: { [key in toolPosition | string]: Array<ITool> }
	aTools: { [key in toolPosition | string]: ITool | null }
	tools: Array<ITool>
	show: boolean
}

type toolPosition = 'leftRight' | 'leftLeft' | 'rightRight' | 'rightLeft' | 'bottomRight' | 'bottomLeft'

interface ITool {
	id: number
	name: string
	icon?: string
	data?: { [key: string]: string | number | null | [] | ITool['data'] }
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
			icon: require('@/assets/icons/stripe/bookmarks.svg'),
			component: 'Bookmarks'
		},
		{
			id: 1,
			name: 'Project',
			...ve,
			icon: require('@/assets/icons/stripe/project.svg'),
			component: 'Project'
		},
		{
			id: 2,
			name: 'Translate',
			...ve,
			icon: require('@/assets/icons/stub.svg'),
			component: 'Translate'
		},
		{
			id: 3,
			name: 'String',
			...ve,
			icon: require('@/assets/icons/stub.svg'),
			component: 'StringManipulator'
		},
		{
			id: 4,
			name: 'Color',
			...ve,
			icon: require('@/assets/icons/stub.svg'),
			component: 'ColorEditor'
		},
		{
			id: 5,
			name: 'Calculate',
			...ve,
			icon: require('@/assets/icons/stripe/calculate.svg'),
			component: 'Calculate'
		}
	],
	show: true
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
	},
	initTools (state: IToolState) {
		const local = localStorage.getItem('tool') as string | null
		const parse: IToolState | null = typeof local === 'string' ? JSON.parse(local) : null
		const stripes = state.stripes
		function addToolToStripe (toolName: string, where: IToolState['stripes'][string] ) {
			const tool = state.tools.find(tool => tool.name === toolName) as ITool

			if (tool) {
				where.push(tool)
			}
		}
		if (parse) {
			state.stripes = parse.stripes
			state.aTools = parse.aTools
			state.tools = parse.tools
			state.show = parse.show
		} else if (!Object.values(state.stripes).map(stripe => stripe.length).reduce((a, b) => a + b)) {
			addToolToStripe('Project', stripes.leftRight)
			addToolToStripe('Bookmarks', stripes.leftLeft)
			addToolToStripe('Calculate', stripes.leftLeft)
		}
	},
	toggleStripesShown (state: IToolState) {
		state.show = !state.show
	}
}

const getters: GetterTree<IToolState, IToolState> = {
	getStripes (state: IToolState): IToolState['stripes'] {
		return state.stripes
	},
	getATools (state: IToolState): IToolState['aTools'] {
		return state.aTools
	},
	getTools (state: IToolState): IToolState['tools'] {
		return state.tools
	},
	getToolByIdent (state: IToolState, i: string | number): IToolState['tools'][number] | undefined {
		return state.tools.find(t => t.id === i || t.name === i)
	},
	stripesShown (state: IToolState): IToolState['show'] {
		return state.show
	}
}

export default {
	namespaced: true,
	state: initialState,
	mutations,
	getters
}