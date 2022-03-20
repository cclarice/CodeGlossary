import { Directive } from 'vue'
import log from './log'

interface VScrollableElement extends HTMLElement {
  scrollableData: {
    scrollEventHandler: { (event: Event): void }
    resizeObserver: ResizeObserver
    verScroll: HTMLElement
    verScrollClickEventHandler: { (event: PointerEvent): void }
    horScroll: HTMLElement
    horScrollClickEventHandler: { (event: PointerEvent): void }
    verThumb: HTMLElement
    verThumbClickEventHandler: { (event: PointerEvent): void }
    horThumb: HTMLElement
    horThumbClickEventHandler: { (event: PointerEvent): void }
  }
}


const vScrollable: Directive = {
  mounted: (scrollable: VScrollableElement) => {
    console.log('v-scrollable mounted start', scrollable)

    // Style out scrollable element
    scrollable.classList.add('v-scrollable')

    // Creating scroll elements
    const verScroll = document.createElement('div')
    const horScroll = document.createElement('div')
    const verThumb = document.createElement('div')
    const horThumb = document.createElement('div')

    // Adding them classes
    verScroll.classList.add('v-scroll')
    horScroll.classList.add('v-scroll')
    verScroll.classList.add('v-scroll_vertical')
    horScroll.classList.add('v-scroll_horizontal')
    verThumb.classList.add('v-scroll__thumb')
    horThumb.classList.add('v-scroll__thumb')
    verThumb.classList.add('v-scroll__thumb_vertical')
    horThumb.classList.add('v-scroll__thumb_horizontal')

    // Nesting Elements
    verScroll.appendChild(verThumb)
    horScroll.appendChild(horThumb)
    scrollable.appendChild(verScroll)
    scrollable.appendChild(horScroll)

    function scrollEventHandler () {
      // Positions for Thumbs
      verThumb.style.top = `${(verScroll.clientHeight - 2 - verThumb.clientHeight) / (scrollable.scrollHeight - scrollable.clientHeight) * scrollable.scrollTop}px`
      horThumb.style.left = `${(horScroll.clientWidth - 2 - horThumb.clientWidth) / (scrollable.scrollWidth - scrollable.clientWidth) * scrollable.scrollLeft}px`
      document.getElementsByClassName('main-header__path')[0].innerHTML = `${verScroll.clientHeight - 2}, ${parseFloat(verThumb.style.top) + verThumb.clientHeight}`
    }

    const resizeObserverHandler = () => {
      // Positions and sizes for Scrollbars
      const { x, y } = scrollable.getClientRects()[0]
      horScroll.style.width = `${scrollable.clientWidth - (verScroll.style.display === 'none' ? 0 : 10)}px`
      verScroll.style.height = `${scrollable.clientHeight}px`
      horScroll.style.left = `${x}px`
      horScroll.style.top = `${scrollable.clientHeight - 10 + y}px`
      verScroll.style.left = `${scrollable.clientWidth - 10 + x}px`
      verScroll.style.top = `${y}px`

      // Sizes for Thumbs
      verScroll.style.display = horScroll.style.display = 'none'
      if (scrollable.scrollWidth > scrollable.clientWidth) {
        horScroll.style.display = 'flex'
        horThumb.style.width = `${(horScroll.clientWidth - 2) * scrollable.clientWidth / scrollable.scrollWidth}px`
      }
      if (scrollable.scrollHeight > scrollable.clientHeight) {
        verScroll.style.display = 'flex'
        verThumb.style.height = `${(verScroll.clientHeight - 2) * scrollable.clientHeight / scrollable.scrollHeight}px`
      }
      scrollEventHandler()
    }

    // First Positions and sizes handling
    resizeObserverHandler()
    horScroll.style.position = verScroll.style.position = 'fixed'

    // Creating resize observer
    const resizeObserver = new ResizeObserver(resizeObserverHandler)
    resizeObserver.observe(scrollable)
    for (let c = 0; scrollable.children[c]; c++) {
      resizeObserver.observe(scrollable.children[c])
    }

    function verScrollClickEventHandler (event: PointerEvent): void {
      scrollable.scrollTo({
        top: (scrollable.scrollHeight - scrollable.clientHeight) * ((event.offsetY - 1 - verThumb.clientHeight / 2) / (verScroll.clientHeight - verThumb.clientHeight)),
        // top: (scrollable.scrollHeight - scrollable.clientHeight) * (event.offsetY - 1) / (verScroll.clientHeight - 2),
        behavior: 'smooth'
      })
    }
    function horScrollClickEventHandler (event: PointerEvent): void {
      // scrollable.scrollTo({
      //   left: (scrollable.scrollWidth - scrollable.clientWidth) * (event.offsetX - 1) / (horScroll.clientWidth - 2),
      //   behavior: 'smooth'
      // })
      scrollable.scrollTo({
        left: ((scrollable.scrollWidth - scrollable.clientWidth) * (event.offsetX - 1 - horThumb.clientWidth / 2) / (horScroll.clientWidth - 2 - horThumb.clientWidth)),
        behavior: 'smooth'
      })
    }
    function verThumbClickEventHandler (event: PointerEvent): void {
      event.stopImmediatePropagation()
      event.preventDefault()
      const pageY = event.pageY
      const scrollTop = scrollable.scrollTop

      const listener = (event: PointerEvent) => {
        scrollable.scrollTop = scrollTop + (event.pageY - pageY) * ((scrollable.scrollHeight - scrollable.clientHeight) / (scrollable.clientHeight - verThumb.clientHeight - 2))
      }
      window.addEventListener('pointermove', listener)
      window.addEventListener('pointerup', () => {
        window.removeEventListener('pointermove', listener)
      }, { once: true })
    }
    function horThumbClickEventHandler (event: PointerEvent): void {
      event.stopImmediatePropagation()
      event.preventDefault()
      const pageX = event.pageX
      const scrollLeft = scrollable.scrollLeft

      const listener = (event: PointerEvent) => {
        scrollable.scrollLeft = scrollLeft + (event.pageX - pageX) * ((scrollable.scrollWidth - scrollable.clientWidth) / (scrollable.clientWidth - horThumb.clientWidth - 2))
      }
      window.addEventListener('pointermove', listener)
      window.addEventListener('pointerup', () => {
        window.removeEventListener('pointermove', listener)
      }, { once: true })
    }

    // Creating scrollable data
    scrollable.scrollableData = {
      scrollEventHandler,
      resizeObserver,
      verScroll,
      verScrollClickEventHandler,
      horScroll,
      horScrollClickEventHandler,
      verThumb,
      verThumbClickEventHandler,
      horThumb,
      horThumbClickEventHandler
    }
    verScroll.addEventListener('pointerdown', verScrollClickEventHandler)
    horScroll.addEventListener('pointerdown', horScrollClickEventHandler)
    verThumb.addEventListener('pointerdown', verThumbClickEventHandler)
    horThumb.addEventListener('pointerdown', horThumbClickEventHandler)
    scrollable.addEventListener('scroll', scrollEventHandler)

    console.log('v-scrollable mounted end', scrollable)
  },
  unmounted: (scrollable: VScrollableElement, object) => {
    console.log('v-scrollable unmounted', scrollable)
    scrollable.scrollableData.resizeObserver.unobserve(scrollable)
    for (let c = 0; scrollable.children[c]; c++) {
      scrollable.scrollableData.resizeObserver.unobserve(scrollable.children[c])
    }
    scrollable.scrollableData.resizeObserver.disconnect()
    scrollable.scrollableData.verScroll.removeEventListener('pointerdown', scrollable.scrollableData.verScrollClickEventHandler)
    scrollable.scrollableData.horScroll.removeEventListener('pointerdown', scrollable.scrollableData.horScrollClickEventHandler)
    scrollable.scrollableData.verThumb.removeEventListener('pointerdown', scrollable.scrollableData.verThumbClickEventHandler)
    scrollable.scrollableData.horThumb.removeEventListener('pointerdown', scrollable.scrollableData.horThumbClickEventHandler)
    scrollable.removeEventListener('scroll', scrollable.scrollableData.scrollEventHandler)
  }
}

export default vScrollable
