import { defineStore } from 'pinia'
import { ToolPlace, ToolState, Tool } from '@/models/Tool'
import projectIcon from '~@/icons/tools/project.svg'

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
        icon: projectIcon,
        component: null
      },
      {
        id: 1,
        name: 'Bookmarks',
        icon: projectIcon,
        component: null
      },
      {
        id: 2,
        name: 'Event',
        icon: projectIcon,
        component: null
      },
      {
        id: 3,
        name: 'Translate',
        icon: projectIcon,
        component: null
      },
      {
        id: 4,
        name: 'Color',
        icon: projectIcon,
        component: null
      }
    ],
    buttonsVisible: true
  }),
  actions: {
    initTools () {
      // this.buttons.topLeft.push(this.tools[0])
      // this.buttons.topRight.push(this.tools[0])
      this.buttons.leftRight.push(this.tools[0])
      // this.buttons.leftLeft.push(this.tools[0])
      // this.buttons.rightRight.push(this.tools[0])
      // this.buttons.rightLeft.push(this.tools[0])
      // this.buttons.bottomRight.push(this.tools[0])
      // this.buttons.bottomLeft.push(this.tools[0])
    },
    activateTool (tool: Tool, place: ToolPlace) {
      this.activeTools[place] = tool
    },
    disableTool (place: ToolPlace) {
      this.activeTools[place] = null
    },
    moveTool (tool_name: string, place: ToolPlace) {
      const find_tool: Tool | undefined = this.tools.find((el) => el.name === tool_name)
      if (find_tool) {
        const position: string | undefined = Object.keys(this.buttons)
          .find((button) => this.buttons[button].includes(find_tool))

        if (position && position !== place && this.buttons[position]) {
          this.buttons[position] = this.buttons[position].filter((tool: Tool) => tool !== find_tool)
          this.buttons[place].push(find_tool)
        }
      }
    },
    toggleButtons () {
      this.buttonsVisible = !this.buttonsVisible
    }
  }
})
