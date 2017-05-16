<template>
  <div class="score">
    <header></header>
    <section class="content">
      <span><em>{{totalNum.a}}</em>分</span>
    </section>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'score',
  props:['totalNum'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .score{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/hk_bg.png") no-repeat;
    background-size: 7.5rem auto;
    z-index: 102;
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
    .content{
      position: absolute;
      left: 50%;
      top: 4.5rem;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 6.43rem;
      height: 5.24rem;
      background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/content2.png") no-repeat;
      background-size: contain;
      span{
        position: absolute;
        left: 50%;
        top: 36%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        font-size: .8rem;
        letter-spacing: 1px;
        color: #C00400;
      }
    }
    footer{
      position: absolute;
      left: 50%;
      top: 10.3rem;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 6.39rem;
      height: .2rem;
      background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/footer.png") no-repeat;
      background-size: contain;
    }
  }
</style>
