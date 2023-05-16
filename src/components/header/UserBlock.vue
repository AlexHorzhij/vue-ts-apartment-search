<template>
  <button class="menu">
    <span>menu</span>
    <svg
      class="menu__image"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C6.38286 0 4.25391 2.12896 4.25391 4.74609C4.25391 7.36323 6.38286 9.49219 9 9.49219C11.6171 9.49219 13.7461 7.36323 13.7461 4.74609C13.7461 2.12896 11.6171 0 9 0Z"
      />
      <path
        d="M16.8216 14.0161C15.4028 11.8877 13.0282 10.6172 10.4708 10.6172H7.5292C4.9718 10.6172 2.5972 11.8877 1.17844 14.0161L1.08984 14.1489V18H16.9102H16.9102V14.1489L16.8216 14.0161Z"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserBlock",
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.menu {
  height: 28px;
  color: $main-background;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  fill: $main-background;
  cursor: pointer;

  &__image {
    fill: inherit;
    margin-left: 10px;
    width: 18px;
    height: 18px;
    margin-left: 10px;
  }

  &:hover {
    color: $accent-color;
    fill: $accent-color;
  }
}
</style>
