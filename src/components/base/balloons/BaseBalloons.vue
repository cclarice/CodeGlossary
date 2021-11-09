<template>
  <div class="balloonContainer">
    <!-- todo: Balloon System -->
    <div class="BaseBalloon"
         v-for="balloon in getBalloons"
         :style="{
           animationName: 'disappear'
         }"
    >
      <img class="BaseBalloonInfoImage" src="@/assets/icons/info.svg" alt="">
      <div class="BaseBalloonLeft" :id="'Bx' + balloon.id">
<!--        <img class="BaseBalloonIconImage" :src="'assets/' + balloon.type" :alt="balloon.type">-->
      </div>
      <div class="BaseBalloonCenter">

        <div class="BaseBalloonHead">{{balloon.head}}<!-- todo: settings icon <div class="BaseBalloonSettings"></div>--></div>

        <div class="BaseBalloonBody" :class="{BaseBalloonBodeClose: closed,
                                              BaseBalloonBody: !closed}">{{balloon.body}}</div>

      </div>
      <div class="BaseBalloonRight">

      </div>
      <img class="BaseBalloonCustomizationImage" src="@/assets/icons/customization.svg" alt="">
      <div class="row">
        <img class="BaseBalloonCloseImage" src="@/assets/icons/close.svg" alt="">
        <img class="BaseBalloonArrowImage" src="@/assets/icons/ arrow.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'BaseBalloons',
  computed: {
    ...mapGetters('balloons', ['getBalloons']),
    balloons () { return this.getBalloons }
  },
  methods: {
    ...mapMutations('balloons', ['toggleClosedBalloon'])
  }
}


</script>

<style scoped lang="scss">
.balloonContainer {
  position: fixed;
  right: 30px;
  bottom: 20px;
}

.BaseBalloonCustomizationImage {
  display: flex;
  align-items: flex-start;
}

.BaseBalloonBody {
  width: 320px;
  max-width: 320px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  padding-left: 6px;
}

.BaseBalloonBodyClose {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.BaseBalloonHead {
  padding-left: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
}

.BaseBalloon {
  padding: 7px 10px 8px 12px;
  display: flex;
  /*width: 373px;*/
  background: #3C3F41;
  border: 1px solid #323232;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.row {
  display: flex;
  flex-direction: column;
}


</style>