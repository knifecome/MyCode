<template>
    <div class="modal">
      <div class="modal-header">
        <h4>{{modalTitle}}</h4>
      </div>
      <div class="modal-content">
        <div>
          <slot name="modal-content">在这里添加内容</slot>
        </div>
      </div>
      <div class="modal-footer">
        <slot name="modal-footer">
          <input class="btn blue" type="button" value="确定" @click="okHandle">
          <input class="btn" type="button" value="取消"/>
        </slot>
      </div>
    </div>
</template>

<script>
  export default {
      data(){
          return{
              num:1
          }
      },
      props:{
        modalTitle:{
            type:String,
            default:'这是一个模态框'  //如果my-modal子组件不传递modalTitle的值，则这里显示的是默认值
        }
      },
      methods:{
        okHandle(){
            this.$emit('on-ok',this.num)
        }
      }
  };
</script>
