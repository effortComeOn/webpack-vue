<template>
  <div class="box">
    <el-container>
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="2">
            <router-link class="router-link" to="/home">首页</router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="/login" v-if="!islogin">登陆</router-link>
            <el-button type="default" size="mini" @click="logout" v-if="islogin">注销</el-button>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        {{msg}}
        <Comp></Comp>
        <router-view></router-view>
      </el-main>
      
      <el-footer>
        <div href="">@by zhangjiao webpack+vue+node</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Comp from '@/js/components/comp.vue'
import mutil from '@/config'

export default {
  data () {
    return {
      msg: '这里是首页',
      islogin: false,
    }
  },
  components: {
    Comp
  },
  mounted(){
    console.log('app mounted')
    this.islogin = mutil.getStore('login')
    
  },
  methods:{
    logout(){
      this.$store.commit('LOG_OUT')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
  .box {
    min-height: 100vh;
    .router-link{
      color: #333;
      cursor: pointer;
      text-decoration: none;
      }
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    height: 10vh;
    text-align: center;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    min-height: 80vh;
  }
</style>
