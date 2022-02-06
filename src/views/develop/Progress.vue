<template>
  <div class="card">
    <div class="card__header">
      Header
    </div>
    <div class="card__main">
      <div class="card__info">
        Default
      </div>
      <div class="card__div">
				<!-- Default -->
        <base-progress @action="action" :label="label" :status="status"/>
      </div>
      <hr class="card__separator">
      <div class="card__info">
        With Button
      </div>
      <div class="card__div">
				<!-- With Button -->
        <base-progress @action="action" :label="label" :status="status" :action="button || 'Button'"/>
      </div>
      <hr class="card__separator">
      <div class="card__info">
        Without icon
      </div>
      <div class="card__div">
				<!-- Without icon -->
        <base-progress @action="action" :label="label" :status="status" action=""/>
      </div>
      <hr class="card__separator">
      <div class="card__info">
        Label Left
      </div>
      <div class="card__div">
				<!-- Label Left -->
        <base-progress @action="action" :label="label" :status="status" :label-left="true"/>
      </div>
      <hr class="card__separator">
      <div class="card__info">
        Label Left With Button
      </div>
      <div class="card__div">
				<!-- Label Left With Button -->
        <base-progress @action="action" :label="label" :status="status" :label-left="true" :action="button || 'Button'"/>
      </div>
      <hr class="card__separator">
      <div class="card__info">
        Label Left Without Icon
      </div>
      <div class="card__div">
				<!-- Label Left Without Icon -->
        <base-progress @action="action" :label="label" :status="status" :label-left="true" action=""/>
      </div>
			<hr class="card__separator">
      <div class="card__info">
        Settings
      </div>
      <div class="card__div">
				<base-input-text v-model="label" style="width: 100%"/>
				<base-input-text v-model="status" style="width: 100%"/>
				<base-input-text v-model="button" style="width: 100%"/>
      </div>
    </div>
    <div class="card__footer">
      &lt;!-- Develop --&gt;
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseProgress from '@/components/base/BaseProgress.vue'
import BaseInputText from '@/components/base/BaseInputText.vue'
import { mapMutations } from 'vuex'

export default defineComponent({
  name: 'Progress',
	data: () => ({
		label: BaseProgress.props.label.default,
		status: BaseProgress.props.status.default,
		button: 'Button'
	}),
  components: { BaseInputText, BaseProgress },
	methods: {
    ...mapMutations('balloon', ['addBalloons']),
    action (): void {
      this.addBalloons({ head: 'Progress', text: 'Action activated', duration: 2500 })
		}
	}
})
</script>

<style lang="scss" scoped>

</style>
