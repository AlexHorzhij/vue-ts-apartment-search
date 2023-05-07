<template>
  <footer class="footer"></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterSection",
});
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.footer {
  width: 100%;
  height: 30px;
  background-color: $accent-background;
}
</style>
