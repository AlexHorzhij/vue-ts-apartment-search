import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ApartmentPage from "@/page/ApartmentPage.vue";
import HomePageVue from "@/page/HomePage.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
