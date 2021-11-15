<template lang='html'>
  <div class="NotFound">
    <div class="NotFoundDisplay">
      <div class="NotFoundHeader">
        <img src="@/assets/logos/codeglo/404.svg" alt="404">
        <h1>UH-OH!</h1>
      </div>
      <div class="NotFoundMain">
        <h2>You surely know what this means.</h2>
        <h4>We can't find the page you're looking for.
          <br>Please use <router-link
              :to="{ name: 'Search', params: { from: $route.path.slice(1) } }"
          >
            search
          </router-link> or try starting from <router-link
              :to="{ name: 'Home' }">
            home
          </router-link>.
        </h4>
      </div>
      <div class="NotFoundFooter">
        <BaseButton class="NotFoundButton NotFoundButton0"
                    text="Home"
                    @clickButton="$router.push({ name: 'Home' })"/>
        <BaseButton class="NotFoundButton NotFoundButton1"
                    text="Graph"
                    @clickButton="$router.push('/graph'/*{ name: 'Graph' }*/)"/>
        <BaseButton class="NotFoundButton NotFoundButton2"
                    text="Back to previous page"
                    @clickButton="$router.push($router.history[1])"
                    :isDefault="true"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import BaseButton from "@/components/base/button/BaseButton.vue"
import { Route } from "vue-router"

interface VueWithPrevRoute extends Vue {
  prevRoute?: Route
}

export default Vue.extend({
  name: 'PageIsNotFound',
  components: { BaseButton },
  data () {
    return {
      prevRoute: null
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm: VueWithPrevRoute) => {
      vm.prevRoute = from
    })
  }
})
</script>

<style lang='scss' scoped>
.NotFound {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .NotFoundDisplay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 400px;
    height: 256px;
    background-color: #3C3F41;
    border: 1px solid #323232;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    & > * {
      width: 100%;
      height: 56px;
    }
    .NotFoundHeader {
      display: flex;
      background-color: #4A4E52;
      img {
        width: 48px;
        padding-left: 4px;
      }
      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        padding-right: 56px;
      }
    }
    .NotFoundMain {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      row-gap: 1rem;
      h2 {}
      h4 {}
    }
    .NotFoundFooter {
      display: flex;
      border-top: 1px solid #323232;
      box-sizing: border-box;
      height: 46px;
      .NotFoundButton {
        margin: 11px 12px 0 12px;
      }
      .JustifySelfStart {

      }
      .JustifySelfEnd {
        justify-self: end;
      }
    }
  }
}
</style>