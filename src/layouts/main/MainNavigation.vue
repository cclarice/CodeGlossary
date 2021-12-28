<template>
	<nav id="Navigation">
		<a v-for="(curr, index) of path"
       :href="curr.path"
       :key="curr.name"
       @mousedown="clickRoute($event, curr)"
       class="NavigationRoute">
			<img :src="curr.meta.favicon || defaultFavicon" :alt="curr.name">
			<span>{{ curr.name }}</span>
			<div v-if="index !== path.length - 1"
				:style="{ backgroundImage: navSeparator, minWidth: '5px', height: '15px'}"/>
		</a>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'

export default defineComponent({
	name: 'MainNavigation',
	'data' () {
		return {
			defaultFavicon: require('@/assets/favicons/favicon.svg'),
			navSeparator:	`url("${require('@/assets/elements/navSeparator.svg')}")`
		}
	},
	computed: {
		path (): Array<RouteLocationNormalizedLoaded>{
			const path: Array<RouteLocationNormalizedLoaded> = []
			// eslint-disable-next-line
			let   curr: any = this.$route

			while (curr) {
				path.unshift(curr)
				curr = curr.meta.parent
			}

			return path
		}
	},
	methods: {
		clickRoute (event: MouseEvent, curr: RouteLocationNormalizedLoaded): void {
			if (event.button === 0) {
				this.$router.push(curr.path)
			} else if (event.button === 1) {
				window.open(curr.path, undefined, "popup")
			}
		}
	}
})
</script>

<style lang="scss" scoped>
#Navigation {
	display: flex;
	padding: 0 5px;
	gap: 4px;
}
.NavigationRoute {
	display: flex;
	padding: 6px 0;
	align-items: flex-start;
	gap: 4px;
	cursor: pointer;
	color: var(--default);
	text-decoration: none;
	&, & > * {
		user-select: none;
		-webkit-user-drag: none;
	}
	span {
		margin-top:  1px;
		text-align:  start;
		font-size:	 12px;
		line-height: 15px;
		font-weight: 500;
		height:      15px;
	}
	&:first-child span {
		filter: contrast(100);
		font-weight: 600;
	}
}
</style>