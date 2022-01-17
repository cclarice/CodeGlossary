<template>
  <label>
    <input type="file" @change="changeModelValue($event)" ref="input">
    <a class="input" href="" @click="(e) => { e.preventDefault(); $refs.input.click() }">{{ modelValue && modelValue.length ? (multiply ? 'Edit files' : 'Edit file') : (multiply ? 'Add files' : 'Add file') }}</a>
    <div class="Files">
      <div v-for="index of Object.keys(modelValue)" :key="index" class="File" @click="toggleFile($event, Number(index))">
        <div class="FileModal" v-show="Number(index) === opened">
          <img :src="images[index] || require('@/assets/icons/stub.svg')" :alt="modelValue[index].name">
          <span>Name: {{ modelValue[index].name }}</span>
          <span>Last Modified: {{ modelValue[index].lastModifiedDate.toDateString() }}</span>
          <span>Type: {{ modelValue[index].type }}</span>
          <span>Size: {{ (modelValue[index].size / 1024).toPrecision(3) }} KB ({{ modelValue[index].size }} bytes)</span>
        </div>
        <div class="FileImage">
          <img :src="images[index] || require('@/assets/icons/stub.svg')" :alt="modelValue[index].name">
        </div>
        <div class="Divider"></div>
        <span class="FullName">
          <span class="Name">{{ modelValue[index].name.split('.')[0].slice(0, 7) }}</span><span class="Format">.{{ modelValue[index].name.split('.')[1] }}</span>
        </span>
      </div>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInputFile',
  data () {
    return {
      focus: false,
      images: [],
      opened: -1
    }
  },
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    multiply: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  methods: {
    async changeModelValue (event: InputEvent) {
      const files: FileList = (event.target as HTMLInputElement).files as FileList
      const images: Array<string> = this.images

      this.$emit('update:modelValue', files) // Emit

      for (const index in Object.keys(files)) {
        const file = files[Number(index)]
        const reader = new FileReader()
        console.log(file)

        reader.onload = (event: ProgressEvent<FileReader>) => {
          const target = event.target

          if (target) {
            if (typeof target.result === 'string') {
              images[0] = target.result
            }
          }
        }

        reader.readAsDataURL(file)
      }
    },
    toggleFile (event: MouseEvent, index: number) {
      event.preventDefault()
      this.opened = index;
      window.addEventListener('mousedown', () => this.opened = -1, { once: true })
    }
  }
})
</script>

<style lang="scss" scoped>
label {
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
}
a.input {
  min-width: 72px;
  text-wrap: none;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  height: 24px;
  padding: 4px 12px;
  margin: 6px 0;
  border: 1px solid;
  background-color: var(--field-background);
  border-color: var(--field-border);
  border-radius: 3px;
  user-select: none;
  &:focus,
  &:active {
    outline: 2px solid var(--button-focus-outline);
    border-color: var(--focus-border);
  }
  &[disabled] {
    background-color: var(--button-background-disabled);
    color: var(--disabled);
    user-focus: none;
    user-input: none;
    outline: none;
  }
}
input {
  display: none;
  position: relative;
  visibility: hidden;
  max-width: 72px;
  overflow: visible;
  &::file-selector-button {
    color: red;
    visibility: visible;
    content: 'text';
  }
}
.Files {
  display: flex;
  .File {
    display: flex;
    height: 24px;
    padding: 0 12px 0 4px;
    align-items: center;
    gap: 4px;

    margin: 6px 0;
    border: 1px solid;
    background-color: var(--field-background);
    border-color: var(--field-border);
    border-radius: 3px;

    .FileImage {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      img {
        max-width: 16px;
        max-height: 16px;
      }
    }
    .Divider {
      height: 100%;
      width: 1px;
      background-color: var(--field-border);
    }
  }
}
.FileModal {
  position: absolute;
  align-self: flex-start;
  transform: translateY(22px);
  display: flex;
  flex-flow: column;

  background-color: var(--field-background);
  border: 1px solid;
  border-color: var(--field-border);
  border-radius: 3px;
  padding: 4px;
  img {
    max-width: 64px;
    max-height: 64px;
    transition: 0.25s;
    background-color: var(--field-background);
    border-radius: 3px;
    transform-origin: left top;
    outline: 1px solid var(--field-border);
    padding: 2px;
  }
  img:hover {
    transform: scale(4);
  }
}
</style>