<template>
  <div class="star-rating">
    <span class="star star__empty" v-for="index in limit" :key="index"></span>
    <div class="star-container" :style="ratingCount">
      <span
        class="star star__filled"
        v-for="index in limit"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "star-rating",
  props: {
    rating: {
      type: Number as PropType<number>,
      default: 0,
    },
    limit: {
      type: Number as PropType<number>,
      default: 5,
    },
  },
  computed: {
    ratingCount() {
      return {
        width: `${this.rating * 20}%`,
      };
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;
  gap: 5px;
}

.star {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-repeat: no-repeat;
  flex-shrink: 0;

  &-container {
    position: absolute;
    display: inline-flex;
    gap: 5px;
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  &__empty {
    background-image: url(@/assets/icons/star.svg);
  }

  &__filled {
    background-image: url(@/assets/icons/star-filled.svg);
  }
}
</style>
