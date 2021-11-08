<template>
  <div class="typography flexCenter">
    <div class="container">
      <h1>Header H1</h1>
      <h2>Header H2</h2>
      <div>
        <h3><span>Header H3</span></h3>
        <h3 class="sb">Header H3</h3>
      </div>
      <div>
        <h4 class="sb">Header H4</h4>
        <h4>Header H4</h4>
      </div>
      <div>
        <div>Default</div>
        <div class="sb">Default</div>
        <div class="u">Default</div>
      </div>
      <div>
        <p>Paragraph</p>
      </div>
      <div>
        <p class="medium">Medium</p>
        <p class="medium sb">Medium</p>
      </div>
      <div>
        <p class="small">Small</p>
        <p class="small u">Small</p>
      </div>
      <div>
        <code>Default</code><br>
        <code class="lineNumber">Line number</code>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Typography'
}
</script>

<style lang="scss" scoped>
.typography {
  width: 100%;
  height: 100%;
  .container {
    background: #3C3F41;
    padding: 40px 60px;
    & > * {
      margin-bottom: 30px;
      & > * {
        margin-bottom: 10px;
      }
      & > *:last-child {
        display: flex;
        margin-bottom: 0;
      }
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>