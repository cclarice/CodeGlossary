import { createStore, ModuleTree } from 'vuex'
import theme, { IThemeState } from '@/store/modules/theme.ts'
import lang, { ILangState } from '@/store/modules/lang.ts'
import tool from '@/store/modules/tool'

export type IStore = ModuleTree<IThemeState> | ModuleTree<ILangState>

const store = createStore(<IStore>{
  modules: {
    lang,
    theme,
    tool
  }
})

export default store
