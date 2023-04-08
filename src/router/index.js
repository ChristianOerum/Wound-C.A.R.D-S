import { createRouter, createWebHistory } from '@ionic/vue-router';

//views
import WoundCardMain from '../views/WoundCardMain.vue'
import GivenWoundCard from '../views/GivenWoundCardPage.vue'
import Login from '../views/LoginPage.vue'
import Team from '../views/TeamPage.vue'
import Account from '../views/AccountPage.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
