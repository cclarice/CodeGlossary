<template>
  <div class="wrapper">
    <BaseNotification/>
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseNotification from '@/components/base/notification/BaseNotification.vue'

export default Vue.extend({
  name: "EmptyLayout.vue",
  components: { BaseNotification }
})
</script>

<style scoped>
</style>