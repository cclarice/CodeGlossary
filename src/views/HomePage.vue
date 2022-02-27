<template>
	<div class="Home">
    <main class="HomeMain">
      <h1 style="margin-top: 32px">CodeGlossary</h1>
      <h3>Welcome to Coding Glossary</h3>
      <div style="flex-grow: 1">
        <svg @click="$router.push('/routes')" class="MainLogo" width="256" height="256" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 10.5L6 16L7.5 14.5L13 13L14.5 8L13 3L6 1.5L1.5 3.75L0.5 10.5Z" fill="url(#paint0_linear_1140_19322)">
            <animate attributeName="d"
                     attributeType="XML"
                     from="M0.5 10.5L6 16L7.5 14.5L13 13L14.5 8L13 3L6 1.5L1.5 3.75L0.5 10.5Z"
                     to=  "M1 13L9 13L9 9L15 9L15 4L7 4L5 2L1 2L01 10Z"
                     restart="whenNotActive"
                     begin="1s"
                     dur="1s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </path>
          <path d="M0.5 10.5L10 12L15.5 7.5L13 3L6 1.5L0.5 10.5Z" fill="url(#paint1_linear_1140_19322)">
            <animate attributeName="d"
                     attributeType="XML"
                     from="M0.5 10.5L10 12L15.5 7.5L13 3L6 1.5L0.5 10.5Z"
                     to="M12 12L12 12L12 12L12 12L12 12L12 12Z"
                     dur=".75s"
                     begin="1s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </path>
          <path d="M7.5 14.5L13 13L10 12L7.5 14.5Z" fill="url(#paint2_linear_1140_19322)">
            <animate attributeName="d"
                     attributeType="XML"
                     from="M7.5 14.5L13 13L10 12L7.5 14.5Z"
                     to="M12 12L12 12L12 12L12 12Z"
                     begin="1s"
                     dur=".75s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </path>
          <path d="M3 3H13V13H3V3Z" fill="black">
            <animate attributeName="d"
                     attributeType="XML"
                     from="M3 3H13V13H3V3Z"
                     to="M10 10H16V16H10V10Z"
                     begin="1s"
                     dur="1s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </path>
          <path d="M8 6.64284C8 5.42856 8.92857 4.42856 10.2143 4.42856C11 4.42856 11.5 4.71427 11.9286 5.07142L11.3571 5.7857C11 5.49999 10.6429 5.2857 10.2143 5.2857C9.5 5.2857 9 5.85713 9 6.64284C9 7.35713 9.5 7.99999 10.2143 7.99999C10.7143 7.99999 11 7.7857 11.3571 7.49999L11.9286 8.07141C11.5 8.57141 11 8.85713 10.2143 8.85713C8.92857 8.85713 8 7.85713 8 6.64284Z" fill="white">
            <animate attributeName="fill"
                     attributeType="XML"
                     from="#FFFFFF"
                     to="#FFFFFF00"
                     begin="1s"
                     dur=".5s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </path>
          <path d="M4.42856 10.8571H8.71427V11.5714H4.42856V10.8571Z" fill="white">
            <animate attributeName="d"
                     attributeType="XML"
                     from="M4.42856 10.8571H8.71427V11.5714H4.42856V10.8571Z"
                     to="M11 14H14V15H11V15Z"
                     begin="1s"
                     dur="1s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </path>
          <rect x="10.2357" y="6.25714" width="1.69286" height="0.82857" fill="white">
            <animate attributeName="fill"
                     attributeType="XML"
                     from="#FFFFFF"
                     to="#FFFFFF00"
                     begin="1s"
                     dur=".5s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </rect>
          <rect x="11.0714" y="6.67148" width="0.857143" height="1.4" fill="white">
            <animate attributeName="fill"
                     attributeType="XML"
                     from="#FFFFFF"
                     to="#FFFFFF00"
                     begin="1s"
                     dur=".5s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </rect>
          <path d="M4.07144 6.64284C4.07144 5.42856 5.00001 4.42856 6.28573 4.42856C7.07144 4.42856 7.57144 4.71427 8.00001 5.07142L7.42859 5.7857C7.07144 5.49999 6.7143 5.2857 6.28573 5.2857C5.57144 5.2857 5.07144 5.85713 5.07144 6.64284C5.07144 7.35713 5.57144 7.99999 6.28573 7.99999C6.78573 7.99999 7.07144 7.7857 7.42859 7.49999L8.00001 8.07141C7.57144 8.57141 7.07144 8.85713 6.28573 8.85713C5.00001 8.85713 4.07144 7.85713 4.07144 6.64284Z" fill="white">
            <animate attributeName="d"
                     attributeType="XML"
                     from="M4.07144 6.64284C4.07144 5.42856 5.00001 4.42856 6.28573 4.42856C7.07144 4.42856 7.57144 4.71427 8.00001 5.07142L7.42859 5.7857C7.07144 5.49999 6.7143 5.2857 6.28573 5.2857C5.57144 5.2857 5.07144 5.85713 5.07144 6.64284C5.07144 7.35713 5.57144 7.99999 6.28573 7.99999C6.78573 7.99999 7.07144 7.7857 7.42859 7.49999L8.00001 8.07141C7.57144 8.57141 7.07144 8.85713 6.28573 8.85713C5.00001 8.85713 4.07144 7.85713 4.07144 6.64284Z"
                     to="M2.25 8.1C2.25 6.4 3.55 5 5.35 5C6.45 5 7.15 5.4 7.75 5.9L6.95 6.9C6.45 6.5 5.95 6.2 5.35 6.2C4.35 6.2 3.65 7 3.65 8.1C3.65 9.1 4.35 10 5.35 10C6.05 10 6.45 9.7 6.95 9.3L7.75 10.1C7.15 10.8 6.45 11.2 5.35 11.2C3.55 11.2 2.25 9.8 2.25 8.1Z"
                     begin="1s"
                     dur="1s"
                     fill="freeze"
                     calcMode="spline"
                     keyTimes="0; 1"
                     keySplines="0.5 0 0.5 1"/>
          </path>
          <defs>
            <linearGradient id="paint0_linear_1140_19322" x1="-0.0703251" y1="2.67302" x2="10.214" y2="15.7464" gradientUnits="userSpaceOnUse">
              <stop offset="0.0417113" stop-color="#C011EF"/>
              <stop offset="0.1162" stop-color="#A019CB"/>
              <stop offset="0.2019" stop-color="#C220A8"/>
              <stop offset="0.283" stop-color="#DA268F"/>
              <stop offset="0.3569" stop-color="#E92980"/>
              <stop offset="0.417" stop-color="#EE2A7B"/>
              <stop offset="1" stop-color="#F26522"/>
              <stop offset="1" stop-color="#F26522"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1140_19322" x1="6.93233" y1="9.5754" x2="6.82365" y2="3.53247" gradientUnits="userSpaceOnUse">
              <stop offset="0.3737" stop-color="#FEB51A"/>
              <stop offset="0.4306" stop-color="#FEAD1A"/>
              <stop offset="0.6448" stop-color="#FD941C"/>
              <stop offset="0.8406" stop-color="#FC851D"/>
              <stop offset="1" stop-color="#FC801D"/>
            </linearGradient>
            <linearGradient id="paint2_linear_1140_19322" x1="13.5667" y1="10.2589" x2="6.04535" y2="3.21965" gradientUnits="userSpaceOnUse">
              <stop offset="0.3737" stop-color="#FEB51A"/>
              <stop offset="0.417" stop-color="#FEAD1A"/>
              <stop offset="0.5802" stop-color="#FD941C"/>
              <stop offset="0.7294" stop-color="#FC851D"/>
              <stop offset="0.8508" stop-color="#FC801D"/>
              <stop offset="0.9836" stop-color="#F26522"/>
            </linearGradient>
            <linearGradient id="paint3_linear_1140_19322" x1="8.11545" y1="8.98728" x2="9.87613" y2="14.4161" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F7941D" stop-opacity="0"/>
              <stop offset="0.5473" stop-color="#FB851D" stop-opacity="0.5473"/>
              <stop offset="1" stop-color="#FC801D"/>
            </linearGradient>
            <linearGradient id="paint4_linear_1140_19322" x1="12.7094" y1="10.9374" x2="3.65802" y2="13.8516" gradientUnits="userSpaceOnUse">
              <stop offset="0.0794007" stop-color="#70193B"/>
              <stop offset="0.23" stop-color="#962D38"/>
              <stop offset="0.4689" stop-color="#CE4B33"/>
              <stop offset="0.6473" stop-color="#F05D30"/>
              <stop offset="0.7435" stop-color="#FD642F"/>
            </linearGradient>
          </defs>
        </svg>
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
	name: 'HomePage',
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
