import Vue from 'vue' // ?

import routes from './router'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from '@/store'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: "hash",
  routes
})

Vue.use(ElementUI)

let vm = new Vue({
  el: '#root',
  data: {
    s: 'ssss'
  },
  store,
  created: function () {
    // console.log(router)
  },
  router
});