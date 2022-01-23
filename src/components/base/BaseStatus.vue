<template>
  <div>
    <img src=""/>
    <span v-if="status">{{ text[status] }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseStatus',
  data () {
    return ({
      images: {
        READY: '',
        PROGRESS: '',
        ERROR: '',
        WARNING: '',
        UNKNOWN: ''
      },
      text: {

      }
    })
  },
  props: {
    status: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>

</style>