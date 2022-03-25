import { Component } from 'vue'

interface TableCellAdvanced {
  content: string | Component
  column?: number
  row?: number
  icon?: string
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

export default interface Table {
  head?: TableHead
  body?: TableBody
  foot?: TableFoot
  caption?: string
  column_group?: TableColumnGroups
}
