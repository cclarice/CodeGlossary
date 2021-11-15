<template>
  <div>
    <section>
      <div>
        <MainTool/>
        <MainTool/>
      </div>
      <router-view/>
      <div>
        <MainTool/>
        <MainTool/>
      </div>
    </section>
    <section>
      <MainTool/>
      <MainTool/>
    </section>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import MainTool from '@/components/layout/main/MainTool.vue'

export default Vue.extend({
  name: 'MainContent',
  components: { MainTool }
})
</script>

<style lang='scss' scoped>

</style>