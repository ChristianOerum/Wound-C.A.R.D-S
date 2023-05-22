import { createRouter, createWebHistory } from '@ionic/vue-router';

//import store
import { store } from '../store/store.js'

//views
import WoundCardMain from '../views/WoundCardMain.vue'
import GivenWoundCard from '../views/GivenWoundCardPage.vue'
import Login from '../views/LoginPage.vue'
import Team from '../views/TeamPage.vue'
import Account from '../views/AccountPage.vue'
import CreateUser from '../views/CreateUserPage.vue'
import Scan from '../views/QRscannerPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/woundcard-main',
    meta: {
        requiresAuth: true
      }
  },
  {
    path: '/woundcard-main',
    name: 'WoundCardMain',
    component: WoundCardMain,
    meta: {
        requiresAuth: true
      }
  },
  {
    path: '/given-woundcard',
    name: 'GivenWoundCardPage',
    component: GivenWoundCard,
    meta: {
        requiresAuth: true
      }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: {
        requiresAuth: true
      }
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account,
    meta: {
        requiresAuth: true
      }
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: CreateUser,
    meta: {
        requiresAuth: true
      }
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan,
    meta: {
        requiresAuth: true
      }
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.loggedIn != true) {
      next('/login')
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
