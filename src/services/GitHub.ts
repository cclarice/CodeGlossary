import { GET } from '@/services/net'

export default {
	getRepo (repLink: string): Promise<XMLHttpRequest> {
		return GET(`https://api.github.com/repos${repLink}`)
	},
	getRepoContributors (repLink: string): Promise<XMLHttpRequest> {
		return GET(`https://api.github.com/repos${repLink}/contributors`)
	}
}
