<template>
	<div class="BaseIcon" @iconClick="$emit('iconClick', $event)">
		<div	class="BaseIconWrapper"
					:style="{ backgroundImage: iconImage }"/>
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
		}
	},
	computed: {
		iconImage () {
			return 'url("' + this.icon + '")'
		}
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
}

.BaseIconWrapper {
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 3px;
	width: 22px;
	height: 22px;
}
</style>