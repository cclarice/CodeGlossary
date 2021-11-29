<template>
  <div class="MainStripe" :class="{ MainStripeLeft: side === 'Left',  MainStripeRight: side === 'Right', MainStripeBottom: side === 'Bottom' }">
    {{ side }}
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
.MainStripe {
  border: #323232 solid 1px;
  border-bottom-width: 0;
  border-top-width: 0;
  &Left {
    width: 21px;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    display: flex;
    justify-content: flex-end;
  }
  &Right {
    width: 21px;
    writing-mode: vertical-rl;
  }
  &Bottom {
    border-top-width: 1px;
    width: 100%;
    height: 21px;
  }
}
</style>