<template>
  <h1>Product List Two (vuex module)</h1>
  <div class="product-list-two">
    <h2>Phones</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span>{{ product.name }}</span>
        <span>{{ product.price }} $</span>
        <span>{{ product.done }}</span>
      </li>
    </ul>
    <h2>Done Products</h2>
    <ul>
      <li v-for="product in doneProducts" :key="product.id">
        <span>{{ product.name }}</span>
        <span>{{ product.price }} $</span>
        <span>{{ product.done }}</span>
      </li>
    </ul>
    <button @click="this.$store.commit('decrementPrice')">
      Decrement Price
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    doneProducts() {
      return this.$store.getters.doneProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-list-two {
  background-color: darkblue;
  padding: 30px;
  border-radius: 12px;
  margin: 20px 0;
  h2 {
    color: #fff;
  }
  ul {
    list-style: none;
    li {
      color: black;
      background-color: orange;
      padding: 20px;
      margin: 20px 0;
      display: flex;
      gap: 20px;
      border-radius: 12px;
    }
  }
  & > button {
    margin: 20px 0;
    padding: 8px 15px;
    font-size: 20px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    &:active {
      background-color: black;
      color: white;
    }
  }
}
</style>
