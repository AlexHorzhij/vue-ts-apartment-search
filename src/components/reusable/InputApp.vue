<template>
  <input
    v-bind="$attrs"
    class="input"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "input-app",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.input {
  height: 44px;
  padding-left: 20px;
  background: $main-background;
  border: 2px solid $main-color;
}
</style>
