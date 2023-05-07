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
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default defineComponent({
  components: {
    HeaderSection,
    FooterSection,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}
ul,
ol {
  list-style: none;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
}
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
