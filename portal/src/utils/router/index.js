import { createRouter, createWebHistory } from "vue-router";

const VueAndReact = () => import("../../views/VueAndReact.vue");
const VueApp = () => import("../../views/VueApp.vue");
const ReactApp = () => import("../../views/ReactApp.vue");

const routes = [
  { path: "/", component: VueAndReact },
  { path: "/react-app", component: ReactApp },
  { path: "/vue-app", component: VueApp },
];

const routerIns = createRouter({
  history: createWebHistory(),
  routes,
});

export default routerIns;
