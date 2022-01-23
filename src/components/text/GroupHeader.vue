<template>
  <div class="Group">
    <div class="GroupHeader" @click="opened = !opened">
      <img v-if="collapsable" src="@/assets/icons/text/collapse.svg" :alt="opened ? 'Collapse' : 'Expand'" :class="!opened ? 'Collapsed' : 'Expanded'"><span>{{ text }}</span><hr>
    </div>
    <slot v-if="!collapsable || opened" class="GroupSlot"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GroupHeader',
  data () {
    return {
      opened: true
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    collapsable: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  created () {
    if (this.collapsable) {
      this.opened = this.expanded
    }
  }
})
</script>

<style lang="scss" scoped>
.Group {
  display: flex;
  flex-flow: column;
}
.GroupHeader {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5em;
  margin: 0 0 6px 0;
  user-select: none;
}
hr {
  flex-grow: 1;
  border: none;
  border-top: 1px solid var(--horizontal-row);
}
img.Expanded {
  transform: rotate(90deg);
}
.GroupSlot {
  margin-left: 2em;
}
</style>