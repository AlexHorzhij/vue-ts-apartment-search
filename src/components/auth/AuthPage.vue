<template>
  <div class="auth">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthPage",
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.auth {
  position: relative;
  display: flex;
  height: 100%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(@/../public/img/login-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0f1d2d;
    opacity: 0.4;
    z-index: 1;
  }
}
</style>
