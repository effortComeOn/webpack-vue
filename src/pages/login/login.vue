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

export default {
  data() {
    return {
      msg: 'login',
      user: '',
      pass: ''
    }
  },
  mounted(){
    console.log('lllllll')
  },
  methods: {
    login(){
      console.log(this.user, this.pass)
      if(this.user && this.pass){
        let data = {
          user: this.user,
          pass: this.pass
        }
        userLogin(data)
        console.log("登陆成功")
        // this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.context{
  width: 100%;
  min-height: 100vh;
}
.login-box{
  position: absolute;
  top: 50%;
  left: 50%;
  .box-card{
    width: 380px;
    margin-left: -50%;
    margin-top: 100px;
  }
}
.login-btn {
  margin-top: 10px;
}
</style>
