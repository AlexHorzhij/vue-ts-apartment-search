<template>
  <div class="card">
    <img />
    <div class="card__content">
      <h2 class="card__title"></h2>
      <p class="card__location"></p>
      <p class="card__price"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyOrderCard",
});
</script>

<style scoped></style>
