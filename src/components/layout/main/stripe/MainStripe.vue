<template>
  <div class="MainStripe"
       :class="{
                  MainStripeLeft: stripe.side === 'Left',
                  MainStripeRight: stripe.side === 'Right',
                  MainStripeBottom: stripe.side === 'Bottom'
       }"
       v-if="!stripeEmpty && !getToolbarHidden">
    <div class="MainStripeSideLeft">
      <MainStripeButton v-for="button of stripe.left" :key="button.name"
                        :stripeButton="button"
                        :stripeSide="stripe.side"
                        side="Left"/>
    </div>
    <div class="MainStripeSideRight">
      <MainStripeButton v-for="button of stripe.right" :key="button.name"
                        :stripeButton="button"
                        :stripeSide="stripe.side"
                        side="Right"/>
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
  align-items: center;
}

.MainStripeLeft {
  flex-direction: column-reverse;
  min-width: 21px;
  * {
    width: 100%
  }
}

.MainStripeRight {
  flex-direction: column;
  width: 21px;
  * {
    width: 100%;
  }
}

.MainStripeBottom {
  padding: 0 20px;
  border-top-width: 1px;
  width: 100%;
  height: 21px;
  * {
    height: 100%;
  }
}
</style>