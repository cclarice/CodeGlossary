import { GET } from '@/services/net'

export default {
	getSomething (link: string): Promise<XMLHttpRequest['response']> {
		return GET(link, 'UselessData')
	},
}
