<template>
  <MainApp>
    <Container>
      <myOrders />
    </Container>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainApp from "@/components/reusable/MainApp.vue";
import Container from "@/components/reusable/Container.vue";
import myOrders from "@/components/myOrder/index.vue";

export default defineComponent({
  name: "OrdersPage",
  components: { MainApp, Container, myOrders },
});
</script>

<style scoped></style>
