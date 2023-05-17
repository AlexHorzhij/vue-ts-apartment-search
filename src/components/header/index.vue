<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link :to="{ name: 'homepage' }">
          <Logo />
        </router-link>
        <nav
          class="header__navigation"
          @mouseover="openMenu"
          @mouseleave="closeMenu"
        >
          <UserBlock v-if="isAuth" @click="toggleHideMenu" />
          <AuthBlok v-else />
          <UserMenu
            v-show="!isHiddenMenu"
            :close="closeMenu"
            @logout="signOut"
          />
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
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "HeaderSection",
  components: {
    Container,
    Logo,
    AuthBlok,
    UserBlock,
    UserMenu,
  },
  data() {
    return {
      isHiddenMenu: true,
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    openMenu() {
      if (this.isAuth) {
        this.isHiddenMenu = false;
      }
    },
    closeMenu() {
      this.isHiddenMenu = true;
    },
    toggleHideMenu() {
      this.isHiddenMenu = !this.isHiddenMenu;
    },
    async signOut() {
      try {
        await this.logout();
        this.closeMenu();
        this.$router.push({ name: "login" });
      } catch (error) {
        console.log("error: ", error);
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["isAuth"]),
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
    align-items: center;
  }
  &__navigation {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
}
</style>
