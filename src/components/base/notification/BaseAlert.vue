<template>
  <div>
    <div v-for="alert in alerts" class="baseAlert">
      <div class="alert">
        {{ alert.head }}
        {{ alert.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseAlert",
  data() {
    return {
      alerts: [
        {
          head: '',
          body: ''
        },
        {
          head: '',
          body: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.baseAlert {
  display: flex;
  flex-direction: row-reverse;
}
.alert {
  display: flex;
  flex-direction: row-reverse;
}
</style>