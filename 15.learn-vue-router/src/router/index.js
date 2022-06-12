import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      name: 'home',
      age: 18,
    },
    component: () => import(/*webpackChunkName: "home"*/ '../pages/Home.vue'),
    children: [
      {
        path: '',
        redirect: '/home/shop',
      },
      {
        path: 'message',
        component: () => import('../pages/HomeMessage.vue'),
      },
      {
        path: 'shop',
        component: () => import('../pages/HomeShop.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      name: 'home',
      age: 18,
    },
    component: () => import(/*webpackChunkName: "about"*/ '../pages/About.vue'),
  },
  {
    path: '/user/:name/id/:id',
    name: 'user',
    meta: {
      name: 'home',
      age: 18,
    },
    component: () => import(/*webpackChunkName: "about"*/ '../pages/User.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/404.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
