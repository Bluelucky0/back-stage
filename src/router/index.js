import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
//解决路由重复点击出错问题
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originPush.call(this,location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {
        path:'/',
        name:'home',
        component:()=>import(/* webpackChunkName: "about" */ '../views/Home/Home.vue')
      },
      {
        path:'/mall',
        name:'mall',
        component:()=>import(/* webpackChunkName: "about" */ '../views/Mall/Mall.vue')
      },
      {
        path:'/user',
        name:'user',
        component:()=>import(/* webpackChunkName: "about" */ '../views/User/User.vue')
      },
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
