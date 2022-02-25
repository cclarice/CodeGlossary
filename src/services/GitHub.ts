import { GET } from '@/services/net'

export default {
	getRepo (repLink: string): Promise<XMLHttpRequest> {
		return GET(`https://api.github.com/repos${repLink}`, 'Github API repository')
	},
	getRepoContributors (repLink: string): Promise<XMLHttpRequest> {
		return GET(`https://api.github.com/repos${repLink}/contributors`, 'Github API contributors')
	},
	getRepoLanguages (repLink: string): Promise<XMLHttpRequest> {
		return GET(`https://api.github.com/repos${repLink}/languages`, 'Github API languages')
	}
}
