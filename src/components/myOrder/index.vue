<template>
  <div class="orders__wrapper">
    <MainTitle class="title">Orders</MainTitle>
    <p v-if="ordersCount === 0">There are not orders now.</p>
    <div v-else class="orders__list">
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
  data: () => {
    return {
      ordersList: [] as string[],
    };
  },
  computed: {
    orderedApartmentData() {
      const data = apartments.filter(item => this.ordersList.includes(item.id));
      return data;
    },
    ordersCount() {
      return this.orderedApartmentData.length;
    },
  },
  async created() {
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
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
.title {
  margin-bottom: 20px;
}
</style>
