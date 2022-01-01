<template>
	<div class="Home">
		<h1>CodeGlossary</h1>
		<h3>Welcome to Coding Glossary</h3>
		<div style="flex-grow: 1">
			<img src="@/assets/images/CodeGlossarySquareLogo.svg" width="256" height="256" alt="CodeGlossary Logo Square">
		</div>
		<small>Created by Danil Petrov and Alina Yagubova</small>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Home'
})
</script>

<style lang="scss" scoped>
	.Home {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0 1 400px;
		gap: 8px;
		padding: 8px;
		height: 600px;
	}
</style>