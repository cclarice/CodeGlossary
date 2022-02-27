<template>
  <div class="Typography">
		<h1>{{ local.typography }} <br> CodeGlossary</h1>
		<h2>Header H0</h2>
    <code class="comment">25px</code>
		<h3>Header H1</h3>
    <code class="comment">22px</code>
		<h4>Header H2</h4>
    <code class="comment">18px</code>
		<h4 class="b">Header H2</h4>
		<h5>Header H3</h5>
    <code class="comment">16px</code>
		<h5 class="b">Header H3</h5>
		<span>Default</span>
    <code class="comment">13px, 16px</code>
		<span class="b">Default</span>
		<span class="u">Default</span>
		<p>Paragraph</p>
    <code class="comment">13px, line 19px</code>
		<span class="m"></span>
		<small>Small</small>
    <code class="comment">11px, line 14px</code>
		<small class="u">Small</small>
		<code>Default</code>
    <code class="comment">12px, line 20px</code>
		<code>Line number</code>
    <code class="comment">11px, line 20px</code>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({SYKA: 'ERRROR',
	name: 'TypographyUI',
  computed: {
    ...mapGetters('lang', { local: 'getLocal' })
  },
  methods: {
    ...mapMutations('lang', ['setLocals'])
  },
  created () {
    this.setLocals({
      en_us: () => import('@/lang/en_us/test/local_typography'),
      ru_ru: () => import('@/lang/ru_ru/test/local_typography')
    })
  }
})
</script>

<style lang="scss" scoped>
.Typography {
  display: flex;
  flex-flow: row wrap;
  width: 600px;
  min-width: 600px;
  padding: 60px;
  background-color: var(--panel-background);
  max-width: 100%;
  * {
    width: 51%;
    flex-grow: 1;
    align-self: end;
  }
  .comment {
    width: 40%;
    color: #999999;
    font-size: 11px;
    &:not(:last-child) {
      margin-top: 30px;
    }
  }
}
</style>
