import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Form",
    component: () => import("@/views/Form.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/SearchList.vue"),
  },
  {
    path: "/dynamic",
    name: "dynamic ",
    component: () => import("@/views/DynamicComponent.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
