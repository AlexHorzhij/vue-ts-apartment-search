<template>
  <MainApp>
    <AuthPage>
      <RegistrationForm />
    </AuthPage>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainApp from "@/components/reusable/MainApp.vue";
import AuthPage from "@/components/auth/AuthPage.vue";
import RegistrationForm from "@/components/auth/Registration/RegistrationForm.vue";

export default defineComponent({
  name: "RegistrationPage",
  components: {
    RegistrationForm,
    MainApp,
    AuthPage,
  },
});
</script>
