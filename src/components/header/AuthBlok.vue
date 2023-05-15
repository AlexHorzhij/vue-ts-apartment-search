<template>
  <div class="authBlok">
    <router-link :to="{ name: 'login' }"> Вхід </router-link>
    <span class="divider"> / </span>
    <router-link :to="{ name: 'registration' }"> Реестрація </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "authBlok",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.authBlok {
  color: #ffffff;
  display: flex;
  align-items: center;
}

a {
  color: #ffffff;

  &:hover {
    color: $accent-color;
    /* text-decoration: underline; */
  }
}

.divider {
  padding: 0 4px;
}
</style>
