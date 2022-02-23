import { GetterTree, MutationTree } from 'vuex'

export interface IThemeState {
	theme: 'light' | 'dark' | null
}

const initialState: IThemeState = {
	theme: null
}

const getters: GetterTree<IThemeState, IThemeState> = {
	getTheme (state: IThemeState): string {
		return state.theme || 'dark'
	}
}

const mutations: MutationTree<IThemeState> = {
	setTheme (state: IThemeState, theme: 'light' | 'dark'): void {
		state.theme = theme
		window.localStorage.setItem('Theme', state.theme)
		document.documentElement.dataset.theme = theme
	},
	loadTheme (state: IThemeState): void {
		state.theme = <'light' | 'dark'>window.localStorage.getItem('Theme') ||
			( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') || 'dark'
		window.localStorage.setItem('Theme', state.theme)
		document.documentElement.dataset.theme = state.theme
	}
}

export default {
	namespaced: true,
	state: initialState,
	mutations,
	getters
}
