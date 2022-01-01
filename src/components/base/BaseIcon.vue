<template>
	<div class="BaseIcon" @iconClick="$emit('iconClick', $event)">
		<div	class="BaseIconWrapper">
      <img :src="icon" :style="{ filter: autoColor && getTheme === 'light' ? 'grayscale(100%) brightness(0.625)' : '' }" alt="">
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
    }
	},
	computed: {
    ...mapGetters('theme', ['getTheme'])
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
		background-color: var(--toolbar-button-hover);
	}
	&:active > .BaseIconWrapper {
		background-color: var(--toolbar-button-pressed);
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
}

img {
  user-select: none;
}
</style>