import type { RouteRecordRaw } from "vue-router"
import MenuPage from "@/features/menu/pages/MenuPage.vue"

const menuRoutes: RouteRecordRaw[] = [
  {
    path: "/menu",
    name: "menu",
    component: MenuPage,
    meta: {
      title: "Menu",
      requiresAuth: false,
    },
  },
]

export default menuRoutes
