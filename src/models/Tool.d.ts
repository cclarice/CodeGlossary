/* eslint-disable no-unused-vars */

export type ToolPlace = 'topLeft' | 'topRight' | 'leftRight' | 'leftLeft' |
                    'rightRight' | 'rightLeft' | 'bottomRight' | 'bottomLeft'

export interface Tool {
  id: number
  name: string
  icon?: string
  data?: any
  component: string | null
  place: ToolPlace | null
}

export interface ToolState {
  buttons: { [key in ToolPlace | string]: Array<Tool> }
  activeTools: { [key in ToolPlace | string]: Tool | null }
  tools: Array<Tool>
  buttonsVisible: boolean,
  phantomTool: Tool
}
