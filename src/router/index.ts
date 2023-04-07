import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WoundCardMain from '../views/WoundCardMain.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/woundcard-main'
  },
  {
    path: '/woundcard-main',
    name: 'WoundCardMain',
    component: WoundCardMain
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
