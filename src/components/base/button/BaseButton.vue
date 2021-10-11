<template>
  <button class="BaseButton"
          @click="$emit('clickButton')"
          :disabled="disabled"
          :class="{isDefault: isDefault}"
          :style="{width: fixedWidth}"
  >
    <div class="BaseButtonText">{{text}}</div>
  </button>
</template>

<script lang="ts">
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isDefault: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.BaseButton {
  height: 24px;
  min-width: 24px;
  padding: 0 12px;
  background: #4C5052;
  border: 1px solid #5E6060;
  box-sizing: border-box;
  border-radius: 3px;
  &:focus,
  &:active {
    border: 1px solid #456A90;
    outline: #3D6185 solid 2px;
  }
}

.isDefault {
  background: #365880;
  border: 1px solid #4C708C;
  color: #FEFEFE;
}
.BaseButtonText {
  height: 100%;
  padding-top: 4px;
}
</style>