<template>
	<div class="base-icon" @click="disabled ? null : $emit('cClick', $event)">
		<div class="base-icon__wrapper" :class="{ active, disabled }">
      <img class="base-icon__icon" :src="icon" alt="" :class="{ disabled }">
    </div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'BaseIcon',
	props: {
		icon: {
			type: String,
			default: require('@/assets/icons/stub.svg')
		},
    autoColor: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
	},
  events: ['cClick']
})
</script>

<style lang="scss" scoped>
.base-icon {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 26px;
	height: 26px;
	&:hover > .base-icon__wrapper:not(.disabled) {
		background-color: var(--icon-hovered-background);
	}
	&:active > .base-icon__wrapper:not(.disabled) {
		background-color: var(--icon-pressed-background);
	}
  cursor: pointer;
  &__icon {
    filter: var(--filter-icon);
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
  }
  &__icon.disabled {
    opacity: .5
  }
}

.base-icon__wrapper {
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 3px;
	width: 22px;
	height: 22px;
  padding: 3px;
  &.active:not(.disabled) {
		background-color: var(--icon-pressed-background);
  }
}
</style>
