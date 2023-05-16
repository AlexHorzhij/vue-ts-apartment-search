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
    <ButtonApp type="submit" class="form__btn">
      <CircleLoader v-if="isLoading" width="40" height="40" />
      <span v-else> Sign up</span>
    </ButtonApp>
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
import CircleLoader from "@/components/reusable/loader/CircleLoader.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "RegistrationForm",
  components: {
    InputApp,
    ButtonApp,
    Form,
    AuthTitle,
    CircleLoader,
  },
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
        name: "",
        email: "",
        password: "",
      } as IFormData,
      confirmPassword: "",
    };
  },
  methods: {
    toggleLoader() {
      this.isLoading = !this.isLoading;
    },
    async signUp() {
      if (this.form !== null) {
        const isFormValid = this.form.validate();
        const confirm = this.formData.password === this.confirmPassword;
        this.toggleLoader();
        if (isFormValid && confirm) {
          try {
            await this.$store.dispatch("registration", this.formData);
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
    ...mapGetters(["isAuth"]),
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
