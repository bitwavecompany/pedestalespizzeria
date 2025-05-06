import type { RouteRecordRaw } from "vue-router"
import PromocionesPage from "@/features/promociones/pages/PromocionesPage.vue"

const promocionesRoutes: RouteRecordRaw[] = [
  {
    path: "/promociones",
    name: "promociones",
    component: PromocionesPage,
    meta: {
      title: "promociones",
      requiresAuth: false,
    },
  },
]

export default promocionesRoutes
