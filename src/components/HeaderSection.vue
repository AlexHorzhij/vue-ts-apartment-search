<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link :to="{ name: 'homepage' }">
          <Logo />
        </router-link>
        <div class="authSec">
          <router-link :to="{ name: 'login' }">
            <p>Вхід</p>
          </router-link>
          <span class="divider"> / </span>
          <router-link :to="{ name: 'registration' }">
            <p>Реестрація</p>
          </router-link>
        </div>
      </div>
    </Container>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "./reusable/Container.vue";
import Logo from "./reusable/Logo.vue";

export default defineComponent({
  name: "HeaderSection",
  components: {
    Container,
    Logo,
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
}

.authSec {
  color: #ffffff;
  display: flex;
  align-items: center;
}

a {
  color: #ffffff;

  &:hover {
    text-decoration: underline;
  }
}

.divider {
  padding: 0 4px;
}
</style>
