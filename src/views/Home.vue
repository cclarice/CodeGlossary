<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  computed: {
    router () {
      return this.$router
    }
  }
})
</script>
