<template>
  <nav class="Balloons">
    <div v-for="balloon of getBalloons" :key="balloon.id"
         class="Balloon">
      <div class="BalloonColumn BalloonLeft">
        <img class="BalloonType" :src="getBalloonsIcons[balloon.type]" :alt="balloon.type">
      </div>
      <div class="BalloonColumn BalloonMain">
        <div class="BalloonMainHeader">
          <b> {{ balloon.head }} </b>
          <img class="BalloonSetting HoverableIcon"
               src="@/assets/icons/interface/gear.svg"
               alt="Settings">
          <!-- todo add setting action to the balloons -->
        </div>
        <p class="BalloonText">
            {{ balloon.text }}
        </p>
        <div class="BalloonMainActions">
          <a class="BalloonMainAction" v-for="action of balloon.actions" :key="action.text" @click="action.action">
            {{ action.text }}
          </a>
        </div>
      </div>
      <div class="BalloonColumn BalloonRight">
        <img class="HoverableIcon" src="@/assets/icons/interface/close.svg" alt="Close">
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  name: 'BaseBalloons',
  computed: {
    ...mapGetters('balloon', ['getBalloons', 'getBalloonsIcons'])
  },
  methods: {
    ...mapMutations('balloon', ['removeBalloonById'])
  }
})
</script>

<style lang="scss" scoped>
.Balloons {
  position: absolute;
  right: 31px;
  bottom: 52px;
  display: flex;
  flex-flow: column-reverse;
  gap: 30px;
}

.Balloon {
  display: flex;
  flex-flow: row;
  max-width: 380px;
  min-width: 240px;
  padding: 7px 11px;
  gap: 6px;

  background-color: var(--panel-background);
  border: 1px solid var(--panel-border);
  box-shadow: 0 2px 8px #00000019;
  border-radius: 2px;
  &Main {
    display: flex;
    flex-flow: column;
    gap: 4px;
    &Header {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      b {
        font-weight: 600;
        margin-top: 1px;
        line-height: 15px;
      }
    }
    &Actions {
      margin-top: 2px;
      display: flex;
      gap: 16px;
    }
    &Action {
      color: #589DF6;
      cursor: pointer;
    }
  }
  &Setting {
    padding: 0 6px;
  }
}
</style>