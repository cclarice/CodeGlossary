export type ToolPlace = 'leftRight' | 'leftLeft' | 'rightRight' | 'rightLeft' | 'bottomRight' | 'bottomLeft'

export interface Tool {
  id: number
  name: string
  icon?: string
  data?: { [key: string]: string | number | null | [] | Tool['data'] }
  component: string | null
}

export interface ToolState {
  // eslint-disable-next-line no-unused-vars
  buttons: { [key in ToolPlace | string]: Array<Tool> }
  // eslint-disable-next-line no-unused-vars
  activeTools: { [key in ToolPlace | string]: Tool | null }
  tools: Array<Tool>
  buttonsVisible: boolean
}
