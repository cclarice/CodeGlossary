export function GET (url: string): Promise<XMLHttpRequest> {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url)
		xhr.responseType = 'json'
		xhr.onload = () => { resolve(xhr) }
		xhr.onerror = () => { reject(xhr) }
		xhr.send()
	})
}

// TODO
// export function POST (url: string): Promise<XMLHttpRequest> {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()
// 		xhr.open('GET', url)
// 		xhr.responseType = 'json'
// 		xhr.onload = () => { resolve(xhr) }
// 		xhr.onerror = () => { reject(xhr) }
// 	})
// }