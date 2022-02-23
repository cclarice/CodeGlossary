<template>
	<div class="BaseIcon" @iconClick="$emit('iconClick', $event)">
		<div class="BaseIconWrapper" :class="{ BaseIconWrapperActive: active }">
      <img :src="icon" :style="{ filter: autoColor && theme === 'light' ? 'grayscale(100%) brightness(0.625)' : '' }" alt="">
    </div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

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
    }
	},
	computed: {
    ...mapGetters('theme', {
      theme: 'getTheme'
    })
	}
})
</script>

<style lang="scss" scoped>
.BaseIcon {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 26px;
	height: 26px;
	&:hover > .BaseIconWrapper {
		background-color: var(--icon-hovered-background);
	}
	&:active > .BaseIconWrapper {
		background-color: var(--icon-pressed-background);
	}
  cursor: pointer;
}

.BaseIconWrapper {
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 3px;
	width: 22px;
	height: 22px;
  padding: 3px;
  &Active {
		background-color: var(--icon-pressed-background);
  }
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-select: none;
}
</style>
