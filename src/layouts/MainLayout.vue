<template>
  <div class="MainLayoutPage">
    <BaseBalloons/>
    <MainNavbar/>
    <main class="MainLayoutPageMain"
          :class="{ MainLayoutPageMainWithoutBottomStripe: bottomStripeDisabled }">
      <MainStripe :stripe="getStripes.stripeLeft"/>
<!--      <router-view class="MainLayoutPageMainView"/>-->
      <MainContent class="MainContent"/>
      <MainStripe :stripe="getStripes.stripeRight"/>
    </main>
    <footer class="MainLayoutPageFooter">
      <MainStripe :stripe="getStripes.stripeBottom"/>
      <MainStatusBar/>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseBalloons from '@/components/base/balloons/BaseBalloons.vue'
import MainNavbar from '@/components/layout/main/navbar/MainNavbar.vue'
import MainContent from '@/components/layout/main/MainContent.vue'
import MainStripe from '@/components/layout/main/stripe/MainStripe.vue'
import MainStatusBar from '@/components/layout/main/MainStatusBar.vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'MainLayout',
  components: {
    MainStatusBar,
    BaseBalloons,
    MainNavbar,
    MainContent,
    MainStripe
  },
  methods: {
    ...mapMutations('mainLayout', ['setDefaultStripes'])
  },
  computed: {
    ...mapGetters('mainLayout', ['getStripes', 'getToolbarHidden']),
    bottomStripeDisabled () {
      return (
        this.getToolbarHidden || (
          this.getStripes.stripeBottom.left.length === 0 &&
          this.getStripes.stripeBottom.left.length === 0
        )
      )
    }
  },
  created () {
    this.setDefaultStripes()
  }
})
</script>

<style lang="scss" scoped>
.MainLayoutPage {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  .MainLayoutPageMain {
    flex-grow: 1;
    max-height: calc(100% - 42px - 30px);
    &WithoutBottomStripe {
      max-height: calc(100% - 21px - 30px);
    }
    display: flex;
    flex-direction: row;
    .MainContent {
      overflow: hidden;
      max-height: 100%;
      flex-grow: 1;
    }
  }
  .MainLayoutPageFooter {
    display: flex;
    flex-direction: column;
  }
}
</style>