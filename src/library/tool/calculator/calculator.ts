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

	get isWaitArgument (): boolean {
		return this.type === 'string' && this.elem[this.elem.length - 1] === ','
	}

	get isNumber (): boolean {
		return this.type === 'string' && (this.elem[0] === '.' || (this.elem[0] >= '0' && this.elem[0] <= '9'))
	}

	get getNumberFromArgument (): string {
		return this.elem.match(/\d+/)
	}

	setToNumberFromArgument (): void {
		this.elem = this.getNumberFromArgument
	}

	get code (): string {
		if (this.type === 'string') {
			return this.elem
		} else {
			return this.elem()
		}
	}

	get view (): string {
		return
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
	'.': '.',
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
	'␈': 					calculatorBackspace,
	'^': 					calculatorPow,
	's': 					'Math.sin(',
	'c':					'Math.cos(',
	't':					'Math.tan(',
	'p':          'Math.PI'
}

export const codeKeys = Object.keys(codeList)


// Последнее число
function getLastNumber (codeArray) {
	return codeArray.length && isLastNumber(codeArray) ? codeArray[codeArray.length - 1] : null
}

// Без последнего числа
function withoutLastNumber (codeArray: Array<any>): Array<any> {
	const sad = codeArray.slice(0, codeArray.length - (isLastNumber(codeArray) ? 1 : 0))
	console.log(sad)
	return sad
}

// Последний элемент это число
function isLastNumber (codeArray: Array<any>): boolean {
	return codeArray[codeArray.length - 1].isNumber
}

function calculatorDelete (codeArray: Array<any>): Array<any> {
	return codeArray.length ? [] : codeArray
}

function calculatorBackspace (codeArray: Array<any>): Array<any> {
	const codeArrayLast = codeArray[codeArray.length - 1]

	console.log(codeArrayLast, codeArrayLast.isWaitArgument)
	if (codeArrayLast && codeArrayLast.isWaitArgument) {
		codeArrayLast.setToNumberFromArgument()

		return codeArray
	}

	if (codeArrayLast && codeArrayLast.isNumber && codeArrayLast.elem.length >= 2) {
		codeArrayLast.backspace()
		return codeArray
	}
	return codeArray.length >= 1 ? codeArray.slice(0, codeArray.length - 1) : codeArray
}

function calculatorPow (codeArray: Array<any>): Array<any> {
	if (getLastNumber(codeArray) !== null) {
		const ret = withoutLastNumber(codeArray)
		ret.push(new CalculatorElement(`Math.pow(${getLastNumber(codeArray).code},` ))
		return ret
	} else {
		return codeArray
	}
}

function strchars (str: string, char: string): number {
	let ret = 0
	let ptr = 0

	while (str[ptr]) {
		if (str[ptr] === char) {
			ret++
		}
		ptr++
	}
	return ret
}


export function autoCloseBrackets (string: string): string {
	if (!strchars(string, '(') || strchars(string, '(') === strchars(string, ')')) {
		return string
	} else {
		while (strchars(string, '(') !== strchars(string, ')'))
			string += ')'
		return string
	}
}
