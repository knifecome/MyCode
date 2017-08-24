<template>
  <div>
    <my-model :modalTitle="title" @on-ok="ok"></my-model><!--注意，如果这里不用title这个变量的话，而直接用字符串的话，前面的:modalTitle要变成modal-title(不要冒号)-->
    <my-model>
      <!--这里的ul整体会替代子组件里面的<slot name="modal-content">在这里添加内容</slot>-->
      <ul slot="modal-content">
        <li v-for="item of list">{{item}}</li>
      </ul>
      <!--这里的<div slot="modal-footer">会整体替代子组件的
      <slot name="modal-footer">
          <input class="btn blue" type="button" value="确定" @click="okHandle">
          <input class="btn" type="button" value="取消"/>
        </slot>-->
      <div slot="modal-footer">
        <span>确定</span>
        <span>重置</span>
        <span>返回</span>
      </div>
    </my-model>
  </div>

</template>

<script>
  import myModel from './inc/m-model.vue'
  export default {
      data(){
          return{
              title:'警告',
              list:[...'我的组件'] //把字符串分割成了数组
          }
      },
      components:{
        myModel
      },
      methods:{
        ok(num){
            alert('从子组件接收到的数字'+num);
        }
      }
  };
</script>
<style>
  p,h4{
    margin:0;
  }
  .modal{
    width: 500px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    box-shadow: 0 3px 9px rgba(0,0,0,.5);

  }
  .modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
  }
  .modal-content div {
    padding: 20px;
  }
  .modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
  }
  .btn {
    padding: 5px 15px;
    border: none;
    outline: none;
  }
  .blue {
    color: #fff;
    background-color: #39f;
    border-color: #39f;
  }
</style>
