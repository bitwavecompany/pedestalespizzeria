import type { RouteRecordRaw } from "vue-router"
import HomePage from "@/features/home/pages/HomePage.vue"

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
    meta: {
      title: "Inicio - Pedestales Pizzería",
      requiresAuth: false,
    },
  },
]

export default homeRoutes
