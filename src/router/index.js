// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return {
      x: 0,
      y: 0,
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/base/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
      ],
    },
    {
      path: '/workshop',
      component: () => import('@/layouts/workshop/Index.vue'),
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/Index.vue'),
        },
      ],
    },
  ],
})

export default router
