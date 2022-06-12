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

// 添加一级路由
// const category = {
//   path: '/category',
//   component: () => import('../pages/Category.vue'),
// }
// router.addRoute(category)

// 添加二级路由
const category = {
  path: '/category',
  name: 'category',
  component: () => import('../pages/Category.vue'),
}
router.addRoute('home', category)

// 删除路由
// 1. 添加一个name相同的，替换
// 2. addRoute返回removeRoute函数
// 3. router.removeRoute(name)

// 导航守卫
router.beforeEach((to, from) => {
  /*
  返回值
   1. false : 不跳转
   2. undefined或不写 : 进行默认导航
   3. 字符串路径
   4. 对象
  */

  if (to.path.indexOf('/home') !== -1) {
    // return '/category'
    return { name: 'category' }
  }
  console.log('路由跳转')
  console.log(from)
  console.log(to)
})

export default router
