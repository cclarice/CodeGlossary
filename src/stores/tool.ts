import { defineStore } from 'pinia'
import { ToolPlace, ToolState, Tool } from '@/models/Tool'
import projectIcon from '~@/icons/tools/project.svg'
import bookmarksIcon from '~@/icons/tools/bookmarks.svg'
import colorIcon from '~@/icons/tools/color.svg'
import eventIcon from '~@/icons/tools/event.svg'
import translateIcon from '~@/icons/tools/translate.svg'

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
        component: null,
        place: null
      },
      {
        id: 1,
        name: 'Bookmarks',
        icon: bookmarksIcon,
        component: null,
        place: null
      },
      {
        id: 2,
        name: 'Event',
        icon: eventIcon,
        component: null,
        place: null
      },
      {
        id: 3,
        name: 'Translate',
        icon: translateIcon,
        component: null,
        place: null
      },
      {
        id: 4,
        name: 'Color',
        icon: colorIcon,
        component: null,
        place: null
      }
    ],
    phantomTool: {
      id: -1,
      name: '',
      icon: '',
      component: null,
      place: null
    },
    buttonsVisible: true
  }),
  actions: {
    initTools () {
      this.buttons.leftRight = [this.tools[0]]
      this.buttons.leftLeft = [this.tools[1]]
      this.buttons.bottomLeft = [this.tools[3], this.tools[4]]
      this.buttons.bottomRight = [this.tools[2]]

      for (const buttonsKey in this.buttons) {
        const tools = this.buttons[buttonsKey]

        for (const tool of tools) {
          tool.place = buttonsKey as ToolPlace
        }
      }
    },
    activateTool (tool: Tool, place: ToolPlace) {
      this.activeTools[place] = tool
    },
    disableTool (place: ToolPlace) {
      this.activeTools[place] = null
    },
    displayPhantom (place: ToolPlace, name = '', order = -1): void {
      if (this.buttons[place][order] !== this.phantomTool) {
        if (this.phantomTool.name !== name) {
          this.phantomTool.name = name
        }
        if (!this.buttons[place].includes(this.phantomTool)) {
          this.removeTool(this.phantomTool)
        }
        this.setToolPlace(this.phantomTool, place, order)
      }
    },
    // If tool has place and its deleted returns true
    removeTool (tool: Tool): boolean {
      if (tool.place) {
        this.buttons[tool.place] = this.buttons[tool.place].filter((t: Tool) => t.id !== tool.id)
        tool.place = null
        return true
      }
      return false
    },
    setToolPlaceWithOrder (tool: Tool, new_place: ToolPlace, o: number) {
      const buttons = this.buttons[new_place]
      const order = o < buttons.length ? o : buttons.length - 1
      if (buttons.includes(tool)) {
        if (buttons[order] !== tool && buttons[order] !== undefined) {
          const index = buttons.indexOf(tool)
          const swap = buttons[order]
          buttons[order] = tool
          buttons[index] = swap
        }
      } else {
        this.buttons[new_place].splice(order, 0, tool)
        tool.place = new_place
      }
    },
    setToolPlace (tool: Tool, new_place: ToolPlace, order = -1) {
      if (tool.place !== new_place) {
        this.removeTool(tool)
        if (order !== -1) {
          this.setToolPlaceWithOrder(tool, new_place, order)
        } else {
          this.buttons[new_place].push(tool)
          tool.place = new_place
        }
      } else if (order !== -1) {
        this.setToolPlaceWithOrder(tool, new_place, order)
      }
    },
    moveTool (tool: Tool, new_place: ToolPlace, order = -1) {
      this.removeTool(this.phantomTool)
      this.setToolPlace(tool, new_place, order)
    },
    toggleButtons () {
      this.buttonsVisible = !this.buttonsVisible
    }
  }
})
