import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ApartmentPage from "@/page/ApartmentPage.vue";
import HomePageVue from "@/page/HomePage.vue";
import RegistrationPage from "@/page/RegistrationPage.vue";
import LoginPage from "@/page/LoginPage.vue";
import NotFoundPage from "@/page/NotFoundPage.vue";

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
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration",
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

export default router;
