<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainApp",
});
</script>

<style scoped>
.main {
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding-top: 60px;
}
</style>
