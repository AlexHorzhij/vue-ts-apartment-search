<template>
  <header class="header">
    <img src="@/assets/logo.svg" />
    <div class="authSec">
      <a href="">Вхід</a>
      <span class="divider"> / </span>
      <a href="">Реестрація</a>
    </div>
  </header>
</template>

<script setup lang="ts">
// import { defineComponent } from "vue";
</script>

<style scoped lang="scss">
.header {
  background-color: #0f1d2d;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 16px 128px;
}

.authSec {
  color: #ffffff;
  display: flex;
  align-items: center;
}

a {
  color: #ffffff;

  &:hover {
    text-decoration: underline;
  }
}

.divider {
  padding: 0 4px;
}
</style>
