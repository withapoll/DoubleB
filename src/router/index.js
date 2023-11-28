import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SideBar from "../components/SideBar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    SideBar,
  },
  {
    path: "/humans",
    name: "Humans",
    component: () => import("../views/HumansView.vue"),
  },
  {
    path: "/shops",
    name: "Shops",
    component: () => import("../views/CoffeeShops.vue"),
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
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginForm.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
