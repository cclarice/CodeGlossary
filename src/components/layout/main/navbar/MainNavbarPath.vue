<template>
  <div class="MainNavbarPath">
    <router-link
        class="MainNavbarPathLink"
        tag="div"
        v-for="(path, index) of paths" :key="path.name"
        :to="{ name: path.name }">
      <img class="MainNavbarPathLinkIcon"
           :src="path.meta['favicon'] || '/favicons/default.svg'"
           alt="">
      <div class="MainNavbarPathLinkName"
           v-bind:class="{ MainNavbarPathLinkNameFirst: index === 0 }">
        {{ path.meta['title'] || path.name }}
      </div>
      <img class="MainNavbarPathLinkSeparator"
           v-if="index !== paths.length - 1"
           :src="'/favicons/arrow.svg'"
           alt="/">
    </router-link>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'MainNavbarPath',
  computed: {
    paths () {
      const path = this.$route.path
      let paths = []

      for (const current of path.split(/\//)) {
        if (current !== '') {
          const currentPath = path.split(current)[0]
          const sendPath = currentPath[currentPath.length - 1] !== '/' || currentPath === '/' ?
              currentPath : currentPath.slice(0, currentPath.length - 1)

          paths.push(sendPath)
        }
      }
      paths.push(path)

      return this.$router.options.routes.filter(router => paths.includes(router.path))
    }
  }
})
</script>

<style lang='scss' scoped>
// .MainNavbarPath {
//   display: flex;
//   height: 100%;
//   align-items: center;
// }
// .arrow {
//   height: 15px;
//   transform: translateY(3px);
//   margin-left: 3px;
// }
//
// .normal {
//   color: #BBBBBB;
//   font-weight: 400;
// }
//
// .first {
//   color: #FEFEFE;
//   font-weight: bold;
// }
//
// .favicon {
//   padding-left: 5px;
// }

.MainNavbarPath {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 4px;
  padding: 6px 5px;
  max-height: 100%;
  &Link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 4px;
    max-height: 100%;
    &Icon {

    }
    &Name {
      content: '';
      user-select: contain;
      max-height: 16px;
      &First {
        color: #FEFEFE;
        font-weight: bold;
      }
    }
    &Separator {

    }
  }
}
</style>