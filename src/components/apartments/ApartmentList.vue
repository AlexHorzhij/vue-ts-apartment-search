<template>
  <div class="cards">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.cards {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
</style>
