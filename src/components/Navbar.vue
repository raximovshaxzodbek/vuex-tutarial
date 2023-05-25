<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "navbar-component",
  components: {
    RouterLink,
  },
};
</script>

<style lang="scss" scoped>
$dark: #121212;
nav {
  display: flex;
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  a {
    color: $dark;
    font-size: 20px;
    &.router-link-active {
      color: blue;
      text-decoration: underline;
    }
  }
}
</style>
