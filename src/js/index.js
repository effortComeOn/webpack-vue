// import '../css/main.css'
// import '../less/1.less'

// window.onload=function(){
//   document.onclick=function(){
//     alert('aaaa')
//   }
// }

import Vue from 'vue' // ?

import routes from './router'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const router = new VueRouter({
  mode: "hash",
  routes
})
let vm = new Vue({
  el: '#root',
  data: {
    s: 'ssss'
  },
  created: function () {
    console.log(router)
  },
  router
});