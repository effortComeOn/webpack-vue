<template>
  <div class="container">
    comp1
    <router-link to="/comp">comp</router-link>
    <router-link to="/home">home</router-link>
    <!-- <div class="loading">
      <el-button type="primary" :loading="true">加载中</el-button>
    </div> -->

    <!-- <div class="content">
      <div class="text">点击按钮后进行数据加载操作，在按钮上显示加载状态。</div>
      <div class="text">点击按钮后进行数据加载操作，在按钮上显示加载状态。</div>
      <div class="text">点击按钮后进行数据加载操作，在按钮上显示加载状态。</div>
      <div class="text">点击按钮后进行数据加载操作，在按钮上显示加载状态。</div>
    </div> -->
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.container{
  position: relative;
  min-height: 100vh;
  .loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .el-button{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .content {
    overflow-y: scroll;
    .text {
      line-height: 200px;
    }
  }
}

</style>
