<template>
  <div class="MainNavbarPath">
    <div class="MainNavbarPath" style="display: flex; height: 100%; align-items: center">
      <router-link
          tag="div"
          v-for="(path, index) of paths" :key="path.name"
          :to="{ name: path.name }"
          style="display: flex"
      >
        <img :src="path.meta['favicon'] || '/favicons/favicon.svg'" alt="">
        <pre> {{ path.meta['title'] || path.name }}{{ index === paths.length - 1 ? '' : ' > '}}</pre>
      </router-link>
    </div>
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
      console.log(paths)

      return this.$router.options.routes.filter(router => paths.includes(router.path))
    }
  }
})
</script>

<style lang='scss' scoped>
.MainNavbarPath {
  height: 100%;
}
</style>