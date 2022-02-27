<template>
  <div class="Navigator">
    <h4>Navigator</h4>
    <!-- Share -->
    <GroupHeader text="Share" :collapsable="true" :expanded="true">
      <div class="NavigatorGroup" v-if="navigator.share">
        <label><BaseInputText v-model="share.url" :placeholder="'URL'" width="20em"/> to be shared.</label>
        <label><BaseInputText v-model="share.text" :placeholder="'Text'" width="20em"/> to be shared.</label>
        <label><BaseInputText v-model="share.title" :placeholder="'Title'" width="20em"/> to be shared.</label>
        <BaseInputFile v-model="share.files"/>
        <BaseButton :type="'Default'" text="Share" @onClick="shareFunction()" :disabled="sharingStatus !== 'READY'"/>
      </div>
      <div class="NavigatorGroup" v-else>
        Share is not available on this device 😢
      </div>
    </GroupHeader>

    <!-- Other -->
    <GroupHeader text="Other" :collapsable="true" :expanded="true">
      <GroupHeader text="Vibrate">
        <div style="gap: 8px; display: flex; justify-content: space-between">
          <BaseButton text="Tap" @click="navigator.vibrate(30)"/>
          <BaseButton text="Medium" @click="navigator.vibrate(60)"/>
          <BaseButton text="Hard" @click="navigator.vibrate(100)"/>
          <BaseButton text="SoS" @click="navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])"/>
        </div>
      </GroupHeader>
    </GroupHeader>

    <!-- Code -->
    <GroupHeader text="Code" :collapsable="true" :collapsed="false">
      <div class="Code">
        <pre v-for="(field, index) of Object.keys(Navigator.prototype)" :key="field"><span style="color: #888888">{{ index }}:</span> <span style="color: #fdc46c">{{ field }}</span> <span style="color: #c37030">{{ typeof navigator[field] }} </span><span v-if="typeof navigator[field] !== 'function'">{{ JSON.stringify(navigator[field], null, 2) }}</span><span v-else @click="console.log(navigator[field]())">function.call()</span></pre>
      </div>
    </GroupHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInputText from '@/components/base/BaseInputText.vue'
import BaseInputFile from '@/components/base/BaseInputFile.vue'
import GroupHeader from '@/components/text/GroupHeader.vue'

export default defineComponent({
  name: 'NavigatorDebug',
  components: {
    GroupHeader,
    BaseInputFile,
    BaseInputText,
    BaseButton
  },
  data () {
    return {
      navigator,
      Navigator,
      console,
      show: false,
      share: {
        url:   '',
        text:  '',
        title: '',
        files: []
      },
      sharingStatus: 'READY'
    }
  },
  methods: {
    shareFunction() {
      this.sharingStatus = 'WAITING'
      console.log(navigator.share(this.share)
        .then(() => {this.sharingStatus = 'READY'})
        .catch(() => {this.sharingStatus = 'READY'}))
    }
  }
})
</script>

<style lang="scss" scoped>
.Navigator {
  display: flex;
  flex-flow: column;
  background-color: var(--panel-background);
  padding: 20px;
  gap: 8px;
  max-width: calc(100% - 20px);
  min-width: calc(min(360px, 100% - 20px));
  .NavigatorGroup {
    display: flex;
    flex-flow: column;
  }
}

.Code {
  font-family: 'JetBrains Mono Medium', 'Consolas', monospace;
  background-color: var(--main-background);
  padding: 0.5em;
  & > pre {
    font-family: inherit;
    width: 100%;
    overflow: auto;
    max-width: calc(100% - 4em);
    padding: 0.25em;
    & > span {
      font-family: inherit;
    }
    &::-webkit-scrollbar{ display: none }
  }

  & > pre:nth-child(2n) {
    background-color: var(--panel-border);
  }
}
hr {
  border-color: var(--default);
}
</style>
