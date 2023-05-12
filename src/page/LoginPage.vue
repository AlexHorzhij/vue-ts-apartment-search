<template>
  <main class="registration">
    <!-- <div class="overlay"></div> -->
    <LoginForm class="registration__form" />
    <!-- <h1 class="title">Sign in</h1>
      <div class="form__inputs">
        <InputApp
          placeholder="Email"
          v-model:value="formData.email"
          message="Enter your email"
          :isNotValid="true"
        />
        <InputApp
          placeholder="Password"
          v-model:value="formData.password"
          message="ffffffffff"
          :isNotValid="false"
        />
      </div>
      <ButtonApp type="submit">Sign up</ButtonApp> -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/Login/LoginForm.vue";

export default defineComponent({
  name: "RegistrationPage",
  components: {
    LoginForm,
  },

  // methods: {
  //   signIn() {
  //     // API.loginUser(this.formData.email, this.formData.password);
  //   },
  // },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.registration {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  width: 100%;
  flex-grow: 1;
  background-image: url(@/../public/img/login-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  &__form {
    padding: 40px 30px;
    background-color: $main-background;
    width: 410px;
    z-index: 100;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0f1d2d;
  mix-blend-mode: darken;
  opacity: 0.4;
}
</style>
