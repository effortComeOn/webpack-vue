<template>
  <div class="box">
    {{msg}}
    <Comp></Comp>
  </div>
</template>

<script>
import Comp from '@/components/comp.vue'

export default {
  data () {
    return {
      msg: 'aaa'
    }
  },
  components: {
    Comp
  }
}
</script>

<style lang="css" scoped>
  .box {
    color: red
  }
</style>
