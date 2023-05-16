<template>
  <HeaderSection />
  <router-view></router-view>
  <!-- <HomePage :data="data" /> -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <FooterSection />
</template>

<script lang="ts">
import "normalize.css";
import { defineComponent } from "vue";
import HeaderSection from "@/components/header/index.vue";
import FooterSection from "./components/FooterSection.vue";

export default defineComponent({
  components: {
    HeaderSection,
    FooterSection,
  },
  mounted() {
    console.log(this.$store.state.user);
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
