import { createStore, ModuleTree } from 'vuex'
import theme, { IThemeState } from '@/store/modules/theme.ts'
import lang, { ILangState } from '@/store/modules/lang.ts'

type IStore = ModuleTree<IThemeState> | ModuleTree<ILangState>

const store = createStore(<IStore>{
  modules: {
    lang,
    theme
  }
})

export default store
