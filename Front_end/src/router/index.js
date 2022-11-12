import { createRouter, createWebHistory } from 'vue-router'
import Vue from "vue";
import VueRouter from "vue-router";


import caijianshuomin from '../views/caijianshuomin'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  
  {
      path:'/',
      name:'layout',
      component: () => import('@/components/layout'),
      children:[
        {
          path:'/login',
          name:'login',
          component:()=>import("@/views/login.vue")
        },
        {
          path:'/register',
          name:'register',
          component:()=>import("@/views/register.vue")
        },




        // {
        //   path:'/renwushuomin',
        //   name:'renwushuomin',
        //   component:()=>import("@/views/renwushuomin"),
        // },

        {
          path:'/fengjing',
          name:'fengjing',
          component:()=>import("@/views/fengjing"),
        },
        // {
        //   path:'/jinwu',
        //   name:'jinwu',
        //   component:()=>import("@/views/jinwu"),
        // },
        
        // {
        //   path:'/meixuefenshu',
        //   name:'meixuefenshu',
        //   component:()=>import("@/views/meixuefenshu.vue")
        // },
        // {
        //   path:'/goutushuomin',
        //   name:'goutushuomin',
        //   component:()=>import("@/views/goutushuomin.vue")
        // },
        // {
        //   path:'/caijianshuomin',
        //   name:'caijianshuomin',
        //   component:()=>import("@/views/caijianshuomin.vue")
        // },
        {
          path:'/mei',
          name:'mei',
          component:()=>import("@/views/mei.vue")
        },
        {
          path:'/meiStudy',
          name:'meiStudy',
          component:()=>import("@/views/mei_study.vue")
        },
        {
          path:'/meiTest',
          name:'meiTest',
          component:()=>import("@/views/mei_test.vue")
        },
        // {
        //   path:'/a',
        //   name:'a',
        //   component:()=>import("@/components/a.vue")
        // },
        {
          path:'/taskIntro',
          name:'bataskIntro',
          component:()=>import("@/components/task_intro.vue")
        },
        {
          path:'/meiStu',
          name:'meiStu',
          component:()=>import("@/views/mei_study.vue")
        },
      
        {
          path:'/teaIntro',
          name:'teaIntro',
          component:()=>import("@/views/teach_intro.vue")
        }, 
        {
          path:'/crop',
          name:'crop',
          component:()=>import("@/components/crop.vue")
        },
        {
          path:'/rest',
          name:'rest',
          component:()=>import("@/views/rest.vue")
        }
        
    
      ]
    },
    


   

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
