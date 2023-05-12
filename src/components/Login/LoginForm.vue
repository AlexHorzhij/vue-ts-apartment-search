<template>
  <Form ref="form" @submit.prevent="signIn">
    <h1 class="title">Sign in</h1>
    <div class="form__inputs">
      <InputApp
        placeholder="Email"
        v-model:value="formData.email"
        messageError="Enter your email"
        :validationRules="emailRules"
      />
      <InputApp
        placeholder="Password"
        v-model:value="formData.password"
        messageError="Wrong password"
        :validationRules="passwordRules"
      />
    </div>
    <ButtonApp type="submit">Sign in</ButtonApp>
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  notEmpty,
  emailValidation,
  passwordValidation,
  symbolsMinLimit,
} from "@/utils/validationRules";
import InputApp from "@/components/reusable/InputApp.vue";
import ButtonApp from "@/components/reusable/ButtonApp.vue";
import Form from "@/components/form/index.vue";
import API from "@/api/auth";

export default defineComponent({
  name: "LoginForm",
  components: { InputApp, ButtonApp, Form },
  setup() {
    const form = ref<HTMLFormElement | null>(null);
    return {
      form,
    };
  },

  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    emailRules() {
      return [notEmpty, emailValidation];
    },
    passwordRules() {
      return [notEmpty, passwordValidation, symbolsMinLimit(8)];
    },
  },
  methods: {
    signIn() {
      if (this.form !== null) {
        const isFormValid = this.form.validate();
        if (isFormValid) {
          API.loginUser(this.formData.email, this.formData.password);
        }
      }
    },
  },
});
</script>

<style scoped>
.form__inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.title {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
}
</style>
