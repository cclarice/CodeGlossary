<template>
	<div class="Home">
    <main class="HomeMain">
      <h1 style="margin-top: 32px">CodeGlossary</h1>
      <h3>Welcome to Coding Glossary</h3>
      <div style="flex-grow: 1">
        <img src="@/assets/images/CodeGlossarySquareLogo.svg" width="256" height="256" alt="CodeGlossary Logo Square">
      </div>
    </main>
    <aside class="HomeAside">
      <div class="Contributors">
        <div class="ContributorsHeader">
          <h4>Contributors:</h4><h4 class="ContributorsHeaderCounter"> {{ contributors.length }} </h4>
        </div>
        <div class="ContributorsContainer">
          <div class="Contributor" v-for="contributor of contributors" :key="contributor.id" @click="window.open(contributor.html_url)">
            <img :src="contributor.avatar_url" :alt="contributor.login" width="32">
            <div class="ContributorText">
            <span class="ContributorName">
              {{ contributor.login }}
            </span>
              <span><code class="Contributions">{{ (contributor.contributions / commits * 100).toFixed(2) }}% | {{ contributor.contributions }}</code> <span>contributions</span></span>
            </div>
          </div>
        </div>
      </div>
    </aside>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface data {
  contributors: Array<contributor>
  commits: number,
  window: Window
}

interface contributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

export default defineComponent({
	name: 'Home',
  data (): data {
    return {
      contributors: [],
      commits: 0,
      window: window
    }
  },
  async created () {
    const response = await fetch('https://api.github.com/repos/cclarice/codeglo/contributors')
    this.contributors = await response.json()
    this.contributors.forEach((contributor: { contributions: number }) => {
      this.commits += contributor.contributions
    })

    const response1 = await fetch('https://api.github.com/repos/cclarice/codeglo')
    console.log(await response1.json())
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

.Contributors {
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--panel-background);
  border: 1px solid var(--panel-border);
  width: 320px;
  &Header {
    display: flex;
    align-items: center;
    height: 33px;
    padding: 0 8px;
    background-color: #4A4E52;
    border-bottom: 1px solid var(--panel-border);
    gap: 0.5em;
    &Counter {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background-color: var(--panel-border);
      border-radius: 12px;
    }
  }
  &Container {
    display: flex;
    flex-flow: column;
    padding: 8px;
    gap: 8px;
  }
}

.Contributor {
  display: flex;
  background-color: #4A4E52;
  border: 1px solid var(--panel-border);
  border-radius: 3px;
  padding: 7px;
  gap: 8px;
  img {
    width: 48px;
    height: 48px;
    outline: 1px solid var(--panel-border);
    border-radius: 50%;
  }
  &Text {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
  }
  &Name {
    font-size: 16px;
  }
  .Contributions {
    font-family: 'JetBrains Mono Medium', 'Consolas', monospace;
    background-color: var(--panel-border);
    border-radius: 8px;
    height: 18px;
    padding: 0 8px;
  }
}

/*
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
*/
</style>