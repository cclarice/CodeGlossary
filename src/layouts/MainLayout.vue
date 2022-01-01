<template>
	<header id="Header">
		<MainNavigation id="Navigation">
		</MainNavigation>
		<nav class="Icons">
			<BaseIcon :icon="iconTheme"
								@click="setTheme(getTheme === 'light' ? 'dark' : 'light')"/>
			<BaseIcon :icon="getIcons[getLang]"
								@click="setLang(getLang === 'en_us' ? 'ru_ru' : 'en_us')"/>
		</nav>
	</header>
	<main id="Main">
		<nav class="Stripes" id="StripesLeft">
			<div class="Stripe" id="StripeLeftLeft">
        Stripe Left Left
			</div>
			<div class="Stripe" id="StripeLeftRight">
        Stripe Left Right
			</div>
		</nav>
		<aside class="Tool" id="ToolLeft">
			<div class="Stripe" id="ToolLeftLeft">
        Tool Left Left
			</div>
			<div class="Stripe" id="ToolLeftRight">
        Tool Left Right
			</div>
		</aside>
		<section id="Content">
			<router-view/>
		</section>
		<aside class="Tools Right">
			Tool Right
		</aside>
		<nav class="Stripe Right">
			Stripe Right
		</nav>
	</main>
	<footer id="Footer">
		<aside class="Tools Bottom">
			Tool Bottom
		</aside>
		<nav class="Stripe Bottom">
			ButtonBarBottom
		</nav>
		<nav id="Status">
			<section class="StatusLeft">

			</section>
			<section class="StatusRight">

			</section>
		</nav>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainNavigation from '@/layouts/main/MainNavigation.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
	components: {
		MainNavigation,
		BaseIcon
	},
	computed: {
		...mapGetters('theme', ['getTheme']),
    ...mapGetters('lang', ['getIcons', 'getLang']),
		iconTheme (): string {
			return this.getTheme === 'light' ?	require('@/assets/icons/theme/light.svg') :
																					require('@/assets/icons/theme/dark.svg')
		}
	},
	methods: {
		...mapMutations('theme', ['setTheme']),
    ...mapMutations('lang', ['setLang'])
	}
})
</script>

<style lang="scss" scoped>

#Header,
#Main,
#Footer {
	display: flex;
	flex-direction: row;
}

// Header
#Header {
	border: 1px solid var(--panel-border);
	background-color: var(--panel-background);
	flex: 0 0 30px;
	height: 30px;
	justify-content: space-between;
}

#Navigation {
	display: flex;
	// background-color: #0000ff44;
	justify-content: space-between;
}

.Icons {
  display: flex;
  flex-flow: row-reverse;
}

// Main
#Main {
	// background-color: #00ff0044;
	flex: 1 1 auto;
}

#Content {
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

// Footer
#Footer {
	// background-color: #0000ff44;
	flex-direction: column;
	flex: 0 0 fit-content;
}

#Status {
	justify-content: space-between;
}
</style>