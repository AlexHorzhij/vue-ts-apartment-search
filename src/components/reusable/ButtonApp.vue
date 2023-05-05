<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.btn {
  height: 44px;
  padding: 0 34px;
  background-color: $main-color;
  color: $main-background;
  border: 1px solid transparent;
  transition: scale 300ms linear;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }

  &:active {
    background-color: #a74725b3;
  }
}
</style>
