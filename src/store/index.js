import { createStore } from "vuex";

export const store = createStore({
  strict: true,
  state() {
    return {
      products: [
        {
          id: 1,
          name: "Apple 14 Pro Max",
          category: "Appple Phone",
          price: 1499,
          done: true,
        },
        {
          id: 2,
          name: "Apple 13 Pro",
          price: 699,
          category: "Apple Phone",
          done: false,
        },
        {
          id: 3,
          name: "Xiaomi 13 Pro",
          price: 1299,
          category: "Xiaomi Phone",
          done: true,
        },
      ],
      counter: 0,
    };
  },
  getters: {
    doneProducts(state) {
      return state.products.filter((product) => product.done);
    },
  },
  mutations: {
    decrementPrice(state) {
      return state.products.forEach((product) => (product.price -= 1));
    },
    increment(state) {
      return state.counter++;
    },
    decrement(state) {
      return state.counter--;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
  },
});
