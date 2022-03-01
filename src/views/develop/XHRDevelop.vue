<template>
  <div class="card">
    <base-input-text width="320" v-model="link"/>
    <base-button text="GET" @click="get"/>
    <base-button text="HEAD" @click="head"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInputText from '@/components/base/BaseInputText.vue'
import xhrDevelop from '@/services/xhrDevelop'

export default defineComponent({
  name: 'XHRDevelop',
  components: { BaseInputText, BaseButton },
  data: () => ({
    link: '/files/uselessData.json'
  }),
  methods: {
    get () {
      xhrDevelop.getSomething(this.link)
        .then((response) => {
          console.log(response)
        })
    },
    head () {
      xhrDevelop.headSomething(this.link)
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
