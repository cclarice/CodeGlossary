<template>
  <div class="Gamepads">
    <h4>Gamepad</h4>
    <div class="GamepadsContainer">
      <div class="GamepadContainer" v-for="(gamepad, index) of gamepads" :key="index" v-show="gamepad || index === 0">
        <h3>
          {{ gamepad ? gamepad.id : `Gamepad ${index} is not connected`}}
        </h3>
        <div class="Gamepad">
          <img src="@/assets/tools/gamepads/ds/ds.svg" :class="{ Disconnected: !gamepad }" alt="">
          <img src="@/assets/tools/gamepads/ds/ds_axis_right.svg" v-if="gamepad" class="GamepadDetail" alt=""
               :style="{ top: `${gamepad.axes[3] * 16}px`, left: `${gamepad.axes[2] * 16}px`, filter: `brightness(${gamepad.buttons[111] ? gamepad.buttons[11].value + 1 : 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_axis_left.svg" v-if="gamepad" class="GamepadDetail" alt=""
               :style="{ top: `${gamepad.axes[1] * 16}px`, left: `${gamepad.axes[0] * 16}px`, filter: `brightness(${gamepad.buttons[10] ? gamepad.buttons[10].value + 1 : 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b0.svg" v-if="gamepad && gamepad.buttons[0]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[0].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b1.svg" v-if="gamepad && gamepad.buttons[1]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[1].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b2.svg" v-if="gamepad && gamepad.buttons[2]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[2].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b3.svg" v-if="gamepad && gamepad.buttons[3]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[3].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b4.svg" v-if="gamepad && gamepad.buttons[4]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${-gamepad.buttons[4].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b5.svg" v-if="gamepad && gamepad.buttons[5]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${-gamepad.buttons[5].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b6.svg" v-if="gamepad && gamepad.buttons[6]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${-gamepad.buttons[6].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b7.svg" v-if="gamepad && gamepad.buttons[7]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${-gamepad.buttons[7].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b8.svg" v-if="gamepad && gamepad.buttons[8]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[8].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b9.svg" v-if="gamepad && gamepad.buttons[9]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[9].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b12.svg" v-if="gamepad && gamepad.buttons[12]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[12].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b13.svg" v-if="gamepad && gamepad.buttons[13]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[13].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b14.svg" v-if="gamepad && gamepad.buttons[14]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[14].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b15.svg" v-if="gamepad && gamepad.buttons[15]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[15].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b16.svg" v-if="gamepad && gamepad.buttons[16]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[16].value + 1})`}">
          <img src="@/assets/tools/gamepads/ds/ds_b17.svg" v-if="gamepad && gamepad.buttons[17]" class="GamepadDetail" alt=""
               :style="{ filter: `brightness(${gamepad.buttons[17].value + 1})`}">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamepadsTester',
  data (): { gamepads: Array<Gamepad | null> } {
    return {
      gamepads: [null, null, null, null]
    }
  },
  mounted () {
    window.addEventListener('gamepadconnected', this.gamepadConnected)
    window.addEventListener('gamepaddisconnected', this.gamepadDisconnected)
    window.requestAnimationFrame(this.gamepadCycle);
  },
  methods: {
    gamepadConnected (event: Event) {
      const gamepad = (event as GamepadEvent).gamepad
      this.gamepads[gamepad.index] = gamepad
      console.log(`Gamepad ${gamepad.index} was connected`)
      console.log(gamepad)
    },
    gamepadDisconnected (event: Event) {
      const gamepad = (event as GamepadEvent).gamepad
      this.gamepads[gamepad.index] = null
      console.log(`Gamepad ${gamepad.index} was disconnected`)
      console.log(gamepad)
    },
    gamepadCycle () {
      for (const gamepad of navigator.getGamepads()) {
        if (gamepad) {
          this.gamepads[gamepad.index] = gamepad
        }
      }
      window.requestAnimationFrame(this.gamepadCycle);
    }
  },
  'unmounted' () {
    window.removeEventListener('gamepadconnected', this.gamepadConnected)
    window.removeEventListener('gamepadconnected', this.gamepadDisconnected)
  }
})
</script>

<style lang="scss" scoped>
.Gamepads {
  display: flex;
  flex-flow: column;
  background-color: var(--panel-background);
  padding: 20px;
  gap: 8px;
  max-width: calc(100% - 20px);
  min-width: calc(min(360px, 100% - 20px));
}

.GamepadsContainer {
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  gap: 32px;
}

img {
  max-width: 600px;
}

.GamepadContainer {
  display: flex;
  flex-flow: column;
  max-width: 632px;
  h3 {
    max-width: 600px;
    text-wrap: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  background-color: var(--main-background);
  padding: 16px;
}

.Disconnected {
  filter: contrast(0);
}
.Gamepad {
  display: flex;
  flex-flow: column;
  position: relative;
}
.GamepadDetail {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
</style>
