<template>
  <component class="title" :is="setTeg">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainTitle",
  props: {
    level: { type: Number, default: 1 },
  },
  computed: {
    setTeg() {
      return `h${this.level}`;
    },
  },
});
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 20px;
}
</style>
