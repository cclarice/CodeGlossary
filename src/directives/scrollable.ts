import { Directive } from 'vue'

const vScrollable: Directive = {
  mounted: (scrollable: HTMLElement) => {
    scrollable.style.overflow = 'hidden'
    scrollable.style.maxWidth = '100%'
    scrollable.style.maxHeight = '100%'
    scrollable.style.position = 'relative'
    const verScroll = document.createElement('div')
    const horScroll = document.createElement('div')
    const verThumb = document.createElement('div')
    const horThumb = document.createElement('div')

    verScroll.style.position =
    horScroll.style.position = 'absolute'

    verScroll.appendChild(verThumb)
    horScroll.appendChild(horThumb)

    scrollable.appendChild(verScroll)
    scrollable.appendChild(horScroll)

    console.log('v-scrollable mounted', scrollable)
  },
  unmounted: (scrollable: HTMLElement) => {
    console.log('v-scrollable unmounted', scrollable)
  }
}

export default vScrollable
