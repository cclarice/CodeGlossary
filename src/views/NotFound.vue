<template lang='html'>
  <div class="NotFound">
    <div class="NotFoundWrapper">
      <img class="NotFoundImage" src="@/assets/logos/codeglo/404.svg" alt="404">
      <div class="NotFoundContainer">
        <div class="NotFoundHeader">You surely know what this means.</div>
        <div class="NotFoundText">
          <p>We can't find the page you're looking for.
            <br> Please use search or try starting from <router-link to="/">home</router-link>.</p>
        </div>
        <div class="NotFoundPagesDivider"></div>
        <div class="NotFoundFind">
          <input class="InputFind" type="text" v-model="find">
        </div>
        <div class="NotFoundPagesDivider"></div>
        <div class="NotFoundResult">
          <div v-if="results.length">
            <router-link v-for="result in results" :key="result.name"
                         :to="result.path"
                         class="NotFoundLink">
              <img src="@/assets/icons/stub.svg" alt="Home">
              <span>{{ result.name }}</span>
            </router-link>
          </div>
          <div v-else style="padding-left: 0.5rem" class="NotFoundNoResult">
            <span style="margin-left: 1rem">Type something<br> or type * <br> to see everything</span>
          </div>
        </div>
        <div class="NotFoundPagesDivider"></div>
        <div class="NotFoundPages">
          <router-link to="/" class="NotFoundLink"><img src="@/assets/icons/home.svg" alt="Home"><span>Home</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import router from "@/router";

export default Vue.extend({
  name: 'PageIsNotFound',
  data () {
    return {
      find: '',
      routes: router.options.routes
    }
  },
  computed: {
    results () {
      const f = this.find
      if (f.length >= 2) {
        return this.routes.filter(route => { return route.name.search(f) !== -1 || route.path.search(f) !== -1 /*  || route.meta.keywords(f) todo deep find */ })
      } else {
        return []
      }
    }
  }
})
</script>

<style lang='scss' scoped>
.NotFound {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .NotFoundWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    column-gap: 4rem;
    .NotFoundImage {
      width: 256px;
      min-width: 128px;
    }

    .NotFoundContainer {
      display: flex;
      flex-direction: column;

      min-width: 256px;

      background-color: #3C3F41;
      border: #323232;

      .NotFoundHeader {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;

        background-color: #4A4E52;
      }
      .NotFoundText,
      .NotFoundFind,
      .NotFoundPages,
      .NotFoundResult {
        padding: 4px 6px;
      }
      .NotFoundText {
        margin-left: 22px;
      }
      .NotFoundFind {
        .InputFind {
          height: 24px;
          min-width: 24px;
          width: 100%;
          border: 1px solid #5E6060;
          box-sizing: border-box;
          font-weight: 500;
          border-radius: 3px;
          &:focus,
          &:active {
            border: 1px solid #456A90;
            outline: #3D6185 solid 2px;
          }
          padding-left: 28px;

          background: url("~@/assets/icons/find.svg") #4C5052 no-repeat left 6px top 3px;
        }
        .InputFind::selection {
          color: #BBBBBB;
          background-color: #4B6EAF;
        }

        .InputFind::placeholder {
          color: #787878;
          font-weight: 400;
          transform: translateY(1px);
        }
      }
      .NotFoundPages,
      .NotFoundResult {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      .NotFoundText > p,
      .NotFoundNoResult {
        padding-left: 0.5rem
      }
      .NotFoundPagesDivider {
        background-color: #323232;
        height: 1px;
        width: 100%;
      }
      .NotFoundLink {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 22px;
        text-decoration: none;
        span {
          padding-left: 6px;
          font-weight: bold;
        }
      }
    }
  }
}

@media (orientation: portrait) {
  .NotFound {
    flex-direction: column;
  }
}
</style>