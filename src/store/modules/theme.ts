import { GetterTree, MutationTree } from 'vuex'
import dark from '@/style/dark'
import light from '@/style/light'
import store from '@/store'

export interface IThemeState {
	theme: 'light' | 'dark' | null
	themes: {
		dark: string,
		light: string
	}
	style: HTMLStyleElement | null
}

const initialState: IThemeState = {
	theme: null,
	themes: {
		dark,
		light
	},
	style: null
}

const getters: GetterTree<IThemeState, IThemeState> = {
	getTheme (state: IThemeState): string {
		return state.theme || 'dark'
	}
}

function reloadTheme (state: IThemeState): void {
	if (state.style && typeof state.theme === 'string') {
		state.style.innerHTML =
			state.themes[state.theme]
	}
}

const mutations: MutationTree<IThemeState> = {
	setTheme (state: IThemeState, theme: 'light' | 'dark'): void {
		state.theme = theme
		window.localStorage.setItem('Theme', state.theme)
		reloadTheme(state)
	},
	loadTheme (state: IThemeState): void {
		state.theme = <'light' | 'dark'>window.localStorage.getItem('Theme') ||
			(
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark'
			) || 'dark'
		window.localStorage.setItem('Theme', state.theme)
		reloadTheme(state)
	},
	initTheme (state: IThemeState): void {
		if (state.style === null) {
			state.style = document.createElement('style')
			state.style['type'] = 'text/css'
			state.style.id = 'theme'
			document.head.appendChild(state.style)
			store.commit('theme/loadTheme')
		}
	}
}

export default {
	namespaced: true,
	state: initialState,
	mutations,
	getters
}