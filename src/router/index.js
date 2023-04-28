import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/frontpage/FrontLayoutView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/frontpage/HomeView.vue')
        },
        {
          path: 'productList',
          name: 'productlist',
          component: () => import('../views/frontpage/ProductListView.vue')
        },
        {
          path: 'product/:id',
          name: 'singleProduct',
          component: () => import('../views/frontpage/ProductView.vue')
        },
        {
          path: 'reserveList',
          name: 'reserve',
          component: () => import('../views/frontpage/ReserveListView.vue')
        },
        {
          path: 'createOrder',
          name: 'createorder',
          component: () => import('../views/frontpage/CreateOrderView.vue')
        },
        {
          path: 'pay',
          name: 'pay',
          component: () => import('../views/frontpage/PayView.vue')
        },
        {
          path: 'paySuccess',
          name: 'paysuccess',
          component: () => import('../views/frontpage/PaySuccessView.vue')
        },
        {
          path: 'articleList',
          name: 'articlelist',
          component: () => import('../views/frontpage/ArticleListView.vue')
        },
        {
          path: 'article/:id',
          name: 'article',
          component: () => import('../views/frontpage/ArticleView.vue')
        },
        {
          path: 'policyRule',
          name: 'policyrule',
          component: () => import('../views/frontpage/PolicyRuleView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/frontpage/AboutView.vue')
        },
        {
          path: '/:catchAll(.*)*',
          name: 'error',
          component: () => import('../views/frontpage/ErrorView.vue')
        }
      ]
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
