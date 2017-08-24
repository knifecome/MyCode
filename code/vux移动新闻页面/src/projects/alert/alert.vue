<template>
  <div id="alert">
    <my-alert type="error" title="错误了，请重写" :closeable="false"></my-alert> <!--布尔值这种用动态:closeable-->
    <my-alert type="success" title="恭喜你，成功了"></my-alert>
    <my-alert type="info" styles="width:1000px;background-color:pink"></my-alert> <!--传一个样式过去,不要用style传递props值-->
    <my-alert type="warning" :showicon="true"></my-alert> <!--showicon的值不能写成showIcon-->
    <my-alert @close-click="close">
      <template slot="titleTmp"> <!--多个标签合在一起用-->
        <p>我是定制的提醒信息</p>
        <p>我是定制的提醒信息</p>
        <p>我是定制的提醒信息</p>
        <p>我是定制的提醒信息</p>
        <p>我是定制的提醒信息</p>
      </template>
      <i slot="iconTmp" class="m-icon m-icon-menu"></i>
    </my-alert>
  </div>
</template>

<script>
import myAlert from './inc/my-alert.vue'
export default {
  name: 'alert',
  data () {
    return{

    }
  },
  methods: {
    close(){
        alert('关闭后做一些')
    }
  },
  components:{
    myAlert
  }
}
</script>



