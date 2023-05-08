<template>
  <div class="feedback">
    <div class="feedback__head">
      <img class="feedback__image" src="@/assets/icons/user-avatar.svg" />
      <div class="feedback-owner">
        <p class="feedback-owner__name">{{ name }}</p>
        <StarRating :rating="rating" />
      </div>
    </div>
    <p class="feedback__text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StarRating from "../reusable/StarRating.vue";

export default defineComponent({
  name: "ApartmentFeedbackItem",
  components: {
    StarRating,
  },
  props: {
    rating: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: "No name",
    },
    text: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.feedback {
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 2px solid $secondary-background;
  border-top: none;

  &__head {
    display: flex;
    margin-bottom: 19px;
  }
  &__image {
    margin-right: 17px;
  }
  &__text {
    text-align: start;
  }
}
.feedback-owner {
  text-align: start;

  &__name {
    margin-bottom: 2px;
  }
}
</style>
