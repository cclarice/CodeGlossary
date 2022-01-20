<template>
  <nav class="Balloons">
    <div v-for="balloon of getBalloons" class="Balloon">
      <div class="BalloonColumn BalloonLeft">
        <img class="BalloonType" :src="getBalloonStatusIcon(balloon.type)">
      </div>
      <div class="BalloonColumn BalloonMain">
        <div class="BalloonMainHeader">
          <b></b>
          <img class="BalloonSetting" alt="Settings"> <!-- todo add setting to the balloons -->
        </div>
        <p class="BalloonText">

        </p>
        <div class="BalloonActions">
          
        </div>
      </div>
      <div class="BalloonColumn BalloonRight">

      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseBalloons'
})
</script>

<style lang="scss" scoped>
.Balloons {
  display: flex;
  flex-flow: column-reverse;
  gap: 30px;
}

.Balloon {
  display: flex;
  flex-flow: row;
  max-width: 380px;
  min-width: 240px;
}
</style>