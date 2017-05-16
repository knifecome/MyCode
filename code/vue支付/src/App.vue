<template>
  <div id="app">
    <!-- 商品大组件 -->
    <pay-goods :goods='goods':show='show' :deleteModalshow='deleteModalshow'></pay-goods>
    <!-- 删除对话框组件 -->
    <pay-deleteModal :goods='goods' :deleteModalshow='deleteModalshow'></pay-deleteModal>
  </div>
</template>

<script>
import Goods from './components/Goods/Goods'
import DeleteModal from './components/DeleteModal/DeleteModal'
import data from "../data.json"
export default {
  name: 'app',
  data(){
    return {
      goods : {
        a:[]
      },
      show : {
        a:false
      },
      deleteModalshow:{
        a:false
      }
    }
  },
  created(){
    this.goods.a = data.value;
  },
    components : {
      'pay-goods' : Goods,
      'pay-deleteModal' : DeleteModal
    }
}
</script>

<style lang=less>
#app {

}
</style>
