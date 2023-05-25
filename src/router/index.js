import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      name: "counter",
      path: "/counter",
      component: () => import("../views/Counter.vue"),
    },
  ],
});
