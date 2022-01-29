<template>
  <section class="Scrollable" ref="scrollable">
    <div class="Scroll" ref="scroll">
      <div class="VScroll" ref="vScroll"><div class="VThumb Thumb"/></div>
      <div class="HScroll" ref="hScroll"><div class="HThumb Thumb"/></div>
    </div>
    <slot class="ScrollableContent"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseScrollable',
  mounted () {
    const scrollable = this.$refs.scrollable as HTMLElement
    const scroll     = this.$refs.scroll as HTMLElement
    const vScroll    = this.$refs.vScroll as HTMLElement
    const hScroll    = this.$refs.hScroll as HTMLElement
    let   content    = scrollable.children[scrollable.children.length - 1] as HTMLElement
    const vThumb     = vScroll.children[0] as HTMLElement
    const hThumb     = hScroll.children[0] as HTMLElement
    let   contentObserver: ResizeObserver | null = null

    // if (this.$options && this.$options.mounted) {
    //   this.$options.mounted()
    // }
    // console.log('BaseScrollable')
    // console.log(this.$refs)

    function scrollHandler () {
      if (hThumb?.style) {
        hThumb.style.left = `${ (hScroll.clientWidth + 5) / content.clientWidth * scrollable.scrollLeft }px`
      }
      if (vThumb?.style) {
        vThumb.style.top = `${ vScroll.clientHeight / content.clientHeight * scrollable.scrollTop }px`
      }
    }
    scrollable.addEventListener('scroll', scrollHandler)

    function rContent () {
      if (content) {
        if (hThumb?.style) {
          hThumb.style.width =
            `${hScroll.clientWidth / content.clientWidth * hScroll.clientWidth}px`
        }
        if (vThumb?.style) {
          vThumb.style.height =
            `${vScroll.clientHeight / content.clientHeight * vScroll.clientHeight}px`
        }
      }
      scrollHandler()
    }

    function rScrollable () {
      if (content !== scrollable.children[scrollable.children.length - 1]) {
        if (contentObserver) {
          contentObserver.unobserve(content)
        }
        content = scrollable.children[scrollable.children.length - 1] as HTMLElement
        if (contentObserver) {
          contentObserver.disconnect()
          contentObserver = new ResizeObserver(rScrollable)
          if (contentObserver) {
            contentObserver.observe(content)
          }
        }
      }
      if (scrollable && scroll?.style) {
        scroll.style.width = scrollable.clientWidth.toString() + 'px'
        scroll.style.height = scrollable.clientHeight.toString() + 'px'
        if (scrollable.clientWidth >= content.clientWidth) {
          hScroll.style.display = 'none'
        } else {
          hScroll.style.display = 'block'
        }
        if (scrollable.clientHeight >= content.clientHeight) {
          vScroll.style.display = 'none'
          hScroll.style.width = '100%'
        } else {
          vScroll.style.display = 'block'
          hScroll.style.width = 'calc(100% - 10px)'
        }
      }
      rContent()
    }

    new ResizeObserver(rScrollable).observe(scrollable)
    contentObserver = new ResizeObserver(rScrollable)
    if (contentObserver) {
      contentObserver.observe(content)
    }
    rScrollable()

    /** Vertical Scroll */
    vScroll.addEventListener('click', (event: MouseEvent) => {
      if (event.composedPath()[0] !== vScroll) {
        return
      }
      const relPos: number = (event.offsetY) / (vScroll.clientHeight) - 0.5
      scrollable.scrollTop = (scrollable.scrollHeight - vScroll.clientHeight) * (relPos * 1.1 + 0.5)
    })
    /** Vertical Thumb */
    let vMousePos = 0
    const vMouseMove = (event: MouseEvent) => {
      scrollable.scrollTop =
        (event.pageY - vMousePos) / vScroll.clientHeight * scrollable.scrollHeight
    }
    vThumb.addEventListener('mousedown', (event: MouseEvent) => {
      document.body.style.touchAction = 'none'
      document.body.style.userSelect = 'none'
      vMousePos = event.pageY - (parseFloat(vThumb.style.top) || 0)
      window.addEventListener('mousemove', vMouseMove)
      window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', vMouseMove)
        document.body.style.touchAction = 'unset'
        document.body.style.userSelect = 'unset'
      }, { once: true })
    })

    /** Horizontal Scroll */
    hScroll.addEventListener('click', (event: MouseEvent) => {
      if (event.composedPath()[0] !== hScroll) {
        return
      }
      const relPos: number = event.offsetX / hScroll.clientWidth
      scrollable.scrollLeft = (scrollable.scrollWidth - scrollable.clientWidth) * relPos
    })
    /** Horizontal Thumb */
    let hMousePos = 0
    const hMouseMove = (event: MouseEvent) => {
      scrollable.scrollLeft =
        (event.pageX - hMousePos) / hScroll.clientWidth * scrollable.scrollWidth
    }
    hThumb.addEventListener('mousedown', (event: MouseEvent) => {
      document.body.style.touchAction = 'none'
      document.body.style.userSelect = 'none'
      hMousePos = event.pageX - (parseFloat(hThumb.style.left) || 0)
      window.addEventListener('mousemove', hMouseMove)
      window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', hMouseMove)
        document.body.style.touchAction = 'unset'
        document.body.style.userSelect = 'unset'
      }, { once: true })
    })
  }
})
</script>

<style lang="scss" scoped>
.Scrollable {
  overflow: auto;
  &::v-deep .ScrollableContent {
    min-width: fit-content;
    min-height: fit-content;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
.Scroll {
  display: inline-block;
  position: absolute;
  z-index: 10;
  background-color: #FF00FF44;
  visibility: hidden;
}

.HScroll {
  width: calc(100% - 10px);
  height: 10px;
  top: calc(100% - 10px);
}
.HThumb {
  min-width: 3px;
  width: 1px;
  height: 100%;
}
.VScroll {
  height: 100%;
  width: 10px;
  float: right;
}
.VThumb {
  width: 100%;
  min-height: 3px;
  height: 1px;
}

.HScroll,
.VScroll {
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  visibility: visible;
  position: relative;
  background-color: transparent;
  transition: background-color 0.25s;
  cursor: pointer;
  .Thumb {
    position: relative;
    background-color: var(--scroll-color);
    opacity: 0.75;
    transition: opacity 0.25s;
    border: 1px var(--scroll-border) solid;
    background-clip: padding-box;
    cursor: default;
  }
  &:hover {
    background-color: var(--scroll-background);
    .Thumb {
      opacity: 1;
    }
  }
}
</style>