<template>
  <div class="MainStatusBar">
    <div class="MainStatusBarToolbarHidden"
         @click="toggleToolbar"
         @mouseenter="enterToolbar"
         @mouseleave="leaveToolbar">
      <BaseImage :src="getToolbarHidden ? images.toolbarVisible : images.toolbarHidden"
                 :alt="'Toolbar visible'"/>
    </div>
    <div class="MainStatusBarContent">
      <div class="MainStatusBarItem MainStatusBarItemText"
           @click="browserActive = true"
           @mouseleave="browserActive = false"
           @blur="browserActive = false"
           v-if="browser">
        {{ browser.name }}
        <div v-show="browserActive"
             class="MainStatusBarItemPopup"
             @click="browserActive = true">
          <div class="MainStatusBarItemPopupHeader">Browser</div>
          <div class="MainStatusBarItemPopupBody">
            Name: {{ browser.name }}<br>
            version: {{ browser.version }}<br>
            debug: <br>
            <div class="code">
              <code>
                {{ browser.debug }}
              </code>
            </div>
          </div>
        </div>
      </div>
      <div class="MainStatusBarItem">
        <BaseImage class="MainStatusBarItemImageCould"
                   :src="images.cloudDisconnected"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import BaseImage from '@/components/base/BaseImage.vue'
import { mapMutations, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'MainStatusBar',
  components: { BaseImage },
  data () {
    return {
      browserActive: false,
      syncActive: false,
      images: {
        toolbarVisible: require('@/assets/icons/toolbar/tbShown.svg'),
        toolbarHidden: require('@/assets/icons/toolbar/tbHidden.svg'),
        cloudDisconnected: require('@/assets/icons/cloud/not_connected.svg')
      }
    }
  },
  created () {
    /*
      Note Что то для получения геолокации
    \*
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      let crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    */
  },
  methods: {
    ...mapMutations('mainLayout', ['toggleToolbar', 'enterToolbar', 'leaveToolbar'])
  },
  computed: {
    ...mapGetters('mainLayout', ['getToolbarHidden', 'getToolbarHover']),
    browser () {
      if (!navigator.userAgent) {
        return {
          name: 'Unknown',
          version: undefined,
          description: 'Has no info about browser'
        }
      }
      const userAgent = navigator.userAgent
      const browserStack = userAgent.match(/(edg|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
      console.log(userAgent)
      console.log(browserStack)
      return {
        name: browserStack[1],
        version: browserStack[2],
        debug: userAgent.replaceAll(')', ')\n').replaceAll('(', '\n(')
      }
    }
  }
})
</script>

<style lang='scss' scoped>
.MainStatusBar {
  height: 21px;
  width: 100%;
  background-color: #3C3F41;
  border: #323232 solid 1px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .MainStatusBarToolbarHidden {
    padding: 2px 3px;
  }
  .MainStatusBarContent {
    margin-right: 6px;
    display: flex;
    flex-direction: row;
    .MainStatusBarItem {
      z-index: 1;
      padding: 0 3px;
      font-size: 11px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 16px;
      height: 100%;
      &:hover { background-color: #4C5052 }
      .MainStatusBarItemPopup {
        user-select: text;
        z-index: 10;
        position: absolute;
        bottom: 22px;
        right: 0;
        background-color: #3C3F41;
        border: #323232 solid 1px;
        .MainStatusBarItemPopupHeader {
          height: 23px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #4A4E52;
        }
        .MainStatusBarItemPopupBody {
          background-color: #3C3F41;
          padding: 4px 8px;
          word-wrap: unset;
          white-space: pre-wrap;
          .code {
            background-color: #323232;
            margin: 6px 0;
            padding: 6px;
          }
        }
        &:after {
          display: block;
          position: absolute;
          z-index: -1;
          content: " ";
          left: -22px;
          top: -22px;
          width: calc(100% + 44px);
          height: calc(100% + 44px);
        }
      }
    }
    .MainStatusBarItemText {
      padding: 0 6px;
      user-select: none;
    }
  }
}
</style>