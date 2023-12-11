import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/LoginForm.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/humans",
    name: "Humans",
    component: () => import("../views/HumansView.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/CoffeeShop.vue"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/DeliveryOrders.vue"),
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: () => import("../views/NotificationView.vue"),
  },
  {
    path: "/about",
    name: "About App",
    component: () => import("../views/AboutApp.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
