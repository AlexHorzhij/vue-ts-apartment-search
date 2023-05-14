<template>
  <MainApp>
    <Container class="error">
      <h1 class="error__text">Sorry... Page not found :(</h1>
    </Container>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainApp from "@/components/reusable/MainApp.vue";
import Container from "@/components/reusable/Container.vue";

export default defineComponent({
  name: "NotFoundPage",
  components: { Container, MainApp },
});
</script>

<style scoped lang="scss">
.error {
  padding-top: 100px;
  &__text {
    font-size: 60px;
  }
}
</style>
