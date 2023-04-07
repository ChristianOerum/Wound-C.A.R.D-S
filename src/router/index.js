import { createRouter, createWebHistory } from '@ionic/vue-router';

//views
import WoundCardMain from '../views/WoundCardMain.vue'
import GivenWoundCard from '../views/GivenWoundCardPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/woundcard-main'
  },
  {
    path: '/woundcard-main',
    name: 'WoundCardMain',
    component: WoundCardMain
  },
  {
    path: '/given-woundcard',
    name: 'GivenWoundCardPage',
    component: GivenWoundCard
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
