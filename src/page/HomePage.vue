<template>
  <Container>
    <div class="container">
      <div class="tools"></div>
      <h2 class="title">Подборка согласно выбора</h2>
      <ApartmentList>
        <ApartmentCard
          v-for="{ descr, price, rating, imgUrl, id } in data"
          :description="descr"
          :price="price"
          :rating="rating"
          :imgUrl="imgUrl"
          :key="id"
        />
      </ApartmentList>
    </div>
  </Container>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IApartment } from "@/types/data";
import Container from "@/components/reusable/Container.vue";
import ApartmentList from "@/components/apartments/ApartmentList.vue";
import ApartmentCard from "@/components/apartments/ApartmentCard.vue";

export default defineComponent({
  components: {
    ApartmentList,
    ApartmentCard,
    Container,
  },
  props: {
    data: {
      type: Array as PropType<IApartment[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.title {
  margin-bottom: 20px;
  align-self: flex-start;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
</style>
