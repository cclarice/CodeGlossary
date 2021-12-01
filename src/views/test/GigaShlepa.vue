<template lang='html'>
  <div style="display: flex; width: 100%; height: 100%; justify-content: center; align-items: center">
    <form @focus="log('formdata')" @blur="log('blur')" style="height: 100%">
    </form>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Checkers.vue',
  methods: {
    log (arg) {
      console.log(arg)
    }
  }
})
</script>

<style lang='scss' scoped>

</style>