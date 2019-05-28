<template>
  <div>
    <div>
      用户名：<input type="text" name="username" v-model.lazy="user"/><br/>
      密码：<input type="password" name="password" v-model.lazy="pass"/><br/>
      <button @click="login">登陆</button>
    </div>
  </div>
</template>

<script>
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
        console.log("登陆成功")
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style>
  
</style>
