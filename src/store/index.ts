import { createStore, ModuleTree } from 'vuex'
import theme, { IThemeState } from '@/store/modules/theme.ts'
import lang, { ILangState } from '@/store/modules/lang.ts'
import tool from '@/store/modules/tool'
import balloon from '@/store/modules/balloon'

export type IStore = ModuleTree<IThemeState> | ModuleTree<ILangState>

const store = createStore(<IStore>{
  modules: {
    lang,
    theme,
    tool,
    balloon
  }
})

export default store
