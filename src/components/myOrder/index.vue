<template>
  <div class="orders__wrapper">
    <MainTitle class="title">Orders</MainTitle>
    <div class="orders__container">
      <MyOrderCard
        v-for="order in orderedApartmentData"
        :key="order.id"
        :imgUrl="order.imgUrl"
        :description="order.descr"
        :location="order.location.city"
        :price="order.price"
        :title="order.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import apartments from "@/assets/data";
import MainTitle from "@/components/reusable/MainTitle.vue";
import MyOrderCard from "@/components/myOrder/MyOrderCard.vue";
import API from "@/api/apartment";

export default defineComponent({
  name: "myOrders",
  components: { MainTitle, MyOrderCard },
  data() {
    return {
      ordersList: [] as string[],
    };
  },
  computed: {
    orderedApartmentData() {
      const data = apartments.filter(item => this.ordersList.includes(item.id));
      return data;
    },
  },
  async mounted() {
    const orders = await API.getReserve(this.$store.state.auth.user.uid);
    if (orders) {
      this.ordersList = orders.reserved;
    }
  },
});
</script>

<style scoped lang="scss">
.orders {
  &__wrapper {
    width: 730px;
    padding-top: 60px;
    margin: 0 auto;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
.title {
  margin-bottom: 20px;
}
</style>
