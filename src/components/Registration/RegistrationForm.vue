<template>
  <Form ref="form" @submit.prevent="signUp">
    <h1 class="title">Sign up</h1>

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
import API from "@/api/auth";

export default defineComponent({
  name: "RegistrationForm",
  components: {
    InputApp,
    ButtonApp,
    Form,
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
      },
      confirmPassword: "",
    };
  },
  methods: {
    signUp() {
      if (this.form !== null) {
        const isFormValid = this.form.validate();
        if (isFormValid) {
          API.registrationUser(this.formData);
          this.form.reset();
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
      return [notEmpty, passwordConfirmValidation(password)];
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
