import App from './index.vue'

import login from '@/pages/login/login.vue'
import home from '@/pages/home/home.vue'


export default [
  {
    path: '/',
    redirect: '/login'//默认进入是未登录页面
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    component: App, 
    children: [
      {
        path: 'home',
        name: 'home',
        component: home
      }
    ]
  },
]