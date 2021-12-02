<template>
  <div class="BaseIcon" @click="handl">
    <div class="BaseIconBody">
      <img :src="src" :alt="name">
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseIcon',
  props: {
    src: {
      type: [String, Response],
      default: require('@/assets/icons/stub.svg')
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: undefined
    },
    handler: {}
  },
  methods: {
    handl () {
      if (this.value) {
        this.$emit('click', this.value)
      }
      this.$emit('click')
    }
  }
})
</script>

<style lang='scss' scoped>
.BaseIcon {
  min-width: 26px;
  min-height: 26px;
  padding: 2px;
  width: 26px;
  height: 26px;
  .BaseIconBody {
    min-width: 22px;
    width: 100%;
    min-height: 22px;
    height: 100%;
    background-color: #3C3F41;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  }
}
</style>