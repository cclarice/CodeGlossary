interface XHROptions {
	silent?: boolean
	type: XMLHttpRequest['responseType']
	log: Console['log'] | null
}

type XHROptionsType = XHROptions | null

const xhrDefaultOptions: XHROptions = {
	silent: false,
	type: 'json',
	log: console.log
}

function createOnNotLoad (method: string, reason: string, name: string, reject: (reason: XMLHttpRequest) => void) {
	return function (event: ProgressEvent): void {
		console.error(method, reason, name, event)
		reject((event.currentTarget as XMLHttpRequest).response)
	}
}

function runXHR (method: string, url: string, name: string, options: XHROptionsType): Promise<XMLHttpRequest['response']> {
	if (!options) {
		options = xhrDefaultOptions
	} else {
		options = {...xhrDefaultOptions, ...options}
	}
	return XHR(method, url, name, options)
}

function XHR (method: string, url: string, name = 'unknown', options = xhrDefaultOptions): Promise<XMLHttpRequest['response']> {
	return new Promise((resolve, reject) => {
		const log = options.log
		const xhr = new XMLHttpRequest()
		xhr.open(method, url)
		xhr.responseType = options.type
		// 1 On load start
		xhr.onloadstart = (event) => {
			log && log(method, 'onloadstart', name, event)
		}
		// 2 On progress
		xhr.onprogress = (event) => {
			log && log(method, 'onprogress', name, event)
		}
		// 3 On load
		xhr.onload = (event) => {
			log && log(method, 'onload', name, event)
			resolve((event.currentTarget as XMLHttpRequest).response)
		}
		// 3 Error | Abort | Timeout
		xhr.onerror = createOnNotLoad(method, 'error', name, reject)
		xhr.onabort = createOnNotLoad(method, 'abort', name, reject)
		xhr.ontimeout = createOnNotLoad(method, 'timeout', name, reject)
		xhr.send()
	})
}

export function GET (url: string, name = 'unknown', options: XHROptionsType = null): Promise<XMLHttpRequest['response']> {
	return runXHR('GET', url, name, options)
}

export function HEAD (url: string, name = 'unknown', options: XHROptionsType = null): Promise<XMLHttpRequest['response']> {
	return runXHR('HEAD', url, name, options)
}

// export function _GET (url: string, name = 'unknown', silent = true): Promise<XMLHttpRequest> {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()
// 		let   id = -1;
// 		xhr.open('GET', url)
// 		xhr.responseType = 'json'
// 		// LOADED
// 		xhr.onload = (event) => {
// 			console.log(`XHR onload      N[${name}] T[${event.timeStamp.toLocaleString()}] R[${xhr.readyState}]`, event)
// 			resolve(xhr)
// 		}
// 		// ERROR
// 		xhr.onerror = (event) => {
// 			console.log(`XHR onerror     N[${name}] T[${event.timeStamp.toLocaleString()}] R[${xhr.readyState}]`, event)
// 			reject(xhr)
// 		}
// 		// ABORT
// 		xhr.onabort = (event) => {
// 			console.log(`XHR onabort     N[${name}] T[${event.timeStamp.toLocaleString()}] R[${xhr.readyState}]`, event)
// 			reject(xhr)
// 		}
// 		// ONLOADSTART
// 		xhr.onloadstart = (event) => {
// 			console.log(`XHR onloadstart N[${name}] T[${event.timeStamp.toLocaleString()}] R[${xhr.readyState}]`, event)
// 			id = !silent && store.commit('event/add', {
// 				status: 'progress',
// 				type: 'xhr',
// 				name: 'progress',
// 				value: xhr
// 			}) || -1
// 		}
// 		// PROGRESS
// 		xhr.onprogress = (event) => {
// 			console.log(`XHR onprogress  N[${name}] T[${event.timeStamp.toLocaleString()}] R[${xhr.readyState}]`, event)
// 		}
// 		// LOAD END
// 		xhr.onloadend = (event) => {
// 			!silent && store.commit('event/done', id)
// 			console.log(`XHR onloadend   N[${name}] T[${event.timeStamp.toLocaleString()}] R[${xhr.readyState}]`, event)
// 		}
// 		xhr.onreadystatechange = (event) => {
// 			console.log(`XHR readystate  N[${name}] T[${event.timeStamp.toLocaleString()}] R[${xhr.readyState}]`, event)
// 		}
// 		xhr.send()
// 	})
// }

// export function HEAD (url: string, name = 'unknown') {
// 	return new Promise ((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()
// 		xhr.open('HEAD', url)
// 		xhr.onload = (event) => {
// 			console.log(`XHR onload      N[${name}] T[${event.timeStamp.toLocaleString()}] R[${xhr.readyState}]`, event)
// 			resolve(xhr)
// 		}
// 		xhr.send()
// 	})
// }

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
