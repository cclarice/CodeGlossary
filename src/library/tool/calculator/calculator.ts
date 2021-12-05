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

export const codeKeys = Object.keys(codes)

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