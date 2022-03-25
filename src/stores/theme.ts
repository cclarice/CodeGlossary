import { defineStore } from 'pinia'

type theme = 'dark' | 'light' | 'odan'

interface themeState {
  theme: theme,
  themes: Array<theme>
}

export const useTheme = defineStore('Theme', {
  state: (): themeState => ({
    theme: 'dark',
    themes: [
      'dark',
      'light',
      'odan'
    ]
  }),
  actions: {
    setTheme (theme: theme): void {
      window.localStorage.setItem('Theme', (this.theme = document.documentElement.dataset.theme = theme))
    },
    loadTheme (): void {
      window.localStorage.setItem('Theme',
        (document.documentElement.dataset.theme = this.theme = window.localStorage.getItem('Theme') as theme ||
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
