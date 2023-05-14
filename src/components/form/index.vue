<template>
  <form ref="form" class="form" v-bind="$attrs">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "@/components/reusable/InputApp.vue";

export default defineComponent({
  name: "FormApp",
  inheritAttrs: false,
  provide() {
    return { form: this };
  },
  data() {
    return {
      inputs: [] as (typeof Input)[],
    };
  },
  methods: {
    registerInput(input: typeof Input): void {
      this.inputs.push(input);
    },
    unRegisterInput(input: typeof Input): void {
      this.inputs.filter(item => item !== input);
    },
    validate() {
      const isFormValid = this.inputs.reduce((valid, input) => {
        const isInputValid = input.validate();
        return valid && isInputValid;
      }, true);
      return isFormValid;
    },
    reset() {
      this.inputs.map(item => (item.value = ""));
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.form {
  padding: 40px 30px;
  background-color: $main-background;
  width: 410px;
  z-index: 100;
}
</style>
