<template>
	<div class="Home">
		<h1>CodeGlossary</h1>
		<h3>Welcome to Coding Glossary</h3>
		<div style="flex-grow: 1">
			<img src="@/assets/images/CodeGlossarySquareLogo.svg" width="256" height="256" alt="CodeGlossary Logo Square">
		</div>
    <div class="Contributors">
      <h2>Contributors: {{ contributors.length }}</h2>
      <div class="Contributor" v-for="contributor of contributors" :key="contributor.id" @click="window.open(contributor.html_url)">
        <img :src="contributor.avatar_url" alt="contributor.login" width="48">
        <div>
          <h3>{{ contributor.login }}</h3>
          <span> Commits: ( {{ contributor.contributions }} / {{ (contributor.contributions / commits * 100).toString().slice(0, 5) }}% )</span>
        </div>
      </div>
      <h4>Commits: {{ commits }}</h4>
    </div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Home',
  data () {
    return ({
      contributors: [],
      commits: 0,
      window: window
    })
  },
  async created () {
    const response = await fetch('https://api.github.com/repos/cclarice/codeglo/contributors')
    const myJson = await response.json()
    console.log(myJson)
    myJson.forEach((contributor: { contributions: number }) => {
      this.commits += contributor.contributions
    })
    this.contributors = myJson

    // const temp = await fetch('https://api.github.com/repos/cclarice/codeglo/commits')
    // const tempJSON = await temp.json()
    // const nonEmptyCommits = tempJSON.filter((commit: { author: { login: string } }) => commit.author)
    // console.log(nonEmptyCommits)
    // this.commits = nonEmptyCommits
  }
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

.Contributors {
  border: 1px solid var(--panel-border);
  border-radius: 3px;
  background-color: var(--panel-background);
  display: flex;
  flex-flow: column;
  padding: 8px;
  gap: 8px;
  min-width: 320px;
}
.Contributor {
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
  border: 1px solid var(--main-border);
  border-radius: 3px;
  background-color: var(--main-background);
  img {
    border-radius: 50%;
  }
}
</style>