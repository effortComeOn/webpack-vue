<template>
  <div class="context">
    <div class="login-box">
      <el-card class="box-card">
        用户名：<el-input type="text" name="username" v-model.lazy="user"></el-input><br/>
        密码：<el-input type="password" name="password" v-model.lazy="pass"></el-input><br/>
        <div class="login-btn">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="primary">注册</el-button>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
import { userLogin } from '@/business/api'
import mutil from '@/config'

export default {
  data() {
    return {
      msg: 'login',
      user: '',
      pass: ''
    }
  },
  mounted(){
    let login = this.$store.state.login
    let user = mutil.getStore('login')
    if(login || user){
      this.$router.push('/home')
    }
  },
  methods: {
    login(){
      if(this.user && this.pass){
        let data = {
          user: this.user,
          pass: this.pass
        }
        userLogin(data).then(res=>{
          if(res.status == 200){
            this.$store.commit('RECORD_USERINFO')
            this.$router.push('/home')            
          }else{
            alert('登陆失败')
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.context{
  width: 100%;
  min-height: 100vh;
  position: relative;
}
.login-box{//loading 的父级
  width: 100%;
  height: 100%;
  .box-card{// loading 元素
    position: absolute;
    top: 50%;
    left: 50%;
    width: 380px;
    height: 210px;
    transform: translate(-50%, -50%);
  }
}
.login-btn {
  margin-top: 10px;
}
</style>
