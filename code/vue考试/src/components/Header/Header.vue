<template>
  <div id="header" class="header flex sb ac">
    	<span>单选</span>
    	<span><em class="ordernum">{{page.a+1}}</em>/<i class="totalnum">{{num}}</i></span>
  </div>
</template>

<script>
export default {
  props:['exercises','page'],
  name: 'header',
  data(){
      return{
        num:''
      }
  },
  created(){
      this.num=this.exercises.length
  }
}
</script>

<style lang=less scoped>
#header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: .91rem;
  background: rgb(249,249,249);
  font-family: "MicrosoftYaHeiLight";
  font-size: .32rem;
  padding: 0 .23rem;
  span{
    color: #4C4C4C;
  }

}
</style>
