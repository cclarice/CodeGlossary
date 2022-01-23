<template>
  <div class="stage" style="align-self: start">
    <div class="sun"></div>
    <div class="grass" style="transform: translateX(-300px)"></div>
    <div class="grass" style="transform: translateX(300px)"></div>
    <div class="square"></div>
    <div class="round"></div>
  </div>
  <img src="@/assets/XOsX.gif" alt="" id="duck3" width="40px" style="z-index: 13">
  <img src="@/assets/XOsX.gif" alt="" id="duck2" width="80px" style="z-index: 12">
  <img src="@/assets/XOsX.gif" alt="" id="duck1" width="160px" style="z-index: 11">
  <img src="@/assets/XOsX.gif" alt="" id="duck" width="240px" style="z-index: 10">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Ducks',
  mounted () {
    const ducks = [ document.getElementById('duck'),
                    document.getElementById('duck1'),
                    document.getElementById('duck2'),
                    document.getElementById('duck3')]
    document.body.addEventListener("mousemove", (event) => {
      for (const duck of ducks) {
        const time = 400 + ducks.indexOf(duck) * 100
      setTimeout(()  => {
        if (duck) {
          duck.style.left = event.pageX - duck.clientWidth / 2 + 'px'
          if (event.pageY > 333) {
            duck.style.top = event.pageY - duck.clientHeight / 2 + 'px'
            duck.style.zIndex = String(event.pageY)
          }
          const height = document.body.clientHeight
          const scale = Math.pow(parseInt(duck.style.top) / height * 2, 2)
          duck.style.transform = `scale(${scale})`
        }
      }, time)}
    })
  }
})
</script>
<style lang="scss" scoped>
#duck, #duck1, #duck2, #duck3 {
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
}
BODY {
  margin: 0;
  overflow: hidden;
  background: black;
}

.stage {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  background: steelblue;
  box-shadow: 0 -400px 300px -300px orangered inset;
  animation: sky-change 15s infinite linear;
}

.sun {
  position: absolute;
  left: 0;
  bottom: -30%;
  width: 10em;
  height: 10em;
  margin-left: -2.5em;
  margin-top: 0;
  background: orangered;
  border-radius: 50%;
  box-shadow: 0 0 20px orange;
  animation: 15s infinite linear;
  animation-name: sun-move, sun-color;
}

.grass {
  position: absolute;
  top: 0;
  right: 0;
  bottom: -5px;
  left: 0;
  background: url(//img-fotki.yandex.ru/get/5000/5091629.98/0_7a92d_7ece70d7_XL.png) no-repeat center bottom;
}

@keyframes sky-change {
  0% {
    background: darkslateblue;
  }
  50% {
    background: skyblue;
    box-shadow: 0 -400px 300px -300px steelblue inset;
  }
  85% {
    background: darkslateblue;
    box-shadow: 0 -400px 300px -300px orangered inset;
  }
  100% {
    background: darkslateblue;
  }
}

@keyframes sun-move {
  0% {
  }
  10% {
    margin-left: -4.5em;
  }
  20% {
    margin-left: -5.5em;
  }
  30% {
    margin-left: -6em;
  }
  40% {
    margin-left: -4.5em;
  }
  50% {
    left: 50%;
    bottom: 75%;
    width: 5em;
    height: 5em;
    margin-left: -2.5em;
  }
  60% {
    margin-left: 1.5em;
  }
  70% {
    margin-left: 3.5em;
  }
  80% {
    margin-left: 2.5em;
  }
  90% {
    margin-left: 1em;
  }
  100% {
    left: 98%;
    margin-left: -2.5em;
  }
}

@keyframes sun-color {
  20% {
    background: orange;
  }
  40% {
    background: gold;
    box-shadow: 0 0 35px gold;
  }
  60% {
    background: yellow;
    box-shadow: 0 0 35px yellow;
  }
  80% {
    background: orange;
  }
}
</style>
