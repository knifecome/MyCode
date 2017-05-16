<template>
  <div class="enter">
    <header></header>
    <section class="hk_content"></section>
    <section class="hk_body">
      <a href="javascript:;" class="btn btn-left btn1"></a>
      <a href="javascript:;" class="btn btn-right btn2"></a>
      <a href="javascript:;" class="btn btn-left btn3"></a>
      <a href="javascript:;" class="btn btn-right btn4"></a>
      <a href="javascript:;" class="btn btn-left btn5"></a>
      <a href="javascript:;" class="btn btn-right btn6"></a>
      <a href="javascript:;" class="btn btn-left btn7"></a>
      <a href="javascript:;" class="btn btn-right btn8"></a>
      <a href="javascript:;" class="btn btn-left btn9"></a>
      <a href="javascript:;" class="btn btn-right btn10"></a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'enter',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .enter{
    position:absolute;
    left: 0;
    top: -.91rem;
    width: 7.5rem;
    height: 17.08rem;
    background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/hk_bg.png") no-repeat #E8E7E7;
    background-size: 7.5rem auto;
    z-index: 104;
    header{
      position: absolute;
      left: 50%;
      top: 1rem;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 6.22rem;
      height: 1.84rem;
      background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/header_title.png") no-repeat;
      background-size: contain;
    }
    .hk_content{
      position: absolute;
      left: 50%;
      top: 3.7rem;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 3.2rem;
      height: .53rem;
      background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/content.png") no-repeat;
      background-size: contain;
    }
    .hk_body{
      position: absolute;
      left: 50%;
      top: 5rem;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 6.43rem;
      height: 9.34rem;
      background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/body.png") no-repeat;
      background-size: 6.43rem auto;
      .btn{
        position: absolute;
        width: 1.92rem;
        height: .65rem;
      }
      .btn-left{
        left: 1rem;
        background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/zhuanye.png") no-repeat;
        background-size: 1.92rem auto;
      }
      .btn-right{
        right: 1rem;
        background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/shijian.png") no-repeat;
        background-size: 1.92rem auto;
      }
      .btn1,.btn2{
        top: 1rem;
      }
      .btn3,.btn4{
        top: 2.8rem;
      }
      .btn5,.btn6{
        top: 4.7rem;
      }
      .btn7,.btn8{
        top: 6.5rem;
      }
      .btn9,.btn10{
        top: 8.3rem;
      }
    }
  }
</style>
