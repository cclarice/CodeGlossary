<template>
	<div class="Typography">
		<h1>Typography <br> CodeGlossary</h1>
		<h2>Header H0</h2><comment>25px</comment>
		<h3>Header H1</h3><comment>22px</comment>
		<h4>Header H2</h4><comment>18px</comment>
		<h4 class="b">Header H2</h4>
		<h5>Header H3</h5><comment>16px</comment>
		<h5 class="b">Header H3</h5>
		<span>Default</span><comment>13px, 16px</comment>
		<span class="b">Default</span>
		<span class="u">Default</span>
		<p>Paragraph</p><comment>13px, line 19px</comment>
		<span class="m"></span>
		<small>Small</small><comment>11px, line 14px</comment>
		<small class="u">Small</small>
		<code>Default</code><comment>12px, line 20px</comment>
		<code>Line number</code><comment>11px, line 20px</comment>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Typography'
})
</script>

<style lang="scss" scoped>
	.Typography {
		display: flex;
		flex-flow: row wrap;
		width: 600px;
		max-width: 80vw;
		padding: 60px;
		background-color: var(--panel-background);
		* {
			width: 51%;
			flex-grow: 1;
			align-self: end;
		}
		comment {
			width: 40%;
			color: #999999;
			font-size: 11px;
			&:not(:last-child) {
				margin-top: 30px;
			}
		}
	}
</style>