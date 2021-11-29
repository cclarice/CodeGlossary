<template>
  <div class="MainStripe"
       :class="{
                  MainStripeLeft: stripe.side === 'Left',
                  MainStripeRight: stripe.side === 'Right',
                  MainStripeBottom: stripe.side === 'Bottom'
       }"
       v-if="!stripeEmpty && !getToolbarHidden">
    <div class="MainStripeSideLeft">
      <MainStripeButton v-for="left of stripe.left" :key="left.name"
                        :stripeButton="left"
                        :left="stripe.side === 'Left'"
                        :side="stripe.side !== 'Bottom'"/>
    </div>
    <div class="MainStripeSideRight">
      <MainStripeButton v-for="right of stripe.right" :key="right.name"
                        :stripeButton="right"
                        :left="stripe.side === 'Left'"
                        :side="stripe.side !== 'Bottom'"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import MainStripeButton from '@/components/layout/main/stripe/MainStripeButton.vue'

export default Vue.extend({
  name: 'MainStripe',
  components: { MainStripeButton },
  props: {
    stripe: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapGetters('mainLayout', ['getToolbarHidden']),
    stripeEmpty () {
      return this.stripe.left.length === 0 && this.stripe.right.length === 0
    }
  }
})
</script>

<style lang='scss' scoped>
.MainStripe {
  border: #323232 solid 1px;
  border-bottom-width: 0;
  border-top-width: 0;
  background: #3C3F41;

  display: flex;
  justify-content: space-between;
  &Left {
    // writing-mode: vertical-lr;
    flex-direction: column-reverse;
  }
  &Right {
    // writing-mode: vertical-rl;
    flex-direction: column;
  }
  &Left,
  &Right {
    width: 21px;
  }
  &Bottom {
    border-top-width: 1px;
    width: 100%;
    height: 21px;
  }
}
</style>