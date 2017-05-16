<template>
  <div class="footer">
      <span class="submit" @click="isSubmitModalShow.a=!isSubmitModalShow.a">提交</span>
  </div>
</template>

<script>
export default {
  name: 'footer',
  props:['isSubmitModalShow'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.2rem;
    line-height: 1.6rem;
    background: #fff;
    text-align: center;
    z-index: 99;
    span{
      display: inline-block;
      font-size:.3rem;
      height: 100%;
      background: url("./images/submit.png") no-repeat center 0;
      background-size: .37rem auto;
      color: #ccc;
    }
  }
</style>
