<template>
  <header class="MainNavbar">
    <MainNavbarPath/>
    <MainNavbarToolbar/>
  </header>
</template>

<script lang='ts'>
import Vue from 'vue'
import MainNavbarToolbar from '@/components/layout/main/navbar/MainNavbarToolbar.vue'
import MainNavbarPath from '@/components/layout/main/navbar/MainNavbarPath.vue'

export default Vue.extend({
  name: 'MainHeader',
  components: { MainNavbarPath, MainNavbarToolbar }
})
</script>

<style lang='scss' scoped>
.MainNavbar {
  height: 30px;

  background-color: #3C3F41;
  border: #323232 solid 1px;
}
</style>