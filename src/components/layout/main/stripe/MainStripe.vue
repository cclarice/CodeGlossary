<template>
  <div class="MainStripe" :class="{ MainStripeLeft: side === 'Left',  MainStripeRight: side === 'Right', MainStripeBottom: side === 'Bottom' }">

  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'MainStripe',
  props: {
    side: {
      required: true,
      type: String
    }
  }
})
</script>

<style lang='scss' scoped>

</style>