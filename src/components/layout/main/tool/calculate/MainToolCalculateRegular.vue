<template>
  <div class="CalculatorRegular">
    <div class="CalculatorRegularResult">

    </div>
    <div class="CalculatorRegularInputs">
      <div v-for="buttons of buttonsMap" class="CalculatorRegularInput">
        <BaseIcon v-for="button of buttons"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseIcon from "@/components/base/icon/BaseIcon.vue";

export default Vue.extend({
  name: "MainToolCalculateRegular",
  components: {
    BaseIcon
  },
  data () {
    return {
      buttonsMap: []
    }
  },
  created() {
    this.buttonsMap = [
      [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        }
      ],
      [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        }
      ],
      [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        }
      ],
      [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        }
      ]
    ]
  }
})
</script>

<style lang="scss" scoped>
.CalculatorRegular {
  display: flex;
  flex-direction: column;

  padding: 1px;
  row-gap: 1px;
  .CalculatorRegularResult {

  }
  .CalculatorRegularInputs {
    display: flex;
    flex-direction: column;

    .CalculatorRegularInput{
      display: flex;
    }
  }
}
</style>