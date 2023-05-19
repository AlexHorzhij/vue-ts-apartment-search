<template>
  <Form ref="form" @submit.prevent="signUp">
    <MainTitle>Registration</MainTitle>

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
      <ShowPasswordButton
        :hidePassword="hidePassword"
        @showPasswordToggle="showPasswordToggle"
      >
        <InputApp
          placeholder="Password"
          v-model:value="formData.password"
          :validationRules="passwordRules"
          :type="hidePassword ? 'password' : 'text'"
        />
      </ShowPasswordButton>
      <ShowPasswordButton
        :hidePassword="hideConfirmPassword"
        @showPasswordToggle="showConfirmPasswordToggle"
      >
        <InputApp
          placeholder="Confirm password"
          v-model:value="confirmPassword"
          :validationRules="confirmPasswordRules"
          :type="hideConfirmPassword ? 'password' : 'text'"
        />
      </ShowPasswordButton>
    </div>
    <ButtonApp type="submit" class="form__btn" :isLoading="isLoading">
      Sign up
    </ButtonApp>
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ISingUp } from "@/types/data";
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
import MainTitle from "@/components/reusable/MainTitle.vue";
import ShowPasswordButton from "@/components/reusable/ShowPasswordButton.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "RegistrationForm",
  components: {
    InputApp,
    ButtonApp,
    Form,
    MainTitle,
    ShowPasswordButton,
  },
  setup() {
    const form = ref<HTMLFormElement | null>(null);
    return {
      form,
    };
  },
  data() {
    return {
      hidePassword: true,
      hideConfirmPassword: true,
      isLoading: false,
      formData: {
        name: "",
        email: "",
        password: "",
      } as ISingUp,
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions("auth", ["registration"]),
    toggleLoader() {
      this.isLoading = !this.isLoading;
    },
    showPasswordToggle() {
      this.hidePassword = !this.hidePassword;
    },
    showConfirmPasswordToggle() {
      this.hideConfirmPassword = !this.hideConfirmPassword;
    },
    async signUp() {
      if (this.form !== null) {
        const isFormValid = this.form.validate();
        const confirm = this.formData.password === this.confirmPassword;
        this.toggleLoader();
        if (isFormValid && confirm) {
          try {
            await this.registration(this.formData);
            if (this.isAuth) {
              this.$router.push({ name: "homepage" });
              this.form.reset();
            }
          } catch (error) {
            console.log("error: ", error);
          } finally {
            this.toggleLoader();
          }
        }
      }
    },
  },

  computed: {
    ...mapGetters("auth", ["isAuth"]),
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
.form {
  width: 410px;
  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;
  }
  &__btn {
    width: 100%;
  }
}
</style>
