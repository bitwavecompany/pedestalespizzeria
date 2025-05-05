import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import homeRoutes from '@/features/home/home.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,

  //Ruta para manejar páginas no encontradas (404)
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component:() => import('@/shared/components/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Configuración de navegación (títulos, guardias, etc.)
router.beforeEach((to, from, next) => {
  // Establecer el título de la página
  document.title = to.meta.title as string || 'Pedestales Pizzería';
  
  // Aquí podrías añadir lógica para verificar autenticación, etc.
  next();
});

export default router
