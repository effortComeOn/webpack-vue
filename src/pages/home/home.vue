<template>
  <div>
    home
  </div>
</template>

<script>
import { getBanners } from '@/business/api'
export default {
  data() {
    return {
      msg: 'llllll'
    }
  },
  mounted(){
    console.log('home mounted')
    getBanners()
  }
}
</script>

<style>
  
</style>
