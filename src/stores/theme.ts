import { defineStore } from 'pinia'

interface themeState {
  theme: string,
  themes: Array<string>
}


export const useTheme = defineStore('Theme', {
  state: () => ({
    theme: 'dark',
    themes: [
      'dark',
      'light',
      'odan'
    ]
  }),
  actions: {
    setTheme (theme: string): void {
		  window.localStorage.setItem('Theme', (this.theme = document.documentElement.dataset.theme = theme))
    },
    loadTheme (): void {
      window.localStorage.setItem('Theme',
        (document.documentElement.dataset.theme = this.theme = window.localStorage.getItem('Theme') ||
          (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
          'dark'))
    },
    cycleTheme (forward = true): void {
      const index = this.themes.indexOf(this.theme)

      if (forward) {
        this.setTheme(this.themes[index + 1] || this.themes[0])
      } else {
        this.setTheme(this.themes[index - 1] || this.themes[this.themes.length - 1])
      }
    }
  }
})
