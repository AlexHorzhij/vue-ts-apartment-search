<template>
  <main class="error">
    <h1 class="error__text">Sorry... Page not found :(</h1>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundPage",
});
</script>

<style scoped lang="scss">
.error {
  padding-top: 120px;
  flex-grow: 1;
  width: 100%;

  &__text {
    font-size: 60px;
    text-align: center;
  }
}
</style>
