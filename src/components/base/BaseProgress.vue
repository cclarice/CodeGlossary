<template>
  <label class="progress"
         :class="{ progress_left: labelLeft,
                   progress_button: action && action !== 'icon',
                   progress_icon: action === 'icon' }">
    <span class="progress__label" v-if="label">
      {{ label }}
    </span>
    <progress class="progress__bar" :value="value < 0 || value === NaN ? '' : value" :max="max"/>
    <span class="progress__status" v-if="!labelLeft && status">
      {{ status }}
    </span>
    <img v-if="action === 'icon'"
         src="@/assets/elements/progress.svg"
         class="progress__icon" alt="progress action" @click="click">
    <button v-else-if="action" class="progress__button" @click="click">
      {{ action }}
    </button>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseProgress',
  props: {
    labelLeft: {
      type: Boolean,
      default: false,
    },
    action: {
      type: String,
      default: 'icon'  // '' | 'icon' | 'button text'
    },
    label: {
      type: String,
      default: 'Label:'
    },
    status: {
      type: String,
      default: 'Status...'
    },
    value: {
      type: Number,
      default: -1
    },
    max: {
      type: Number,
      default: 1
    }
  },
  methods: {
    click (event: MouseEvent): void {
      this.$emit('action', event)
    }
  }
})
</script>

<style lang="scss" scoped>

.progress {
  display: grid;
  grid-template-rows: min-content 4px min-content;
	min-height: 4px;
  grid-template-columns: auto;
  max-width: 200px;

  &_icon {
    grid-template-columns: auto 24px;
    max-width: 224px;
    min-height: 14px;
  }
  &_button {
    grid-template-columns: auto 82px;
    max-width: 282px;
    min-height: 24px;
  }

  &__label {
    font-weight: 500;
    font-size:   13px;
    line-height: 16px;
    grid-row:    1;
    grid-column: 1;
		margin-bottom:  4px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: min(240px, calc(80vw - 232px));
  }

  &__bar {
    width:     200px;
    min-width: 150px;
    max-width: 200px;
    height:    4px;

    grid-row:    2;
    grid-column: 1;
    align-self:  center;
    &::-webkit-progress-inner-element,
    &::-webkit-progress-bar,
    &::-webkit-progress-value {
      border-radius: 3px;
    }
    &[value]::-webkit-progress-bar {
      background-color: var(--progress-background);
    }
    &::-webkit-progress-value {
      background-color: var(--progress-fill-background);
    }
  }

  &__status {
    color: var(--info-panel);
    font-size: 11px;
    font-weight: 500;
    line-height: 14px;
    grid-row:    3;
    grid-column: 1;
		margin-top:  6px;
  }

  &__button,
  &__icon {
    cursor: pointer;

    grid-row:    2;
    grid-column: 2;
    align-self: center;
    filter: var(--icon-filter);
		justify-self: end;
  }

	&__button {
		width: 72px;
		height: 24px;
		background-color: var(--button-background);
		border: 1px solid var(--button-border);
    border-radius: 3px;
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 1px 4px 0 4px;

		&:focus {
      border:  1px solid var(--button-focus-border);
      outline: 2px solid var(--button-focus-outline);
		}
	}

  &__icon {
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }

  &_left {
    max-width: unset;
    grid-template-columns: min-content 150px;
		grid-template-rows: min-content;
		align-items: center;
		justify-content: flex-end;

    &.progress_button {
      grid-template-columns: min-content 150px 84px;
    }
    &.progress_icon {
      grid-template-columns: min-content 150px 26px;
    }

		& .progress__label {
			grid-row:    1;
			grid-column: 1;

			width: fit-content;
			justify-self: flex-end;
			margin-right: 12px;
      margin-bottom: 0;
		}

		& .progress__bar {
      grid-row:    1;
      grid-column: 2;
			max-width: 100%;
		}

		& .progress__button,
		& .progress__icon {
			grid-row:    1;
			grid-column: 3;
			margin-left: 12px;
			justify-self: end;
		}
  }
}

</style>
