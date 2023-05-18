<template>
  <Form ref="form" @submit.prevent="signIn">
    <MainTitle>Login</MainTitle>
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
    <ButtonApp type="submit" class="form__btn" :isLoading="isLoading">
      Sign in
    </ButtonApp>
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
import MainTitle from "@/components/reusable/MainTitle.vue";

import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "LoginForm",
  components: { InputApp, ButtonApp, Form, MainTitle },
  setup() {
    const form = ref<HTMLFormElement | null>(null);
    return {
      form,
    };
  },
  data() {
    return {
      isLoading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuth"]),
    emailRules() {
      return [notEmpty, emailValidation];
    },
    passwordRules() {
      return [notEmpty, passwordValidation, symbolsMinLimit(8)];
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    toggleLoader() {
      this.isLoading = !this.isLoading;
    },
    async signIn() {
      try {
        if (this.form !== null) {
          this.form.submitForm();
          const isFormValid = this.form.validate();
          this.toggleLoader();
          if (isFormValid) {
            await this.login(this.formData);
            if (this.isAuth) {
              this.$router.push({ name: "homepage" });
              this.form.reset();
            }
          }
        }
      } catch (error) {
        console.log("error: ", error);
      } finally {
        this.toggleLoader();
      }
    },
  },
  mounted() {
    console.log(this.isAuth);
  },
});
</script>

<style scoped lang="scss">
.form {
  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
  &__btn {
    width: 100%;
  }
}
</style>
