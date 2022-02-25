import store from '@/store'

export function GET (url: string, name = 'unknown', silent = true): Promise<XMLHttpRequest> {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		let   id = -1;
		xhr.open('GET', url)
		xhr.responseType = 'json'
		xhr.onload = () => {
			resolve(xhr)
		}
		xhr.onerror = () => {
			reject(xhr)
		}
		xhr.onabort = () => {
			reject(xhr)
		}
		xhr.onloadstart = () => {
			id = !silent && store.commit('event/add', {
				status: 'progress',
				type: 'xhr',
				name: 'progress',
				value: xhr
			}) || -1
			console.log(`${name} loadStart at ${Date.now()}`)
		}
		xhr.onloadend = () => {
			!silent && store.commit('event/done', id)
			console.log(`${name} loadEnd after ${Date.now()}`)
		}
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
