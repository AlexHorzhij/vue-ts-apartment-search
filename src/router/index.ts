import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const ApartmentPage = () => import("@/page/ApartmentPage.vue");
const HomePageVue = () => import("@/page/HomePage.vue");
const RegistrationPage = () => import("@/page/RegistrationPage.vue");
const LoginPage = () => import("@/page/LoginPage.vue");
const NotFoundPage = () => import("@/page/NotFoundPage.vue");
const OrdersPage = () => import("@/page/OrdersPage.vue");
import { store } from "@/store/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePageVue,
    name: "homepage",
  },
  {
    path: "/apartment/:id",
    component: ApartmentPage,
    name: "apartment",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
    meta: {
      hideToAuth: true,
    },
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration",
    meta: {
      hideToAuth: true,
    },
  },
  {
    path: "/orders",
    component: OrdersPage,
    name: "orders",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = store.getters["auth/isAuth"];

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuth) next({ name: "login" });
  }

  if (to.matched.some(record => record.meta.hideToAuth)) {
    if (isAuth) {
      next({ name: "homepage" });
    }
  }

  next();
});

export default router;
