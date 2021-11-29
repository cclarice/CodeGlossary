<template>
  <div class="MainStripeButton" :class="{ MainStripeButtonSide: side, MainStripeButtonLine: !side }">
    <img :src="stripeButton.icon" alt="">
    <div class=MainStripeButtonText
         :class="{ MainStripeButtonLeft: left }">
      {{ stripeButton.name }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: "MainStripeButton",
  props: {
    stripeButton: {
      type: Object,
      required: true
    },
    left: {
      type: Boolean,
      default: false
    },
    side: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.MainStripeButton {
  background: #FF000044;
  display: flex;
  row-gap: 4px;
  column-gap: 4px;
  .MainStripeButtonText {
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    color: #BBBBBB;
  }
}
.MainStripeButtonSide {
  flex-direction: column-reverse;
  padding: 10px 3px;
  width: 20px;
  img {
    height: 13px;
  }
  .MainStripeButtonText {
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
  }
}
.MainStripeButtonLine {
  flex-direction: row;
  padding: 3px 10px;
  height: 100%;
}
</style>