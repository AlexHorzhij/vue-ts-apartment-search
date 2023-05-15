<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link :to="{ name: 'homepage' }">
          <Logo />
        </router-link>
        <nav class="header__navigation">
          <UserBlock v-if="isAuth" />
          <AuthBlok v-else />
          <UserMenu />
        </nav>
      </div>
    </Container>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/reusable/Container.vue";
import Logo from "@/components/reusable/Logo.vue";
import AuthBlok from "./AuthBlok.vue";
import UserBlock from "./UserBlock.vue";
import UserMenu from "./UserMenu.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HeaderSection",
  components: {
    Container,
    Logo,
    AuthBlok,
    UserBlock,
    UserMenu,
  },
  computed: {
    ...mapGetters(["isAuth"]),
  },
});
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  z-index: 1000;
  background-color: #0f1d2d;
  width: 100%;
  height: 60px;
  padding: 16px 0;

  &__content {
    display: flex;
    justify-content: space-between;
  }
  &__navigation {
    position: relative;
  }
}
</style>
