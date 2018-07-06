import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: Product
    }
  ]
})
