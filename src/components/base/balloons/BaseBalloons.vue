<template>
  <div class="balloonContainer">
    <!-- todo: Balloon System -->
    <div class="BaseBalloon"
         v-for="balloon in balloons"
         :style="{
           animationName: 'disappear'
         }"
    >
      <img class="BaseBalloonInfoImage" src="@/assets/icons/info.svg" alt="">
<!--      <div class="BaseBalloonLeft" :id="'Bx' + balloon.id">-->
<!--        <img class="BaseBalloonIconImage" :src="'assets/' + balloon.type" :alt="balloon.type">-->
<!--      </div>-->
      <div class="BaseBalloonCenter">
        <div class="BaseBalloonLeftStr">
          <div class="BaseBalloonHead">{{balloon.head}}<!-- todo: settings icon <div class="BaseBalloonSettings"></div>--> </div>
          <img class="BaseBalloonCustomizationImage" src="@/assets/icons/customization.svg" alt="">
        </div>
        <div class="BaseBalloonBody" :class="{BaseBalloonBodyClose: balloon.closed}">
          {{balloon.body}}
        </div>
      </div>
<!--      <div class="BaseBalloonRight">-->
<!--      </div>-->
      <div class="BaseBalloonColumn">
        <img class="BaseBalloonCloseImage" @click="removeBalloon(balloon.id)" src="@/assets/icons/close.svg" alt="">
        <img v-if="balloon.isLongText" class="BaseBalloonArrowImage" :class="{BaseBalloonArrowReverseImage: !balloon.closed}" src="@/assets/icons/arrow.svg" v-on:click="toggle(balloon.id)" alt="">
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
    ...mapMutations('balloons', ['toggleClosedBalloon', 'removeBalloon']),
    toggle (id: number) {
      this.toggleClosedBalloon(id)
    }
  }
}


</script>

<style scoped lang="scss">
.balloonContainer {
  position: fixed;
  right: 30px;
  bottom: 20px;
}

.BaseBalloonLeftStr{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.BaseBalloonCustomizationImage {
  display: flex;
  align-items: flex-start;
}

.BaseBalloonBody {
  padding-top: 4px;
  width: 320px;
  max-width: 320px;
  font-family: SF Pro Text, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  padding-left: 6px;
  word-wrap: break-word;
  color: #BBBBBB
}

.BaseBalloonBodyClose {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.BaseBalloonHead {
  padding-left: 6px;
  font-family: SF Pro Text, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #BBBBBB;
}

.BaseBalloon {
  margin-top: 8px;
  padding: 7px 10px 8px 12px;
  display: flex;
  /*width: 373px;*/
  background: #3C3F41;
  border: 1px solid #323232;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.BaseBalloonColumn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 8px;
}

.BaseBalloonCustomizationImage,
.BaseBalloonInfoImage,
.BaseBalloonArrowImage {
  height: 16px;
}

.BaseBalloonArrowReverseImage {
  transform: rotateX(180deg);
}

</style>