<template>
  <main v-show="!loading" style="display: flex; flex-grow: 1; justify-content: center; align-items: center">
    <router-view/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'EmptyLayout',
  props: {
    loaded: {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  mounted () {
    this.loaded()
  }
})
</script>