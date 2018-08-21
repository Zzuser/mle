import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Main from '@/components/Main'
import MyFooter from '@/components/structure/MyFooter'
import MyHeader from '@/components/structure/MyHeader'
import MyMain from '@/components/structure/MyMain'
import MyOrder from '@/components/structure/MyOrder'
import Join from '@/components/structure/Join'
import MyHelp from '@/components/structure/MyHelp'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/main',
          components: {
            MyFooter: MyFooter,
            MyHeader: MyHeader,
            MyMain: MyMain
          },
        },
        {
          path: '/main/myOrder',
          components: {
            MyFooter: MyFooter,
            MyHeader: MyHeader,
            MyMain: MyOrder
          }
        },
        {
          path: '/main/join',
          components: {
            MyFooter: MyFooter,
            MyHeader: MyHeader,
            MyMain: Join
          }
        },
        {
          path: '/main/myHelp',
          components: {
            MyFooter: MyFooter,
            MyHeader: MyHeader,
            MyMain: MyHelp
          }
        }
      ]
    }
  ]
})
