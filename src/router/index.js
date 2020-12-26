import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TiaoZhuan from '../views/TiaoZhuan.vue'
import Child1 from '../views/Child1.vue'
import Child2 from '../views/Child2.vue'
import ZhuZhuangT from '../views/ZhuZhuangT.vue'
import Circle from '../views/Circle.vue'
import FaBiao from '../views/FaBiao.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TiaoZhuan',
    name: 'TiaoZhuan',
    component: TiaoZhuan,
    children:[
      {
        path: '/TiaoZhuan/Child1',
        name: 'Child1',
        component: () => import(/* webpackChunkName: "Child1" */ '../views/Child1.vue')
      },
      {
        path: '/TiaoZhuan/Child2',
        name: 'Child2',
        component: () => import(/* webpackChunkName: "Child2" */ '../views/Child2.vue')
      }
     
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ZhuZhuangT',
    name: 'ZhuZhuangT',
    component: () => import(/* webpackChunkName: "VXTouXiang" */ '../views/ZhuZhuangT.vue')
  },
  {
    path: '/Circle',
    name: 'Circle',
    component: ()=> import(/* webpackChunkName: "Circle" */ '../views/Circle.vue'),
    children:[
      {
        path: '/Circle/FaBiao',
        name: 'FaBiao',
        component: () => import(/* webpackChunkName: "FaBiao" */ '../views/FaBiao.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
