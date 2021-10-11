<template>
  <div class="balloonContainer">
    <!-- todo: Balloon System -->
    <div class="BaseBalloon" v-for="balloon in getBalloons">
      <div class="BaseBalloonLeft">
        <img class="BaseBalloonIconImage" :src="'assets' + balloon.type" :alt="balloon.type">
      </div>
      <div class="BaseBalloonCenter">
        <div class="BaseBalloonHead">{{balloon.head}}<!-- todo: settings icon <div class="BaseBalloonSettings"></div>--></div>
        <div class="BaseBalloonBody">{{balloon.body}}</div>
      </div>
      <div class="BaseBalloonRight">z
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  name: "BaseNotification",
  computed: {
    ...mapGetters('balloons', ['getBalloons'])
  }
}
</script>

<style scoped>
.balloonContainer {
  position: fixed;
  right: 30px;
  bottom: 20px;
}

.BaseBalloon {
  display: flex;
  width: 373px;

}

</style>