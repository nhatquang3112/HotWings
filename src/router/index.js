import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OrderPage from '@/components/OrderPage'
import AnalyticsPage from '@/components/AnalyticsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/order-page',
      name: 'OrderPage',
      component: OrderPage
    },
    {
      path: '/analytics-page',
      name: 'AnalyticsPage',
      component: AnalyticsPage
    },
  ]
})
