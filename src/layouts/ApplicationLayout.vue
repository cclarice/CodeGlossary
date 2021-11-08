<template>
  <div class="wrapper">
    <BaseBalloons/>
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseBalloons from '@/components/base/balloons/BaseBalloons.vue'

export default Vue.extend({
  name: 'ApplicationLayout',
  components: { BaseBalloons }
})
</script>

<style scoped>

</style>