import App from './index.vue'

import login from '@/pages/login/login.vue'
import home from '@/pages/home/home.vue'


export default [
  {
    path: '/',
    component: App, 
    children: [
      {
        path: 'home',
        name: 'home',
        component: home
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]