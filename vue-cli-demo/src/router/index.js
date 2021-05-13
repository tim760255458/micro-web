import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Index.vue";
import Test from '@/views/Test.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/vue-app", component: Test },
];
const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/" : "/"),
  routes,
});
export default router;
