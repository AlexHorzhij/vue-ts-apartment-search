<template>
  <div class="owner">
    <h3 class="owner__title">Information about owner</h3>
    <p class="owner__name item">Name: {{ name }}</p>
    <p class="owner__tel item">tel: {{ phone }}</p>
    <p class="owner__email">e-mail: {{ email }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ApartmentOwner",
  props: {
    name: {
      type: String,
      default: "Vasya",
    },
    phone: {
      type: String,
      default: "+38011111111",
    },
    email: {
      type: String,
      default: "mail@mail.com",
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.owner {
  min-height: 152px;
  width: 100%;
  padding: 20px;
  background: $secondary-background;
  mix-blend-mode: normal;
  text-align: start;
  margin-bottom: 20px;

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    align-items: center;
    margin-bottom: 20px;
  }

  &__name {
    font-size: 16px;
    line-height: 1.19;
  }
}
.item {
  margin-bottom: 2px;
}
</style>
