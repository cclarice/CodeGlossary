import { GetterTree, MutationTree } from 'vuex'

export type language = 'en_us' | 'ru_ru'
export type languages = language[]
export type requireLanguages = {[key in language]: string}

export interface ILangState {
	languages: languages
	icons: requireLanguages
	lang: language
	locals: {[key in language]: () => Promise<{default: {[key: string]: string}}>} | null
	local: {[key: string]: string} | null
}

const languages: requireLanguages = {
	'en_us': require('@/assets/icons/lang/en_us.svg'),
	'ru_ru': require('@/assets/icons/lang/ru_ru.svg')
}

const initialState = (): ILangState => ({
	languages: <languages>Object.keys(languages),
	icons: languages,
	lang: <language>Object.keys(languages)[0],
	locals: null,
	local: null
})

const mutations: MutationTree<ILangState> = {
	setLanguages (state: ILangState, languages: ILangState['languages']): ILangState['languages'] {
		return state.languages = languages
	},
	setLang (state: ILangState, lang: ILangState['lang']): ILangState['lang'] {
		state.lang = lang
		window.localStorage.setItem('Lang', state.lang)
		if (state.locals !== null && state.locals[state.lang]) {
			state.locals[state.lang]()
				.then((module: {default: ILangState['local']}) => {
					state.local = module.default
				})
		}
		return state.lang
	},
	initLang (state: ILangState) {
		if (localStorage.getItem('Lang')) {
			state.lang = <language>localStorage.getItem('Lang')
		} else if (navigator.language.includes('ru') ||
			navigator.language.includes('RU')) {
			state.lang = 'ru_ru'
		}
	},
	setLocals (state: ILangState, locals: ILangState['locals']) {
		state.locals = locals
		if (locals !== null && locals[state.lang]) {
			locals[state.lang]()
				.then((module: {default: ILangState['local']}) => {
					state.local = module.default
				})
		}
	}
}

const getters: GetterTree<ILangState, ILangState> = {
	getLanguages (state: ILangState): ILangState['languages'] {
		return state.languages
	},
	getLang (state: ILangState): ILangState['lang'] {
		return state.lang
	},
	getIcons (state: ILangState): ILangState['icons'] {
		return state.icons
	},
	getLocal (state: ILangState): ILangState['local'] {
		return state.local || {}
	}
}

export default {
	namespaced: true,
	state: initialState,
	mutations,
	getters
}