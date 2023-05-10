<template>
  <main class="registration">
    <!-- <div class="overlay"></div> -->
    <form class="registration__form" @submit.prevent="signIn">
      <h1 class="title">Sign in</h1>
      <div class="form__inputs">
        <InputApp placeholder="Email" v-model:value="formData.email" />
        <InputApp placeholder="Password" v-model:value="formData.password" />
      </div>
      <ButtonApp type="submit">Sign up</ButtonApp>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputApp from "@/components/reusable/InputApp.vue";
import ButtonApp from "@/components/reusable/ButtonApp.vue";

export default defineComponent({
  name: "RegistrationPage",
  components: {
    InputApp,
    ButtonApp,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      console.log("this.formData.name", this.formData);
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
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
    background-color: white;
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
