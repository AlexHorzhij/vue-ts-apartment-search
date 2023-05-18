<template>
  <div class="password">
    <slot></slot>
    <button
      type="button"
      class="password__show"
      @click.passive="$emit('showPasswordToggle')"
    >
      <img
        v-if="!hidePassword"
        class="password__image"
        src="@/assets/icons/eye.svg"
      />
      <img
        v-else
        class="password__image"
        src="@/assets/icons/eye-crossed.svg"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShowPasswordButton",
  props: {
    hidePassword: {
      type: Boolean,
      default: true,
    },
  },
  //   methods: {
  //     showPasswordToggle() {
  //       this.hidePassword = !this.hidePassword;
  //     },
  //   },
  computed: {
    showPassword() {
      return this.hidePassword;
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.password {
  position: relative;
  &__show {
    position: absolute;
    right: 0;
    top: 0;
    width: 44px;
    height: 100%;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-left: 2px solid #e5baaa; */
  }

  &__image {
    stroke: $accent-color;
    width: 60%;
  }
}
</style>
