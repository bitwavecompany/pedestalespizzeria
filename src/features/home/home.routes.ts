// src/features/home/home.routes.ts
import { RouteRecordRaw } from "vue-router";
import HomePage from "@/features/home/pages/HomePage.vue";

const homeRoutes: RouteRecordRaw[]= [
    {
        path: '/',
        redirect: 'home' // Cuando accedan a / entonces redirige a home
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage,
        meta: {
          title: 'Inicio - Pedestales Pizzería',
          requiresAuth: false
        }
    },
];

// Exportamos las rutas para que puedan ser importadas por el router principal
export default homeRoutes;