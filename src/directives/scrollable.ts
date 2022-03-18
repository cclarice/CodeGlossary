import { Directive } from 'vue'

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

    function scrollEventHandler (event: Event) {
      console.log(event)

      // Positions for Thumbs
      verThumb.style.top = `${(verScroll.clientHeight - verThumb.clientHeight - 2) / (scrollable.scrollHeight - scrollable.clientHeight) * scrollable.scrollTop}px`
      horThumb.style.left = `${(horScroll.clientWidth - horThumb.clientWidth - 2) / (scrollable.scrollWidth - scrollable.clientWidth) * scrollable.scrollLeft}px`
    }

    const resizeObserverHandler = () => {

      // Positions for Scrollbars
      const { x, y } = scrollable.getClientRects()[0]
      horScroll.style.width = `${scrollable.clientWidth - (verScroll.style.display === 'none' ? 0 : 10)}px`
      verScroll.style.height = `${scrollable.clientHeight}px`
      horScroll.style.left = `${x}px`
      horScroll.style.top = `${scrollable.clientHeight - 10 + y}px`
      verScroll.style.left = `${scrollable.clientWidth - 10 + x}px`
      verScroll.style.top = `${y}px`


      verScroll.style.display = horScroll.style.display = 'none'

      if (scrollable.scrollWidth > scrollable.clientWidth) {
        horScroll.style.display = 'flex'
      }
      if (scrollable.scrollHeight > scrollable.clientHeight) {
        verScroll.style.display = 'flex'
      }
      // Horizontal
      //if (scrollable.scrollWidth <= scrollable.clientWidth) {
      //  return;
      //} else {
      //  if (scrollable.scrollLeft > scrollable.scrollWidth - scrollable.clientWidth) {
      //    horScroll.style.display = verScroll.style.display = 'flex'
      //    scrollable.scrollLeft = scrollable.scrollWidth - scrollable.clientWidth
      //  } else {
      //    horScroll.style.display = verScroll.style.display = 'flex'
      //    scrollEventHandler(new Event('none'))
      //  }
      //}
      //// Vertical
      //if (scrollable.scrollHeight <= scrollable.clientHeight) {
      //  return;
      //} else {
      //  if (scrollable.scrollTop > scrollable.scrollHeight - scrollable.clientHeight) {
      //    horScroll.style.display = verScroll.style.display = 'flex'
      //    scrollable.scrollTop = scrollable.scrollHeight - scrollable.clientHeight
      //  } else {
      //    horScroll.style.display = verScroll.style.display = 'flex'
      //    scrollEventHandler(new Event('none'))
      //  }
      //}
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
      // scrollable.scrollTop = event.offsetX
      console.log(event)
    }
    function horScrollClickEventHandler (event: PointerEvent): void {
      console.log(event)
    }
    function verThumbClickEventHandler (event: PointerEvent): void {
      event.stopImmediatePropagation()
      console.log(event)
    }
    function horThumbClickEventHandler (event: PointerEvent): void {
      event.stopImmediatePropagation()
      console.log(event)
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
