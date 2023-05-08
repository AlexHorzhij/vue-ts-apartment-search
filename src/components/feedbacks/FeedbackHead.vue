<template>
  <div class="head">
    <h3 class="head__title">Total rating</h3>
    <div class="head__rating">
      <p>{{ feedbacksCount }} feedbacks</p>
      <StarRating :rating="totalRatingCount" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StarRating from "../reusable/StarRating.vue";

export default defineComponent({
  name: "FeedbackHead",
  components: { StarRating },
  props: {
    feedbacksCount: {
      type: Number,
      default: 0,
    },
    totalRatingCount: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.head {
  background-color: $secondary-background;
  padding: 20px 20px 10px 20px;

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    align-self: flex-start;
    text-transform: uppercase;
    margin-bottom: 7px;
  }

  &__rating {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.19;
  }
}
</style>
