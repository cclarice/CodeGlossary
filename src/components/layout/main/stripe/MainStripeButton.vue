<template>
  <div class="MainStripeButton"
       :class="['MainStripeButton' + stripeSide + side, { 'MainStripeButtonActive': stripeButton.active }]"
       @click="toggleStripe(stripeButton.id)">
    <div class=MainStripeButtonText>
      {{ stripeButton.name }}
    </div>
    <img :src="stripeButton.icon" alt="">
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: "MainStripeButton",
  props: {
    stripeButton: {
      type: Object,
      required: true
    },
    stripeSide: {
      type: String,
      required: true
    },
    side: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations('mainLayout', ['toggleStripe'])
  }
})
</script>

<style lang="scss" scoped>
.MainStripeButton {
  // background: #FF000044;
  display: flex;
  align-items: center;
  row-gap: 4px;
  column-gap: 4px;
  cursor: pointer;
  .MainStripeButtonText {
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    color: #BBBBBB;
    user-select: none;
  }
  img {
    width: 13px;
    height: 13px;
    user-select: none;
  }
  &:hover {
    background-color: #353739;
  }
  &Active {
    background-color: #2D2F30;
    &:hover {
      background-color: #2D2F30;
    }
  }
}

.MainStripeButtonLeftLeft,
.MainStripeButtonLeftRight,
.MainStripeButtonRightLeft,
.MainStripeButtonRightRight {
  flex-direction: column;
  padding: 10px 0;
  width: 19px;
}

.MainStripeButtonLeftRight    .MainStripeButtonText,
.MainStripeButtonLeftLeft     .MainStripeButtonText {
  transform: rotate(180deg);
  writing-mode: vertical-rl;
}

.MainStripeButtonRightRight   .MainStripeButtonText,
.MainStripeButtonRightLeft    .MainStripeButtonText {
  writing-mode: vertical-rl;
}

.MainStripeButtonBottomLeft,
.MainStripeButtonBottomRight {
  padding: 0 10px;
  height: 19px;
}

.MainStripeButtonBottomLeft   .MainStripeButtonText,
.MainStripeButtonBottomRight  .MainStripeButtonText {

}
// .MainStripeButtonSide {
//   flex-direction: column-reverse;
//   padding: 10px 3px;
//   width: 20px;
//   img {
//     height: 13px;
//   }
//   .MainStripeButtonText {
//     writing-mode: vertical-rl;
//     transform: rotate(-180deg);
//   }
// }
// .MainStripeButtonLine {
//   flex-direction: row;
//   padding: 3px 10px;
//   height: 100%;
// }
</style>