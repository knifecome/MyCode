<template>
  <div class="submitModal">
    <!--模态框-->
    <section class="modal-wrap2" id="modal-wrap2">

    </section>
    <section class="wrap2" id="wrap2">
      <p>提示</p>
      <p>确认提交答案?</p>
      <div class="btn"><input type="button" value="确定" id="btn-confirm" @click="(isScoreShow.a=!isScoreShow.a)&&(isFooterShow.a=!isFooterShow.a)"><input type="button" value="取消" id="btn-cancel" @click.stop="isSubmitModalShow.a=!isSubmitModalShow.a"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'submitModal',
  props:['isSubmitModalShow','isScoreShow','isFooterShow'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@ff1:"Microsoft Yahei Light";
@ff2:"Microsoft Yahei";
@color1:#a1a1a1;
@color2:#e1e1e1;
@color3:#e34b28;
@color4:#4c4c4c;
.modal-wrap2{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 100;
}
.wrap2{
  position: fixed;
  width: 4.59rem;
  border-radius: 10px;
  background:#ffffff;
  left: 50%;
  top:50%;
  z-index: 101;
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  text-align: center;
  p{
    text-align: center;
    color: rgba(76,76,76,1);
    &:nth-of-type(1){
      padding-top: .1rem;
      line-height: .64rem;
      font-size: .34rem;
      font-family: @ff2;
    }
    &:nth-of-type(2){
      line-height: .78rem;
      font-size: .28rem;
      font-family: @ff1;
      border-bottom: 1px solid #f7f7f7;
    }
  }
  .btn{
    input{
      display: inline-block;
      line-height: .98rem;
      font-size: .32rem;
      background: transparent;
      color: rgb(161,161,161);
    }
    input:nth-of-type(1){
      width: 50%;
      color: rgb(237,112,151);
    }
    input:nth-of-type(2){
      width: 50%;
    }
  }
}
</style>
