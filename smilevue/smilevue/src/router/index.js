
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/pages/Register')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/pages/Login')
    }
  ]
})
