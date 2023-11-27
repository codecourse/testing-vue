import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Notifications from './views/Notifications.vue'
import SignIn from './views/auth/SignIn.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },

    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications
    },

    {
      path: '/auth/signin',
      name: 'auth-signin',
      component: SignIn
    }
  ]
})
