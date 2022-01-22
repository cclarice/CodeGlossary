<template>
  <section class="Git">
    <debug-panel>
      text
    </debug-panel>
    <div class="GitHeader">
      <img src="" width="32" height="32" alt="">
      <h2>

      </h2>
      <img src="" width="32" height="32" alt="">
    </div>
    <div class="GitBody">
      <div class="GitBodyInfo">

      </div>
      <div class="GitBodyContributors">

      </div>
      <div class="GitBodyLanguages">

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DebugPanel from '@/components/DebugPanel.vue'

export default defineComponent({
  name: 'GitHubRepoPanel',
  components: { DebugPanel },
  props: {
    repLink: {
      type: String,
      required: true
    }
  },
  mounted () {
    console.log(this.$options.name, "mounted")
  }
})
</script>

<style lang="scss" scoped>

</style>