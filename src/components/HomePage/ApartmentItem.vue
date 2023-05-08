<template>
  <router-link :to="{ name: 'apartment', params: { id } }">
    <div class="apartment">
      <img class="apartment__image" :src="imgUrl" />
      <div class="apartment__card visible">
        <p class="apartment__description">{{ description }}</p>
        <StarRating :rating="rating" />
        <p class="apartment__price">UAH {{ price }} per night</p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import StarRating from "@/components/reusable/StarRating.vue";

export default defineComponent({
  name: "ApartmentItem",
  components: {
    StarRating,
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
    id: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.apartment {
  width: 350px;
  height: 196px;
  position: relative;
  text-align: start;

  &__card {
    position: relative;
    overflow: hidden;
    opacity: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    color: #ffffff;
    background-image: url(@/assets/image/card-overlay.png);
    background-size: cover;
    transition: opacity 500ms;
    &:hover {
      opacity: 1;
    }
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  &__description {
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 20px;
    height: calc(1em * 1.25 * 4);
    overflow: hidden;
  }
  &__price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
