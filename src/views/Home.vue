<template>
	<div class="Home">
    <main class="HomeMain">
      <h1 style="margin-top: 32px">CodeGlossary</h1>
      <h3>Welcome to Coding Glossary</h3>
      <div style="flex-grow: 1">
        <img class="MainLogo"
             src="@/assets/images/CodeGlossarySquareLogo.svg"
             width="256" height="256" alt="CodeGlossary Logo Square"
             @click="$router.push('/routes')">
      </div>
    </main>
    <aside class="HomeAside">
      <GitHubRepoPanel rep-link="/cclarice/CodeGlossary" :logo="require('@/assets/logos/gitCodeglossary.svg')"/>
    </aside>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GitHubRepoPanel from '@/components/other/GitHubRepoPanel.vue'

interface data {
  contributors: Array<contributor>
  commits: number,
  window: Window
  intervalId: number
}

interface contributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

export default defineComponent({
	name: 'Home',
  components: { GitHubRepoPanel },
  data (): data {
    return {
      contributors: [],
      commits: 0,
      window: window,
      intervalId: 0
    }
  }
})
</script>

<style lang="scss" scoped>
.Home {
  display: grid;
  width: 100%;
  min-height: 100%;
  grid-template-columns: 320px auto 320px;
  @media (max-width: 1024px) {
    grid-template-columns: auto 320px;
  }
  @media (max-width: 720px) {
    grid-template-columns: auto;
  }
	align-items: center;
	flex: 1 1 400px;
	gap: 8px;
	padding: 8px;
	height: 600px;
  &Main {
    grid-column-start: 2;
    @media (max-width: 1024px) {
      grid-column-start: 1;
    }
  }
  &Aside {
    grid-column-start: 3;
    @media (max-width: 1024px) {
      grid-column-start: 2;
    }
  }
  &Main,
  &Aside {
    display: flex;
    flex-flow: column;
    align-items: center;
    min-height: 100%;
    @media (max-width: 720px) {
      grid-column-start: 1;
    }
  }
}

.MainLogo {
  transition: 0.2s linear;
  animation: appear ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1)
  }
}

@keyframes appear {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
