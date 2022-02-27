<template>
  <div class="card">
    <base-input-text width="320" v-model="link"/>
    <base-button text="Send" @click="send"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInputText from '@/components/base/BaseInputText.vue'
import XhrDevelop from '@/services/xhrDevelop'

export default defineComponent({
  name: 'XHRDevelop',
  components: { BaseInputText, BaseButton },
  data: () => ({
    link: '/files/uselessData.json'
  }),
  methods: {
    send () {
      XhrDevelop.getSomething(this.link)
        .then((response) => {
          console.log(response)
        })
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
}
</style>
