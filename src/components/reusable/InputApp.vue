<template>
  <div class="inputWrapper">
    <input
      v-bind="$attrs"
      class="input"
      :class="!isValid && 'error'"
      @input="$emit('update:value', $event.target.value)"
    />
    <span v-if="!isValid" class="message-error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IValid } from "@/types/data";

export default defineComponent({
  name: "input-app",
  inject: ["form"],
  data() {
    return {
      isValid: true,
      error: "",
    };
  },
  props: {
    value: {
      type: String as PropType<string>,
      default: "",
    },
    messageError: {
      type: String as PropType<string>,
      default: "",
    },
    validationRules: {
      type: Array as PropType<((str: string) => IValid)[]>,
      default: () => [],
    },
  },
  watch: {
    value(value): void {
      this.validate(value);
    },
  },
  methods: {
    validate(value: string): void {
      this.isValid = this.validationRules.every(rule => {
        const { result, message } = rule(value);
        if (!result) {
          this.error = message || this.messageError;
        }
        return result;
      });
    },
  },
  // mounted() {
  //   // eslint-disable-next-line
  //   const form: any = this.form;
  //   form?.registerInput(this);
  // },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.inputWrapper {
  position: relative;
}
.input {
  height: 44px;
  width: 100%;
  padding-left: 20px;
  background: $main-background;
  border: 2px solid $accent-color;
}
.message-error {
  position: absolute;
  display: inline-flex;
  font-size: 10px;
  bottom: -12px;
  left: 0;
  color: $error-color;
}

.error {
  border: 1px solid $error-color;
}
</style>
