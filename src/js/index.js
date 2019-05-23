// import '../css/main.css'
// import '../less/1.less'

// window.onload=function(){
//   document.onclick=function(){
//     alert('aaaa')
//   }
// }

import Vue from 'vue' // ?
import App from './index.vue'

let vm = new Vue({
  el: '#root',
  data: {},
  template: '<App />',
  components: {
    App
  }
});