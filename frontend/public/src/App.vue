<template>
  <div class="bg-gray-700">
    <navbar></navbar>
    <router-view />
    <FooterSide></FooterSide>
  </div>
</template>

<script>
import navbar from "./views/navbar.vue";
import "leaflet/dist/leaflet.css";
import FooterSide from "./views/footerSide.vue";

export default {
  components: {
    navbar,
    FooterSide,
  },
};
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
}
.link {
  text-decoration: none;
  color: #42b983;
}
.link:hover {
  color: #2c3e50;
}
</style>
