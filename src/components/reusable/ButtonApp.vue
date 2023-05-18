<template>
  <button :class="{ btn: true, outlined: outlined }">
    <CircleLoader v-if="isLoading" width="40" height="40" />
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CircleLoader from "@/components/reusable/loader/CircleLoader.vue";

export default defineComponent({
  name: "ButtonApp",
  components: { CircleLoader },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.btn {
  height: 44px;
  padding: 11px 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $accent-color;
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
.outlined {
  background-color: $main-background;
  border: 2px solid $accent-color;
  color: $main-text;
}
</style>
