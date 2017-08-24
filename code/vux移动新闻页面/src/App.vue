<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';  //加入重置reset.css
  html,body{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  #app{
    height: 100%;
  }
</style>
