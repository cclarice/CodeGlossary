<template>
	<header id="Header" v-show="!loading">
		<MainNavigation id="Navigation"/>
		<nav class="Icons">
			<BaseIcon :icon="iconTheme"
								@click="setTheme(getTheme === 'light' ? 'dark' : 'light')"/>
			<BaseIcon :icon="getIcons[getLang]"
								@click="setLang(getLang === 'en_us' ? 'ru_ru' : 'en_us')"/>
		</nav>
	</header>
	<main id="Main" v-show="!loading">
		<nav class="Stripe" id="StripeLeft" v-if="(getStripes.leftLeft.length || getStripes.leftRight.length) && stripesShown">
			<div id="StripeLeftLeft" v-if="getStripes.leftLeft.length">
        <MainStripeButton v-for="stripe of getStripes.leftLeft" :key="stripe.id" :tool="stripe"/>
			</div>
			<div id="StripeLeftRight" v-if="getStripes.leftRight.length">
        <MainStripeButton v-for="stripe of getStripes.leftRight" :key="stripe.id" :tool="stripe"/>
			</div>
		</nav>
		<aside id="ToolLeft" v-if="getATools.leftLeft || getATools.leftRight">
			<div class="Tool" v-if="getATools.leftLeft">
        <component v-if="component" :is="component"/>
        Tool Left Left
			</div>
			<div class="Tool" v-if="getATools.leftRight">
        Tool Left Right
			</div>
		</aside>
    <BaseScrollable id="Viewport">
      <router-view id="Content"/>
    </BaseScrollable>
		<aside id="ToolRight">
			<div class="Tool" v-if="getATools.rightLeft">
        Tool Right Left
        <BaseError/>
			</div>
			<div class="Tool" v-if="getATools.rightRight">
        Tool Right Right
        <BaseLoading/>
			</div>
		</aside>
		<nav id="StripeRight"
         class="Stripe"
         v-if="getStripes.rightLeft.length || getStripes.rightRight.length && stripesShown">
			<div id="StripeRightLeft" v-if="getStripes.rightLeft.length">
        <MainStripeButton v-for="stripe of getStripes.rightLeft" :key="stripe.id" :tool="stripe"/>
			</div>
			<div id="StripeRightRight" v-if="getStripes.rightRight.length">
        <MainStripeButton v-for="stripe of getStripes.rightRight" :key="stripe.id" :tool="stripe"/>
			</div>
		</nav>
	</main>
	<footer id="Footer" v-show="!loading">
		<aside id="ToolBottom" v-if="getATools.bottomRight || getATools.bottomRight">
      <div class="Tool" v-if="getATools.bottomLeft">
        Tool Bottom Left
      </div>
      <div class="Tool" v-if="getATools.bottomRight">
        Tool Bottom Right
      </div>
		</aside>

		<nav class="Stripe" id="StripeBottom" v-if="getStripes.bottomLeft.length || getStripes.bottomLeft.length && stripesShown">
			<div class="StripeLeft" v-if="getStripes.bottomLeft.length">
        <MainStripeButton v-for="stripe of getStripes.bottomLeft" :key="stripe.id" :tool="stripe"/>
      </div>
      <div class="StripeRight" v-if="getStripes.bottomRight.length">
        <MainStripeButton v-for="stripe of getStripes.bottomRight" :key="stripe.id" :tool="stripe"/>
      </div>
		</nav>
		<nav id="Status">
			<section class="StatusLeft">
        <div id="ToggleStripes" @click="toggleStripesShown()">
          <img :src="stripesShown ? require('@/assets/icons/stripe/visible.svg')
                                  : require('@/assets/icons/stripe/hidden.svg')"
               alt="">
        </div>
			</section>
			<section class="StatusRight">
        Status Right
			</section>
		</nav>
	</footer>
  <BaseBalloons v-show="!loading"/>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import MainNavigation from '@/layouts/main/MainNavigation.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import { mapGetters, mapMutations } from 'vuex'
import BaseScrollable from '@/components/base/BaseScrollable.vue'
import BaseLoading from '@/components/base/BaseLoading.vue'
import BaseError from '@/components/base/BaseError.vue'
import MainStripeButton from '@/layouts/main/MainStripeButton.vue'
import BaseBalloons from '@/components/balloon/BaseBalloons.vue'

const defaultComponentOptions = {
  delay: 200,
  timeout: 5000,
  errorComponent: BaseError,
  loadingComponent: BaseLoading
}

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      browserIcons: {
        brave: require('@/assets/icons/browser/brave.svg'),
        chrome: require('@/assets/icons/browser/chrome.svg'),
        edge: require('@/assets/icons/browser/edge.svg'),
        explorer: require('@/assets/icons/browser/explorer.svg'),
        firefox: require('@/assets/icons/browser/firefox.svg'),
        opera: require('@/assets/icons/browser/opera.svg'),
        safari: require('@/assets/icons/browser/safari.svg'),
        yandex: require('@/assets/icons/browser/yandex.svg')
      },
      platformIcons: {
        windows: null,
        linux: null,
        macos: null,
        android: null,
        ios: null
      }
    }
  },
	components: {
    BaseBalloons,
    MainStripeButton,
    BaseScrollable,
		MainNavigation,
		BaseIcon,
    StringManipulation: defineAsyncComponent({ loader: () => import('@/layouts/main/tools/StringManipulation.vue'), ...defaultComponentOptions}),
    BaseLoading,
    BaseError
	},
	computed: {
		...mapGetters('theme', ['getTheme']),
    ...mapGetters('lang', ['getIcons', 'getLang']),
    ...mapGetters('tool', ['getTools', 'getATools', 'getStripes', 'stripesShown']),
		iconTheme (): string {
			return this.getTheme === 'light' ?	require('@/assets/icons/theme/light.svg') :
																					require('@/assets/icons/theme/dark.svg')
		},
    component () {
      return (this.getTools && this.getTools[0]?.component) || null
    }
	},
	methods: {
		...mapMutations('theme', ['setTheme']),
    ...mapMutations('lang', ['setLang']),
    ...mapMutations('tool', ['initTools', 'toggleStripesShown'])
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
    this.initTools()
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
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
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
  &Right,
  &Left {
    width: 100%;
  }
  .StripeButton {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    padding: 10px 0;
    user-select: none;
    &:hover {
      background-color: #353739;
    }
  }
}

#StripeLeft {
  transform: rotate(180deg);
  :deep img {
    transform: rotate(180deg);
  }
}

#StripeLeftLeft,
#StripeLeftRight,
#StripeRightLeft,
#StripeRightRight,
#StripeBottomLeft,
#StripeBottomRight, {
  display: flex;
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
  background-color: var(--panel-background);
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
  border: var(--panel-border) solid 1px;
  border-bottom: none;
}

#ToolRight {
  border-left: var(--panel-border) solid 1px;
}
#ToolLeft {
  border-right: var(--panel-border) solid 1px;
}

#Viewport {
  display: flex;
  flex: 1 1 0;
  min-height: 100%;
}

#Content {
  margin: auto;
}

#Footer {
	flex-direction: column;
	flex: 0 0 fit-content;
}

#Status {
  display: flex;
  height: 22px;
  align-items: center;
	justify-content: space-between;
  background-color: var(--panel-background);
  border: var(--panel-border) solid 1px;
}

#ToggleStripes {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 4px;
}
</style>