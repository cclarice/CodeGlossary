<template>
  <div class="wrapper">
    <BaseNotification/>
    <slot/>
  </div>
</template>

<script>
import Vue from 'vue'
import BaseNotification from '@/components/base/BaseNotification'

export default {
  name: "EmptyLayout.vue",
  components: { BaseNotification }
}
</script>

<style scoped>

</style>