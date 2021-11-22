<template>
  <div class="MainNavbarPath">
    <div class="MainNavbarPath" style="display: flex; height: 100%; align-items: center">
      <router-link
          tag="div"
          v-for="(path, index) of paths" :key="path.name"
          :to="{ name: path.name }"
          style="display: flex"
      >
        <img class="favicon" :src="path.meta['favicon'] || '/favicons/default.svg'" alt="">
        <!--<pre> {{ path.meta['title'] || path.name }}{{ index === paths.length - 1 ? '' : ' > '}}</pre>-->
        <pre class="normal" v-bind:class="{ first: index === 0 }"> {{ path.meta['title'] || path.name }}<img class="arrow" v-if="index !== paths.length - 1" :src="'/favicons/arrow.svg'" alt=""></pre>

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
.arrow {
  height: 15px;
  transform: translateY(3px);
  margin-left: 3px;
}

.normal {
  color: #BBBBBB;
  font-weight: 400;
}

.first {
  color: #FEFEFE;
  font-weight: bold;
}

.favicon {
  padding-left: 5px;
}
</style>