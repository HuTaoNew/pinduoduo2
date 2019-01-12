import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/Chat')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/Mine')
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('@/views/Recommend')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
