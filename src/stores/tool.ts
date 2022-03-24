import { defineStore } from 'pinia'

type ToolPlace = 'leftRight' | 'leftLeft' | 'rightRight' | 'rightLeft' | 'bottomRight' | 'bottomLeft'

export interface ToolState {
  // eslint-disable-next-line no-unused-vars
  buttons: { [key in ToolPlace | string]: Array<Tool> }
  // eslint-disable-next-line no-unused-vars
  activeTools: { [key in ToolPlace | string]: Tool | null }
  tools: Array<Tool>
  buttonsVisible: boolean
}

interface Tool {
  id: number
  name: string
  icon?: string
  data?: { [key: string]: string | number | null | [] | Tool['data'] }
  component: string | null
}

export const useTools = defineStore('Tools', {
  state: (): ToolState => ({
    buttons: {
      topLeft: [],
      topRight: [],
      leftRight: [],
      leftLeft: [],
      rightRight: [],
      rightLeft: [],
      bottomRight: [],
      bottomLeft: []
    },
    activeTools: {
      topLeft: null,
      topRight: null,
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
        name: 'Project',
        icon: '@/assets/icons/tools/project.svg',
        component: null
      },
      {
        id: 1,
        name: 'Bookmarks',
        icon: '@/assets/icons/tools/project.svg',
        component: null
      },
      {
        id: 2,
        name: 'Event',
        icon: '@/assets/icons/tools/project.svg',
        component: null
      },
      {
        id: 3,
        name: 'Translate',
        icon: '@/assets/icons/tools/project.svg',
        component: null
      },
      {
        id: 4,
        name: 'Color',
        icon: '@/assets/icons/tools/project.svg',
        component: null
      }
    ],
    buttonsVisible: true
  }),
  actions: {
    activateTool (tool: Tool, place: ToolPlace) {
      this.activeTools[place] = tool
    },
    disableTool (place: ToolPlace) {
      this.activeTools[place] = null
    }
  }
})
