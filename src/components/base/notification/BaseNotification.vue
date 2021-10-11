<template>
  <div class="notificationContainer">
    <!-- todo: Notification System -->
    <BaseAlert/>
    <BaseAction/>
  </div>
</template>

<script lang="ts">
import BaseAlert from "@/components/base/notification/BaseAlert.vue";
import BaseAction from "@/components/base/notification/BaseAction.vue";

export default {
  name: "BaseNotification",
  components: { BaseAlert, BaseAction }
}
</script>

<style scoped>
.notificationContainer {
  right: 30px;
  bottom: 20px;
  position: fixed;
}
</style>