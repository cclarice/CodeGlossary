<template>
  <div class="MainLayoutPage">
    <BaseBalloons/>
    <MainNavbar/>
    <main class="MainLayoutPageMain">
      <MainStripe :side="'Left'"/>
      <router-view class="MainLayoutPageMainView"/>
      <MainStripe :side="'Right'"/>
    </main>
    <footer class="MainLayoutPageFooter">
      <MainStripe :side="'Bottom'"/>
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

export default Vue.extend({
  name: 'MainLayout',
  components: { MainStatusBar, BaseBalloons, MainNavbar, MainContent, MainStripe },
  data () {
    return ({
      getMainState: {
        theme: 'default',
        mainLayout: {
          stripeLeft: {
            left: [],
            right: []
          },
          stripeRight: {
            left: [],
            right: []
          },
          stripeBottom: {
            left: [],
            right: []
          },
          navbar: {},
          tools: {
            leftLeft: null,
            leftRight: null,
            rightLeft: null,
            rightRight: null,
            bottomLeft: null,
            bottomRight: null
          }
        },
      }
    })
  },
  mounted () {

  },
  methods: {
  },
  computed: {

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
    height: 100%;
    display: flex;
    flex-direction: row;
    .MainLayoutPageMainView {
      flex-grow: 1;
    }
  }
  .MainLayoutPageFooter {
    display: flex;
    flex-direction: column;
  }
}
</style>