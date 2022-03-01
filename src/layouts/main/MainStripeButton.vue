<template>
  <div class="StripeButton">
    <img class="icon" :src="tool.icon || require('@/assets/icons/stub.svg')">
    {{ tool.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainStripeButton',
  props: {
    tool: {
      type: Object,
      required: true
    }
  }
})
</script>