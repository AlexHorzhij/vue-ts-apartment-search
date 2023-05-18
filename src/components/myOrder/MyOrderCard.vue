<template>
  <div class="card">
    <img :src="imgUrl" class="card__image" />
    <div class="card__content">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__location">{{ location }}</p>
      <p class="card__price">
        <span class="card__price-wrapper">UAH {{ price }}</span> за ночь
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MyOrderCard",
  props: {
    imgUrl: {
      type: String as PropType<string>,
      default: "",
    },
    location: {
      type: String as PropType<string>,
      default: "",
    },
    price: {
      type: Number as PropType<number>,
      default: 0,
    },
    title: {
      type: String as PropType<string>,
      default: "",
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.card {
  height: 196px;
  width: 100%;
  display: flex;
  border: 2px solid $secondary-background;
  &__image {
    width: 350px;
  }
  &__content {
    padding: 20px 20px 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 10px;
  }
  &__location {
    font-size: 16px;
    line-height: 1.19;
    margin-bottom: auto;
    flex-grow: 1;
  }
  &__price {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    &-wrapper {
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2;
    }
  }
}
</style>
