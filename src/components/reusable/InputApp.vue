<template>
  <div class="inputWrapper">
    <input
      v-bind="$attrs"
      :value="value"
      @blur="blurHandler"
      class="input"
      :class="!isValid && !isFirstInput && 'error'"
      @input="$emit('update:value', $event.target.value)"
    />
    <span v-if="!isValid && !isFirstInput" class="message-error">{{
      error
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import { IValid } from "@/types/data";

export default defineComponent({
  name: "InputApp",
  inheritAttrs: false,
  data() {
    const form: HTMLFormElement | undefined = inject("form");
    return {
      isFirstInput: true,
      isValid: true,
      error: "",
      form,
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
    value(): void {
      if (this.isFirstInput) return;
      this.validate();
    },
  },
  methods: {
    blurHandler(): void {
      if (this.isFirstInput) {
        this.validate();
      }
      this.isFirstInput = false;
    },
    validate(): boolean {
      this.isValid = this.validationRules.every(rule => {
        const { result, message } = rule(this.value);
        if (!result) {
          this.error = message || this.messageError;
        }
        return result;
      });
      return this.isValid;
    },
    reset() {
      this.$emit("update:value", "");
      this.isFirstInput = true;
      this.isValid = true;
    },
  },
  mounted() {
    if (this.form) {
      this.form.registerInput(this);
    }
  },
  unmounted() {
    if (this.form) {
      this.form.unRegisterInput(this);
    }
  },
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

/* .show-btn{
  width: 44px;
} */

.error {
  border: 1px solid $error-color;
}
</style>
