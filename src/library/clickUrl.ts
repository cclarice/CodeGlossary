/* eslint-disable */
export default function clickUrl (event: MouseEvent, url: string, router = false): void {
	console.log('clickUrl')
	if (event.target) {
		(event.target as HTMLElement).addEventListener('mouseup', (event: MouseEvent): void => {
			if (event.button === 0 || event.button === 2) {
				window.open(url)
			} else if (event.button === 1) {
				window.open(url, undefined, "popup")
			}
		}, { once: true })
	}
}
