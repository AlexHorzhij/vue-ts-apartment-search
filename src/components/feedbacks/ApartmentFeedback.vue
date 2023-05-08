<template>
  <div class="feedback-board">
    <FeedbackHead
      :feedbacksCount="feedbacksCount"
      :totalRatingCount="totalRatingCount"
    />
    <div class="feedback-board__list" :class="feedbackListHeight">
      <ApartmentFeedbackItem
        v-for="item in feedbackData"
        :key="item.id"
        :rating="item.rating"
        :name="item.name"
        :text="item.text"
      />
    </div>
    <LoadMoreBtn @click="toggleFeedbackData">{{ loadBtnText }}</LoadMoreBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApartmentFeedbackItem from "./ApartmentFeedbackItem.vue";
import FeedbackHead from "./FeedbackHead.vue";
import LoadMoreBtn from "./LoadMoreBtn.vue";
import { IFeedback } from "@/types/data";
import data from "@/assets/feedback";

export default defineComponent({
  name: "ApartmentFeedback",
  components: { ApartmentFeedbackItem, LoadMoreBtn, FeedbackHead },
  setup() {
    return {
      data: data as IFeedback[],
    };
  },
  data() {
    return {
      feedbacksLimit: 2,
    };
  },
  methods: {
    toggleFeedbackData() {
      if (this.feedbacksLimit === 2) {
        this.feedbacksLimit = this.feedbacksCount;
      } else {
        this.feedbacksLimit = 2;
      }
    },
  },
  computed: {
    loadBtnText(): string {
      return this.feedbacksLimit > 2 ? "Hide" : "Read more..";
    },
    feedbackListHeight(): string | null {
      return this.feedbacksLimit > 2 ? "height" : null;
    },
    feedbacksCount(): number {
      return this.data.length;
    },
    totalRatingCount(): number {
      if (this.feedbacksCount === 0) return 0;
      return (
        this.data.reduce((acc: number, item: IFeedback) => {
          return acc + item.rating;
        }, 0) / this.feedbacksCount
      );
    },
    feedbackData(): IFeedback[] {
      return this.data.slice(0, this.feedbacksLimit);
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.feedback-board {
  width: 350px;

  &__list {
    overflow-y: auto;
  }
}
.height {
  height: 450px;
}
</style>
