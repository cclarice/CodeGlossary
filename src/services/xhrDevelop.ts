import { GET, HEAD } from '@/services/net'

export default {
	headSomething (link: string): Promise<XMLHttpRequest['response']> {
		return HEAD(link, 'UselessData')
	},
	getSomething (link: string): Promise<XMLHttpRequest['response']> {
		return GET(link, 'UselessData')
	},
}
