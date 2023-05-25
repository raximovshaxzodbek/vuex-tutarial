<template>
  <h1>Counter {{ counter }}</h1>
  <div class="btn-group">
    <button @click="increment" class="increment">Increment</button>
    <button @click="decrement" class="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  name: "counter-page",
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style lang="scss">
.btn-group {
  display: flex;
  gap: 40px;
  margin: 30px 0;
  button {
    color: white;
    background-color: blue;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    padding: 8px 15px;
    font-size: 23px;
    color: white;
    &.increment {
      background-color: blue;
    }
    &.decrement {
      background-color: red;
    }
  }
}
</style>
