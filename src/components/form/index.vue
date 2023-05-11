<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { VueElement, defineComponent } from "vue";

export default defineComponent({
  name: "FormApp",
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      inputs: [] as VueElement[],
    };
  },
  methods: {
    registerInput(input: VueElement): void {
      this.inputs.push(input);
    },
    unRegisterInput(input: VueElement): void {
      this.inputs.filter(item => item !== input);
    },
  },
  mounted() {
    console.log("this.form1", typeof this); // injected value
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
