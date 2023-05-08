<template>
  <div class="apartment-info">
    <ApartmentOwner />
    <ApartmentFeedback />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApartmentOwner from "./ApartmentOwner.vue";
import ApartmentFeedback from "@/components/feedbacks/ApartmentFeedback.vue";

export default defineComponent({
  name: "ApartmentInfo",
  components: { ApartmentOwner, ApartmentFeedback },
});
</script>

<style scoped>
.apartment-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
