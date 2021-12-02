<template>
  <div class="BaseIconDivider" :class="'BaseIconDivider' + direction">
    <div :style="{ background: color }"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseIconDivider',
  props: {
    direction: {
      type: String,
      default: 'Horizontal'
    },
    color: {
      type: String,
      default: '#323232'
    }
  }
})
</script>

<style lang="scss" scoped>
.BaseIconDivider {
  min-width: 7px;
  min-height: 7px;
  width: 7px;
  height: 7px;
  div {
    width: 100%;
    height: 100%;
    min-height: 1px;
    min-width: 1px;
  }
}
.BaseIconDividerVertical {
  width: 100%;
  padding: 3px 4px;
}
.BaseIconDividerHorizontal {
  height: 100%;
  padding: 4px 3px;
}
</style>