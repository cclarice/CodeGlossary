export class CalculatorElement {
	type: string
	elem: any		// function | string
	arg0: string | null
	arg1: string | null

	constructor(elem) {
		this.type = typeof elem
		this.elem = this.type === 'object' ? elem.func : elem
		this.arg0 = this.type === 'object' && elem.arg0 ? elem.arg0 : null
		this.arg1 = this.type === 'object' && elem.arg1 ? elem.arg1 : null
	}

	get isFunction (): boolean {
		return this.type === 'object'
	}

	get isNumber (): boolean {
		return this.type === 'string' && this.elem[0] >= '0' && this.elem[0] <= '9'
	}

	get code (): string {
		if (this.type === 'string') {
			return this.elem
		} else {
			return this.elem()
		}
	}

	get view (): string {
		return this.toView
	}

	get toView(): string {
		return this.code
	}

	addNumber (number: string) {
		this.elem += number
	}

	backspace () {
		this.elem = this.elem.slice(0, this.elem.length - 1)
	}
}

export const codes = {
	'0': ['0', '0'],
	'1': ['1', '1'],
	'2': ['2', '2'],
	'3': ['3', '3'],
	'4': ['4', '4'],
	'5': ['5', '5'],
	'6': ['6', '6'],
	'7': ['7', '7'],
	'8': ['8', '8'],
	'9': ['9', '9'],
	'+': ['+', '+'],
	'-': ['-', '-'],
	'*': ['*', '×'],
	'/': ['/', '÷'],
	'%': ['%', '%'],
	'(': ['(', '('],
	')': [')', ')'],
	'r': ['pow(', '√'],
	'^': [
		function (string: string): string {
			return string + Math.pow(2, 2)
		}, '^'],
	's': ['Math.sin(', 'sin('],
	'c': ['Math.cos(', 'cos('],
	't': ['Math.tan(', 'tan('],
	'p': [' Math.PI', ''],
	'Backspace': [(string: string): string => {
		if (string[string.length - 1] === '(') {

		}
		return string.length >= 2 ? string.slice(0, string.length - 1) : ''
	}, ''],
	'Delete': (): string => {
		return ''
	}
}

export const codeList = {
	'0': '0',
	'1': '1',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	'6': '6',
	'7': '7',
	'8': '8',
	'9': '9',
	'+': '+',
	'-': '-',
	'*': '*',
	'/': '/',
	'%': '%',
	'(': '(',
	')': ')',
	'Delete':			calculatorDelete,
	'␡':					calculatorDelete,
	'Backspace':	calculatorBackspace,
	'␈': 					calculatorBackspace
}

export const codeKeys = Object.keys(codeList)

export function parseView (code) {
	let view = ''

	while (code) {

	}
}

// Последнее число
function getLastNumber () {

}

// Без последнего числа
function withoutLastNumber () {

}

function calculatorDelete (codeArray: Array<any>): Array<any> {
	return codeArray.length ? [] : codeArray
}

function calculatorBackspace (codeArray: Array<any>): Array<any> {
	const codeArrayLast = codeArray[codeArray.length - 1]

	if (codeArrayLast && codeArrayLast.isNumber && codeArrayLast.elem.length >= 2) {
		codeArrayLast.backspace()
		return codeArray
	}
	return codeArray.length >= 1 ? codeArray.slice(0, codeArray.length - 1) : codeArray
}