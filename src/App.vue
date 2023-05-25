<template>
  <div class="app">
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Apple 14 Pro Max",
          category: "Appple Phone",
          price: 1499,
        },
        {
          id: 2,
          name: "Apple 13 Pro",
          price: 699,
          category: "Apple Phone",
        },
        {
          id: 3,
          name: "Xiaomi 13 Pro",
          price: 1299,
          category: "Xiaomi Phone",
        },
      ],
    };
  },
  components: {
    RouterView,
    Navbar,
  },
};
</script>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
  background-color: bisque;
  padding: 20px;
}
</style>
