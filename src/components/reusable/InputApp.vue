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
import { defineComponent, inject, PropType } from "vue";
import { IValid } from "@/types/data";

export default defineComponent({
  name: "InputApp",
  inheritAttrs: false,
  data() {
    const form: HTMLFormElement | undefined = inject("form");
    return {
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
      this.validate();
    },
  },
  methods: {
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

.error {
  border: 1px solid $error-color;
}
</style>
