<template>
  <productListOne :products="products" />
  <productListTwo />
</template>

<script>
import ProductListOne from "../components/ProductListOne.vue";
import ProductListTwo from "../components/ProductListTwo.vue";
export default {
  name: "home-page",
  props: ["products"],
  components: {
    ProductListOne,
    ProductListTwo,
  },
};
</script>
