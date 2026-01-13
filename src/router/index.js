import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Offres from '../views/Offres.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/offres',
      name: 'offres',
      component: Offres
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
