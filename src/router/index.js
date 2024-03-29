import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
   name:'login',
   component: () => import('../views/login.vue')
  },
  {
    path:'/',
   name:'layout',
   component: () => import('../views/layout.vue'),
   children:[
     {
       path:'',//默认子路由
       name:'home',
       component:() => import('../views/home.vue'),
       
     },
     {
      path:'/qa',
     name:'qa',
     component: () => import('../views/qa.vue')
    },
    {
      path:'/video',
     name:'video',
     component: () => import('../views/vedio.vue')
    },
    {
      path:'/my',
     name:'my',
     component: () => import('../views/my.vue')
    },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
