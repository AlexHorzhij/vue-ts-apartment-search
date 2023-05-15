<template>
  <Form ref="form" @submit.prevent="signUp">
    <AuthTitle>Registration</AuthTitle>

    <div class="form__inputs">
      <InputApp
        placeholder="Name"
        v-model:value="formData.name"
        :validationRules="nameRules"
      />
      <InputApp
        placeholder="Email"
        v-model:value="formData.email"
        :validationRules="emailRules"
      />
      <InputApp
        placeholder="Password"
        v-model:value="formData.password"
        :validationRules="passwordRules"
      />
      <InputApp
        placeholder="Confirm password"
        v-model:value="confirmPassword"
        :validationRules="confirmPasswordRules"
      />
    </div>
    <ButtonApp type="submit">Sign up</ButtonApp>
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IFormData } from "@/types/data";
import {
  passwordConfirmValidation,
  passwordValidation,
  emailValidation,
  notEmpty,
  symbolsLimit,
} from "@/utils/validationRules";
import Form from "@/components/form/index.vue";
import InputApp from "@/components/reusable/InputApp.vue";
import ButtonApp from "@/components/reusable/ButtonApp.vue";
import AuthTitle from "@/components/auth/AuthTitle.vue";

export default defineComponent({
  name: "RegistrationForm",
  components: {
    InputApp,
    ButtonApp,
    Form,
    AuthTitle,
  },
  setup() {
    const form = ref<HTMLFormElement | null>(null);
    return {
      form,
    };
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      } as IFormData,
      confirmPassword: "",
    };
  },
  methods: {
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.password = "";
      this.confirmPassword = "";
    },
    async signUp() {
      if (this.form !== null) {
        const isFormValid = this.form.validate();
        const confirm = this.formData.password === this.confirmPassword;
        if (isFormValid && confirm) {
          try {
            await this.$store.dispatch("registration", this.formData);
            this.form.reset();
          } catch (error) {
            console.log("error: ", error);
          }
        }
      }
    },
  },
  computed: {
    nameRules() {
      return [notEmpty, symbolsLimit(15)];
    },
    emailRules() {
      return [notEmpty, emailValidation];
    },
    passwordRules() {
      return [notEmpty, passwordValidation];
    },
    confirmPasswordRules() {
      const { password } = this.formData;
      const confirmValidation = passwordConfirmValidation(password);
      return [notEmpty, confirmValidation];
    },
  },
});
</script>

<style scoped lang="scss">
.form__inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
}
</style>
