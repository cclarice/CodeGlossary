<template>
<div class="NotificationsTest flexCenter">
  <div class="container">
    <h2>Create Notification</h2>
    <BaseInputText :placeholder="'Head'"
                   :value="head"
                   @changeValue="(data) => {this.head = data.value}"
                   :autofocus="true"/>
    <BaseInputText :placeholder="'Body'"
                   :value="body"
                   @changeValue="(data) => {this.body = data.value}"/>
    <BaseInputRadio :label="'Type'"
                    :name="'typeOfNotification'"
                    :value="0"
                    :radios="[
                        { text: 'Info',    value: 'info'    },
                        { text: 'Success', value: 'success' },
                        { text: 'Warning', value: 'warning' },
                        { text: 'Error',   value: 'error'   }
                    ]"
                    @changeValue="type = $event"
    />
    <BaseInputText :placeholder="'Timeout'"
                   :value="autoRemoveTimeout"
                   @changeValue="(data) => {this.autoRemoveTimeout = data.value}"/>
    <div class="flexEnd">
      <BaseButton text="Send"
                  :isDefault="true"
                  fixedWidth="72px"
                  @clickButton="addBalloon({
                    id: Date.now(),
                    head: head,
                    body: body,
                    type: type,
                    autoRemoveTimeout:autoRemoveTimeout
                  })"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import BaseInputText from "@/components/base/input/BaseInputText.vue"
import BaseInputRadio from "@/components/base/input/BaseInputRadio.vue"
import BaseButton from "@/components/base/button/BaseButton.vue"
import { mapMutations } from 'vuex'

export default {
  name: 'NotificationsTest',
  data () {
    return {
      head: '',
      body: '',
      type: '',
      autoRemoveTimeout: 5000
    }
  },
  components: { BaseInputRadio, BaseButton, BaseInputText },
  methods: {
    ...mapMutations('balloons', ['addBalloon'])
  }
}
</script>

<style lang="scss" scoped>
.NotificationsTest {
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    flex-direction: column;
    padding: 40px 60px;
    background: #3C3F41;

    & > *:not(:last-child) {
      margin-bottom: 22px;
    }
  }
}
</style>