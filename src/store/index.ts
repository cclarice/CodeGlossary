import { createStore, ModuleTree } from 'vuex'
import theme, { IThemeState } from '@/store/modules/theme'
import lang, { ILangState } from '@/store/modules/lang'
import tool from '@/store/modules/tool'
import balloon from '@/store/modules/balloon'
import event from '@/store/modules/event'

export type IStore = ModuleTree<IThemeState> | ModuleTree<ILangState>

const store = createStore(<IStore>{
  modules: {
    lang,
    theme,
    tool,
    balloon,
    event
  }
})

export default store
