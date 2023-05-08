<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.btn {
  width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
  background-color: $secondary-background;
  border: 2px solid $secondary-background;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    color: $main-background;
  }
}
</style>
