import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'web',
      // component: () => import('@/views/web/index.vue')
      redirect: '/admin'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/signup/index.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/index.vue')
    },
  ]
})

export default router
