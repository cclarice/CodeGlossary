import { Component, Ref } from 'vue'

interface TableCellAdvanced {
  content: string | Component | Ref<string | boolean | number>

  column?: number
  row?: number
  icon?: string
  align?: HTMLElement['style']['textAlign']
  width?: string | number
  color?: string
  background?: string
  font?: string
  size?: string
  editable?: boolean
}

type TableCell = TableCellAdvanced | string

interface TableColumnGroup {
  span: number
  class: string
  static: boolean
}

type TableColumnGroups = Array<TableColumnGroup>

type TableRow = Array<TableCell>

export type TableBlock = Array<TableRow>

type TableHead = TableBlock
type TableBody = TableBlock
type TableFoot = TableBlock

export interface CellData {
  value: string
  block_name: 'head' | 'body' | 'foot'
  row_index: number
  cell_index: number
}

export default interface Table {
  head?: TableHead
  body?: TableBody
  foot?: TableFoot
  caption?: string
  column_group?: TableColumnGroups
}
