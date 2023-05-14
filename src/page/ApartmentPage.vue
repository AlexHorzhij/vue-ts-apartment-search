<template>
  <MainApp class="main">
    <Container class="apartment-page__container">
      <ApartmentDescription
        :description="apartment.descr"
        :price="apartment.price"
        :rating="apartment.rating"
        :imgUrl="apartment.imgUrl"
        :title="apartment.title"
      />
      <ApartmentInfo />
    </Container>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApartmentDescription from "@/components/ApartmentPage/ApartmentDescription.vue";
import Container from "@/components/reusable/Container.vue";
import MainApp from "@/components/reusable/MainApp.vue";
import ApartmentInfo from "@/components/ApartmentPage/ApartmentInfo.vue";
import { IApartment } from "@/types/data";
import data from "@/assets/data";

export default defineComponent({
  name: "ApartmentPage",
  components: { MainApp, Container, ApartmentDescription, ApartmentInfo },
  computed: {
    apartment(): IApartment {
      return data.filter(item => item.id === this.$route.params.id)[0];
    },
  },
});
</script>

<style scoped>
.main {
  padding-top: 120px;
  flex-grow: 1;
}
.apartment-page__container {
  display: flex;
  gap: 30px;
  padding-top: 60px;
}
</style>
