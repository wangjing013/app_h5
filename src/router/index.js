import Vue from 'vue'
import Router from 'vue-router'
import Coupon from '@/pages/Coupon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coupon',
      component: Coupon
    }
  ]
})
