<template>
  <MainApp>
    <AuthPage>
      <LoginForm />
    </AuthPage>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainApp from "@/components/reusable/MainApp.vue";
import AuthPage from "@/components/auth/AuthPage.vue";
import LoginForm from "@/components/auth/Login/LoginForm.vue";

export default defineComponent({
  name: "RegistrationPage",
  components: {
    LoginForm,
    AuthPage,
    MainApp,
  },
});
</script>
