<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "container-block",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.container {
  width: 1110px;
  margin: 0 auto;
}
</style>
