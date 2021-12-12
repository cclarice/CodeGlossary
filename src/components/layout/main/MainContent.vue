<template>
  <div class="MainContent">
    <section class="MainContentMain">
      <div class="MainContentLeftTools"
           v-if="leftLeft || leftRight">
        <MainTool :tool="leftLeft"
                  :active="focused === 'leftLeft'"
                  @click.native="focus('leftLeft')"/>
        <div class="MainContentToolsDivider"
             v-if="leftLeft && leftRight"/>
        <MainTool :tool="leftRight"
                  :active="focused === 'leftRight'"
                  @click.native="focus('leftRight')"/>
      </div>
      <router-view class="Content"
                   @click.native="focus('Content')"/>
      <div class="MainContentRightTools"
           v-if="rightLeft || rightRight">
        <MainTool :tool="rightLeft"
                  :active="focused === 'rightLeft'"
                  @click.native="focus('rightLeft')"/>
        <div class="MainContentToolsDivider"
             v-if="leftLeft && leftRight"/>
        <MainTool :tool="rightRight"
                  :active="focused === 'rightRight'"
                  @click.native="focus('rightRight')"/>
      </div>
    </section>
    <section class="MainContentBottomTools"
             v-if="bottomLeft || bottomRight">
      <MainTool :tool="bottomLeft"
                :active="focused === 'bottomLeft'"
                @click.native="focus('bottomLeft')"/>
      <div class="MainContentToolsDivider"
           v-if="leftLeft && leftRight"/>
      <MainTool :tool="bottomRight"
                :active="focused === 'bottomRight'"
                @click.native="focus('bottomRight')"/>
    </section>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import MainTool from '@/components/layout/main/tool/MainTool.vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'MainContent',
  components: {
    MainTool
  },
  data () {
    return {
      focused: 'Content'
    }
  },
  computed: {
    ...mapGetters('mainLayout', ['getStripes']),
    leftLeft () {
      return this.getStripes.stripeLeft.left.find(this.isActiveTool)
    },
    leftRight () {
      return this.getStripes.stripeLeft.right.find(this.isActiveTool)
    },
    rightLeft () {
      return this.getStripes.stripeRight.left.find(this.isActiveTool)
    },
    rightRight () {
      return this.getStripes.stripeRight.right.find(this.isActiveTool)
    },
    bottomLeft () {
      return this.getStripes.stripeBottom.left.find(this.isActiveTool)
    },
    bottomRight () {
      return this.getStripes.stripeBottom.right.find(this.isActiveTool)
    }
  },
  methods: {
    isActiveTool (tool) {
      return !!tool.active
    },
    focus(element) {
      console.log(element)
      this.focused = element
    }
  }
})
</script>

<style lang='scss' scoped>
.MainContent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .MainContentToolsDivider {
    width: 1px;
    height: 100%;
    background-color: #323232;
    cursor: col-resize;
  }
  &Main {
    display: flex;
    flex-grow: 1;

    .Content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .MainContentLeftTools {
      display: flex;
      flex-direction: column-reverse;
      min-width: content-box;
      border-right: 1px solid #323232;
      background: purple;
      // min-width: 25px;
      height: 100%;
    }
    .MainContentRightTools {
      display: flex;
      flex-direction: column;
      border-left: 1px solid #323232;
      background: cyan;
      min-width: 25px;
      height: 100%;
    }
    .MainContentToolsDivider {
      width: 100%;
      height: 1px;
      cursor: row-resize;
      :before {
        content: "";
        background-color: red;
        height: 3px;
        width: 100%;
      }
    }
  }
  .MainContentBottomTools {
    display: flex;
    flex-direction: row;
    border-top: 1px solid #323232;
    background: darkred;
    min-height: 25px;
    width: 100%;
  }
}
</style>