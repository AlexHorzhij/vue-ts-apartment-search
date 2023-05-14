<template>
  <MainApp class="main">
    <Container>
      <ApartmentFindForm @apartmentSearch="findApartment" />
      <h2 class="title">Подборка согласно выбора</h2>
      <ApartmentItemList>
        <ApartmentItem
          v-for="{ descr, price, rating, imgUrl, id } in filteredApartmentList"
          :description="descr"
          :price="price"
          :rating="rating"
          :imgUrl="imgUrl"
          :key="id"
          :id="id"
        />
      </ApartmentItemList>
      <p v-if="nothingFound" class="foundNotification">Nothing found</p>
    </Container>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IApartment, ISearchQuery } from "@/types/data";
import MainApp from "@/components/reusable/MainApp.vue";
import Container from "@/components/reusable/Container.vue";
import ApartmentItemList from "@/components/HomePage/ApartmentItemList.vue";
import ApartmentItem from "@/components/HomePage/ApartmentItem.vue";
import ApartmentFindForm from "@/components/HomePage/ApartmentFindForm.vue";
import data from "@/assets/data";
import { getApartmentsList } from "@/api/apartment";

export default defineComponent({
  components: {
    ApartmentItemList,
    ApartmentItem,
    ApartmentFindForm,
    Container,
    MainApp,
  },
  setup() {
    return {
      data: data as IApartment[],
    };
  },

  data() {
    return {
      filterParams: {
        city: "",
        price: null,
      } as ISearchQuery,
    };
  },
  mounted() {
    console.log("process.env.API_KEY", process.env.API_KEY);
    getApartmentsList();
  },
  methods: {
    findApartment(data: ISearchQuery): void {
      this.filterParams = data;
    },
    filterByCity(list: IApartment[]): IApartment[] | [] {
      if (!this.filterParams.city) return list;
      return list.filter(item => item.location.city === this.filterParams.city);
    },
    filterByPrice(list: IApartment[]): IApartment[] | [] {
      if (!this.filterParams.price) return list;
      return list.filter(
        item => this.filterParams.price && item.price > this.filterParams.price
      );
    },
  },
  computed: {
    nothingFound(): boolean {
      return this.filteredApartmentList.length === 0;
    },
    filteredApartmentList(): IApartment[] | [] {
      if (this.data.length === 0) return [];
      else {
        return this.filterByPrice(this.filterByCity(this.data));
      }
    },
  },
});
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  height: 100vh;
}
.title {
  margin-bottom: 20px;
  align-self: flex-start;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
.foundNotification {
  font-size: 22px;
  margin-bottom: 30px;
}
</style>
