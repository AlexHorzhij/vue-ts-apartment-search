<template>
  <div class="apartment">
    <div class="apartment-title__container">
      <h2 class="apartment-title">{{ title }}</h2>
      <StarRating :rating="rating" />
    </div>
    <img class="apartment__image" :src="imgUrl" alt="apartment image" />
    <p class="apartment__description">{{ description }}</p>
    <ButtonApp class="apartment__btn">Reserve</ButtonApp>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import StarRating from "../reusable/StarRating.vue";
import ButtonApp from "../reusable/ButtonApp.vue";

export default defineComponent({
  name: "ApartmentDescription",
  components: {
    StarRating,
    ButtonApp,
  },
  props: {
    imgUrl: {
      type: String as PropType<string>,
      default: "",
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
    rating: {
      type: Number as PropType<number>,
      default: 0,
    },
    price: {
      type: Number as PropType<number>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.apartment {
  width: 730px;
  display: flex;
  flex-direction: column;

  &__image {
    max-width: 730px;
    max-height: 410px;
    flex-grow: 1;
    margin-bottom: 30px;
  }

  &__description {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: start;
    margin-bottom: 24px;
  }

  &__btn {
    align-self: center;
  }
}
.apartment-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-right: 20px;

  &__container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
