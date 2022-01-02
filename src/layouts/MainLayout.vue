<template>
	<header id="Header" v-show="!loading">
		<MainNavigation id="Navigation">
		</MainNavigation>
		<nav class="Icons">
			<BaseIcon :icon="iconTheme"
								@click="setTheme(getTheme === 'light' ? 'dark' : 'light')"/>
			<BaseIcon :icon="getIcons[getLang]"
								@click="setLang(getLang === 'en_us' ? 'ru_ru' : 'en_us')"/>
		</nav>
	</header>
	<main id="Main" v-show="!loading">
		<nav class="Stripe" id="StripeLeft">
			<div id="StripeLeftLeft">
        Stripe Left Left
			</div>
			<div id="StripeLeftRight">
        Stripe Left Right
			</div>
		</nav>
		<aside id="ToolLeft">
			<div class="Tool">
        Tool Left Left
			</div>
			<div class="Tool">
        Tool Left Right
			</div>
		</aside>
		<section id="Content">
			<router-view/>
		</section>
		<aside id="ToolRight">
			<div class="Tool">
        Tool Right Left
			</div>
			<div class="Tool">
        Tool Right Right
			</div>
		</aside>
		<nav class="Stripe" id="StripeRight">
			<div id="StripeRightLeft">
        Stripe Right Left
			</div>
			<div id="StripeRightRight">
        Stripe Right Right
			</div>
		</nav>
	</main>
	<footer id="Footer" v-show="!loading">
		<aside id="ToolBottom">
      <div class="Tool">
        Tool Bottom Left
      </div>
      <div class="Tool">
        Tool Bottom Right
      </div>
		</aside>
		<nav class="Stripe" id="StripeBottom">
			<div class="StripeLeft">
        Stripe Bottom Left
      </div>
      <div class="StripeRight">
        Stripe Bottom Right
      </div>
		</nav>
		<nav id="Status">
			<section class="StatusLeft">
        Status Left
			</section>
			<section class="StatusRight">
        Status Right
			</section>
		</nav>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainNavigation from '@/layouts/main/MainNavigation.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import { mapGetters, mapMutations } from 'vuex'
import dynamic from '@/library/dynamic'
import store from '@/store'

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
	},
  async created () {
    const tool = await dynamic(import('@/store/modules/tool'))

    if (tool) {
      store.registerModule('tool', tool.default)
    } else {
      console.error('Cannot find module @/store/modules/tool')
    }
  },
  props: {
    loaded: {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  mounted () {
    this.loaded()
  }
})
</script>

<style lang="scss" scoped>

#Header,
#Main,
#Footer {
	display: flex;
	flex-flow: row;
  width: 100%;
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

.Stripe {
  display: flex;
  border: 1px solid var(--panel-border);
  background-color: var(--panel-background);
  justify-content: space-between;
  align-items: center;
}

#StripeLeft,
#StripeRight {
  border-bottom: none;
  border-top: none;
  writing-mode: vertical-rl;
  width: 23px;
}

#StripeLeft {
  transform: rotate(180deg);
}

#StripeLeftLeft,
#StripeLeftRight {

}

#StripeRight {
}

#StripeBottom {
  border-bottom: none;
  height: 22px;
}

.Tool {
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--panel-border);
  flex-grow: 1;
}

#ToolBottom,
#ToolRight,
#ToolLeft {
  display: flex;
  flex-flow: column nowrap;
}

#ToolBottom {
  flex-flow: row nowrap;
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