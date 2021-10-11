<template>
  <div class="Tests flexCenter">
    <div class="container">
      <h1>Tests:</h1>
      <BaseButton
          v-for="route in Router.options.routes.filter(r => {return r.path.includes('/test') && r.path !== '/test'})"
          :text="route.name"
          :isDefault="false"
          @clickButton="Router.push({ name: route.name })"
      />
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/base/button/BaseButton.vue'
import router from "@/router";

export default {
  name: "Tests.vue",
  components: { BaseButton },
  computed: {
    Router () { return router }
  }
}
</script>

<style lang="scss" scoped>
.Tests {
  width: 100%;
  height: 100%;
  .container {
    display: flex;
    flex-direction: column;
    background: #3C3F41;
    padding: 40px 60px;
    & > *            {margin-bottom: 22px}
    & > *:last-child {margin-bottom: 0}
  }
}
</style>