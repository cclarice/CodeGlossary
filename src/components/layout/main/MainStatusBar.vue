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
      <div class="MainStatusBarItem">
        <BaseImage class="MainStatusBarItemImageCould"
                   :src="images.cloudDisconnected"/>
      </div>
      <div class="MainStatusBarItem MainStatusBarItemText"
           @click="browserActive = true"
           @mouseleave="browserActive = false"
           @blur="browserActive = false"
           v-if="browser">
        <BaseImage :src="browserIcons[browser.name.toLowerCase()]" class="MainStatusBarItemImage"/>
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
                {{ cores }}
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
        toolbarVisible:    require('@/assets/icons/toolbar/tbShown.svg'),
        toolbarHidden:     require('@/assets/icons/toolbar/tbHidden.svg'),
        cloudDisconnected: require('@/assets/icons/cloud/not_connected.svg')

      },
      browserIcons: {
        chrome:   require('@/assets/icons/browser/chrome.svg'),
        firefox:  require('@/assets/icons/browser/firefox.svg'),
        edge:     require('@/assets/icons/browser/edge.svg'),
        yandex:   require('@/assets/icons/browser/yandex.svg'),
        safari:   require('@/assets/icons/browser/safari.svg'),
        brave:    require('@/assets/icons/browser/brave.svg'),
        explorer: require('@/assets/icons/browser/explorer.svg'),
        opera:    require('@/assets/icons/browser/opera.svg')
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
    cores () {
      if (!navigator?.userAgent) {
        return undefined
      }
      return navigator.userAgent.split(/(\d\s|\)\s)/i).map(
          ((value: string, index: number, array: Array<string>) => {
            if (!(index % 2)) {
              return (value + (array[index + 1] ? array[index + 1] : '') + (array[index + 2] && array[index + 2][0] === '(' ? array[index + 2] + array[index + 3] : '')).trim()
            }
          })).filter(item => item && item[0] !== '(').map(value => {
        const massive = value.replaceAll(' (', 'SEP(').split(/SEP|\//, 3)
        return {
          name: massive[0],
          version: massive[1],
          other: massive[2],
          from: value
        }
      })
    },
    browser () { // Brave Edge Explorer Yandex Opera Chrome Edge Firefox
      if (!this.cores) {
        return {
          name: 'Unknown'
        }
      }
      return (
          (navigator['brave']?.isBrave() ? { name: 'Brave' } : null)          ||
          this.cores.find(c => c.name === 'Edg' && (c.name = 'Edge'))         ||
          this.cores.find(c => c.from.includes('Trident') && (c.name = 'Explorer'))                                                                   ||
          this.cores.find(c => c.name === 'YaBrowser' && (c.name = 'Yandex')) ||
          this.cores.find(c => c.name === 'OPR'       && (c.name = 'Opera'))  ||
          this.cores.find(c => c.name === 'Chrome')                           ||
          this.cores.find(c => c.name === 'Edge')                             ||
          this.cores.find(c => c.name === 'Firefox')                          ||
          { name: 'Unknown' })
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
      .MainStatusBarItemImage {
        margin-right: 2px;
      }
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