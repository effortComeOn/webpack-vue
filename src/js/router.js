import App from './index.vue'

import login from '@/pages/login/login.vue'
import home from '@/pages/home/home.vue'


export default [
  {
    path: '/login',
    name: 'login',
    component: login
  },
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
]