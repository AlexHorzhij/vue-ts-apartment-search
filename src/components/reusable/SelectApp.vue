<template>
  <select
    class="select"
    v-on:change="$emit('update:model-value', $event.target.value)"
  >
    <option value="select" selected disabled>Select city...</option>
    <option v-for="item of SelectorList" :value="item" :key="item">
      {{ item }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "select-app",
  props: {
    SelectorList: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.select {
  height: 44px;
  padding-left: 20px;
  background: $main-background;
  border: 2px solid $accent-color;
}
</style>
