import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/FondoPrincipanlView.vue'),
    },
    {
      path: '/submodulo/:moduloId/:subModuloId',
      name: 'subModulo',
      component: () => import('../views/SubModulo.vue'),
    },
    {
      path: '/contenido/:moduloId/:subModuloId/:seccionId',
      name: 'contenido',
      component: () => import('../views/ContenidoModulo.vue'),
    }
  ],
})

export default router
