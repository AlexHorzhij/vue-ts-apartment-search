<template>
  <ul class="menu">
    <li class="menu__item">
      <router-link :to="{ name: 'orders' }"> My orders </router-link>
    </li>
    <li class="menu__item-button">
      <router-link :to="{ name: 'orders' }">
        <button class="button" @click="$emit('logout')">Exit</button>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserMenu",
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.menu {
  font-family: "Montserrat";
  position: absolute;
  top: 28px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  padding: 10px 10px;
  background-color: $main-background;
  border: 1px solid $accent-background;

  &__item {
    color: $main-text;
    margin-bottom: 10px;
    transition: color 0.5s linear;
    &:hover {
      color: $accent-color;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  &__item-button {
    flex-grow: 1;
    width: 100%;
  }
  .button {
    width: 100%;
    font-weight: 700;
    background-color: transparent;
    border: none;
    width: 100%;
    &:hover {
      transition: color 0.5s linear;
      color: $accent-color;
      cursor: pointer;
    }
  }
}
</style>
