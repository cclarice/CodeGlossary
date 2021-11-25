<template lang='html'>
  <div style="display: flex; width: 100%; height: 100%; justify-content: center; align-items: center">
        <form @focus="log('formdata')" @blur="log('blur')" style="height: 100%">
          <label for="fname">First name:</label><br>
          <input type="text" id="fname" name="fname"><br>
          <label for="lname">Last name:</label><br>
          <input type="text" id="lname" name="lname">
        </form>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'TestTwoInputs.vue',
  methods: {
    log (arg) {
      console.log(arg)
    }
  }
})
</script>

<style lang='scss' scoped>

</style>





















