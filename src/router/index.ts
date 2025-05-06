import { createRouter, createWebHistory } from "@ionic/vue-router"
import type { RouteRecordRaw } from "vue-router"
import homeRoutes from "@/features/home/home.routes"
import menuRoutes from "@/features/menu/menu.routes"
import promocionesRoutes from "@/features/promociones/promociones.routes"

const routes: Array<RouteRecordRaw> = [...homeRoutes, ...menuRoutes, ...promocionesRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Configuración básica de navegación
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || "Pedestales Pizzería"
  next()
})

export default router
