<template>
  <div class="box">
    {{msg}}
    <Comp></Comp>
    <router-link to="/home">home</router-link>
    <router-link to="/login">login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Comp from '@/js/components/comp.vue'

import login from '@/pages/login/login.vue'
import home from '@/pages/home/home.vue'

export default {
  data () {
    return {
      msg: 'aaa'
    }
  },
  components: {
    Comp,
    login,
    home
  },
  mounted(){
    console.log('app mounted')
  }
}
</script>

<style lang="css" scoped>
  .box {
    color: red
  }
</style>
