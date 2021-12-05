<template>
  <div class="Calculate" @mouseenter="focused = true" @mouseleave="focused = false">
    <div class="CalculateHeader">
      <p>Calculate:</p>
    </div>
    <div class="CalculateMain">
      <div class="CalculateBodyAside">
        <div class="CalculateBodyAsideItem" v-for="(item, index) of items" :key="index" @click="item.handler()">
          <component v-bind="{ ...item, handler: undefined }"/>
          <div class="CalculateBodyAsideItemName"v-if="asideOpened && item.name && !item.name.includes('Hide')">{{ item.name }}</div>
        </div>
      </div>
      <component class="CalculateMainComponent" :is="currentComponent" :focused="focused"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainToolCalculate',
  data () {
    return {
      dynamicComponents: {
        MainToolCalculateRegular: () => import('@/components/layout/main/tool/calculate/MainToolCalculateRegular.vue')
      },
      currentComponent: null,
      components: {
        BaseIcon: () => import('@/components/base/icon/BaseIcon.vue'),
        BaseIconDivider: () => import('@/components/base/icon/BaseIconDivider.vue')
      },
      items: [],
      asideOpened: false,
      focused: true
    }
  },
  computed: {
    asideOpenText () {
      return this.asideOpened ? 'Show Calculators' : 'Hide Calculators'
    }
  },
  created () {
    const data    = this
    const icon    = this.components.BaseIcon
    const divider = this.components.BaseIconDivider

    this.currentComponent = this.dynamicComponents[Object.keys(this.dynamicComponents)[0]]
    this.items = [
      {
        is: icon,
        name: data.asideOpenText,
        src: require('@/assets/icons/arrow_expand.svg'),
        handler: () => {
          this.asideOpened = !this.asideOpened
          if (this.$refs.asideOpenText?.$el) {
            this.$refs.asideOpenText.$el.style.transform = this.asideOpened ? 'rotate(180deg)' : ''
          }
        },
        ref: 'asideOpenText'
      },
      {
        is: divider,
        direction: 'Vertical'
      },
      {
        is: icon,
        name: 'Regular',
        src: require('@/assets/icons/tool/calculator/types/regular.svg'),
        handler: () => {
          data.currentComponent = data.dynamicComponents.MainToolCalculateRegular
        }
      },
      {
        is: icon,
        name: 'Programmer',
        src: require('@/assets/icons/tool/calculator/types/programmer.svg'),
        handler: () => {
          data.currentComponent = data.dynamicComponents.MainToolCalculateRegular
        }
      },
      {
        is: icon,
        name: 'Engineer',
        src: require('@/assets/icons/tool/calculator/types/engineer.svg'),
        handler: () => {
          data.currentComponent = data.dynamicComponents.MainToolCalculateRegular
        }
      },
      {
        is: icon,
        name: 'Date',
        src: require('@/assets/icons/tool/calculator/types/date.svg'),
        handler: () => {
          data.currentComponent = data.dynamicComponents.MainToolCalculateRegular
        }
      }
    ]
  }
})
</script>

<style lang="scss" scoped>
.Calculate {
  display: flex;
  flex-direction: column;
  .CalculateHeader {
    height: 27px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;

    background: #3B4754;
    p { padding: 3px }
  }
  .CalculateMain {
    height: 100%;
    display: flex;
    background: #313335;
    .CalculateBodyAside {
      display: flex;
      flex-direction: column;
      background: #3C3F41;
      padding: 0 1px;
      .CalculateBodyAsideItem {
        display: flex;
        align-items: center;
      }
      .CalculateBodyAsideItemName {
        padding-right: 6px;
        user-select: none;
      }
    }
    .CalculatesMainComponent {

    }
  }
}
</style>