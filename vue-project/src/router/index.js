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
      path: '/submodulo',
      name: 'SubModulo',
      component: () => import('../views/SubModulo.vue'),
    }
  ],
})

export default router
