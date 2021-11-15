<template lang='html'>
  <div>
    <img v-for="(image, index) in loader.steps" :key="index"
         v-show="status === 'loading' && index === frame"
         class="Loader"
         :src="image"
         alt="">
    <img v-show="status === 'passive'"
         class="Loader"
         :src="loader.passive"
         alt="">
    <img v-show="status === 'breath'"
         class="Loader LoaderBreath"
         :src="loader.mask"
         alt="">
  </div>
</template>

<script lang='ts'>
import sleep from '@/library/sleep'
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseLoader',
  data () {
    return {
      cycle: true,
      frame: 0,
      loader: undefined,
      loaders: {
        step: {
          steps: [
            require('@/assets/loaders/step/step0.svg'),
            require('@/assets/loaders/step/step1.svg'),
            require('@/assets/loaders/step/step2.svg'),
            require('@/assets/loaders/step/step3.svg'),
            require('@/assets/loaders/step/step4.svg'),
            require('@/assets/loaders/step/step5.svg'),
            require('@/assets/loaders/step/step6.svg'),
            require('@/assets/loaders/step/step7.svg')
          ],
          passive: require('@/assets/loaders/step/passive.svg'),
          mask: require('@/assets/loaders/step/mask.svg')
        }
      }
    }
  },
  props: {
    type: {
      type: String,
      default: 'step'
    },
    speed: {
      type: Number,
      default: 66
    },
    status: {
      type: String,
      default: 'loading'
    }
  },
  methods: {
    async loaderCycle () {
      while (this.cycle) {
        await sleep(this.speed).then(this.handler)
      }
    },
    handler () {
        this.frame++                                                            // Увеличиваем кадр
        if (this.frame >= this.loader.steps.length) {
          this.frame = 0                                                        // Обнуляем кадр если он вышел за границу
        }
    }
  },
  created () {
    this.loader = this.loaders[this.type]

    for (let i = 0; i < this.loader.steps.length; i++) {
      this.loader.steps[i] = this.loader.steps[i]
    }
  },
  mounted () {
    if (this.loader &&
        this.loader.steps) {                                                    // Запускаем цикл Анимации, если
      this.loaderCycle()                                                        //                 у loader'а есть кадры
    }
  },
  beforeDestroy() {
    this.cycle = false
    this.status = 'stop'
  }
})
</script>

<style lang='scss' scoped>
.Loader {
  width: 32px;
  height: 32px;
}
</style>