<template>
  <h1>Product List One (vue.js soft module)</h1>
  <div class="product-list-one">
    <h2>Phones</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span>
          {{ product.name }}
        </span>
        <span> {{ product.price }} $ </span>
      </li>
    </ul>
    <button @click="decProducts">Decrement Price</button>
  </div>
</template>

<script>
export default {
  props: ["products"],
  methods: {
    decProducts() {
      return this.products.forEach((product) => (product.price -= 1));
    },
  },
};
</script>

<style scoped lang="scss">
.product-list-one {
  padding: 20px;
  background-color: green;
  margin: 20px 0;
  border-radius: 12px;
  & > h2 {
    color: white;
    margin: 0 0 20px 0;
  }
  ul {
    list-style: none;
    color: white;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    li {
      background-color: purple;
      padding: 20px;
      border-radius: 12px;
      display: flex;
      gap: 20px;
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
