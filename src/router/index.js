import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home'),
      children: [{
          path: 'clothing',
          name: 'clothing',
          component: () => import('@/views/Home/TopNav/Clothing.vue')
        },
        {
          path: 'department',
          name: 'department',
          component: () => import('@/views/Home/TopNav/Department.vue')
        },
        {
          path: 'electric',
          name: 'electric',
          component: () => import('@/views/Home/TopNav/Electric.vue')
        },
        {
          path: 'food',
          name: 'food',
          component: () => import('@/views/Home/TopNav/Food.vue')
        },
        {
          path: 'mens',
          name: 'mens',
          component: () => import('@/views/Home/TopNav/Mens.vue')
        },
        {
          path: 'monandbaby',
          name: 'monandbaby',
          component: () => import('@/views/Home/TopNav/MonAndBaby.vue')
        },
        {
          path: 'popular',
          name: 'popular',
          component: () => import('@/views/Home/TopNav/Popular.vue')
        },
        {
          path: 'shoes',
          name: 'shoes',
          component: () => import('@/views/Home/TopNav/ShoesAndBags.vue')
        },
        {
          path: 'underwear',
          name: 'underwear',
          component: () => import('@/views/Home/TopNav/Underwear.vue')
        },
        {
          path: '/home',
          redirect: '/home/popular'
        }
      ]
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