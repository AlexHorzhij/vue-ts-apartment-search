<template>
  <div class="feedback-board">
    <div class="feedback-board__head">
      <h3 class="feedback-board__title">Total rating</h3>
      <div class="feedback-board__rating">
        <p>{{ data.length }} feedbacks</p>
        <StarRating :rating="totalRatingCount" />
      </div>
    </div>
    <ApartmentFeedbackItem
      v-for="item in data"
      :key="item.id"
      :rating="item.rating"
      :name="item.name"
      :text="item.text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StarRating from "../reusable/StarRating.vue";
import ApartmentFeedbackItem from "./ApartmentFeedbackItem.vue";
import { IFeedback } from "@/types/data";
import data from "@/assets/feedback";

export default defineComponent({
  name: "ApartmentFeedback",
  components: { StarRating, ApartmentFeedbackItem },
  computed: {
    totalRatingCount() {
      return (
        this.data.reduce((acc, item) => {
          console.log("acc: ", acc);
          return acc + item.rating;
        }, 0) / this.data.length
      );
    },
  },
  setup() {
    return {
      data: data as IFeedback[],
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.feedback-board {
  width: 350px;

  &__head {
    background-color: $secondary-background;
    padding: 20px 20px 10px 20px;
  }

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
