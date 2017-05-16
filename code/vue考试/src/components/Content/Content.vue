<template>
  <div id="content">
     <div class="swiper-container">
    	<div class="swiper-wrapper">
    		<div class="swiper-slide" v-for='(item,index) in exercises'>
				<section class="title">
        			<div>{{item.content}}</div>
        			 <img  :src="item.attachment" alt="" class="" v-if="item.attachment">
        			<span></span>
    			</section>
    			<section class="content" v-for='(option,index) in exercises[index].answers'>
        			<div class="flex content-wrap">
        			    <input type="radio" :id="option.id" :name="option.question_id" :class="{right : answerOrder===index, wrong : answerOrder!==index}" @click="isRightFun(index)"><span>{{option.label}}</span><label :for="option.id">{{option.content}}</label>
        			</div>
    			</section>
    		</div>
    	</div>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'content',
  props:['exercises','page','totalNum'],
  data(){
      return{
        answerOrder:'',
        arrAnswer:[],   //答案集合
        account:0      //统计正确的题数
      }
  },
  methods:{
      isRightFun(index){
          let that=this;
        if(this.arrAnswer[this.page.a] == this.exercises[this.page.a].answers[index].id){   //选择正确
          this.answerOrder=index;
          this.account++;
          this.totalNum.a=4*this.account;
        }else{
            let answer = this.arrAnswer[this.page.a];
          this.exercises[this.page.a].answers.forEach(function (item,index) {
            if(answer == item.id){
              $('.swiper-slide-active .content:eq('+index+') span').addClass('correct');
            }
          })
        }
      }
  },
  created(){
      let _this = this;
      this.exercises.forEach(function (item,index) {
          _this.arrAnswer.push(item.answer);
      })
  },
  mounted(){
      let _this=this;
  	 new Swiper('.swiper-container', {
            centeredSlides: true,
            autoplayDisableOnInteraction: true,
             onInit: function(swiper){
                _this.page.a = swiper.activeIndex;
                //console.log(swiper.activeIndex)
                  //if(swiper.activeIndex == 0){
                  //    $('.slidealert').css('display','block');
                  //}
             },
             onSlideChangeEnd:function(swiper){
               _this.page.a = swiper.activeIndex;
               _this.answerOrder='';   //每翻一页,清空变量
                //console.log(swiper.activeIndex)
                 //$('.ordernum').html(swiper.activeIndex+1);
                 //if(swiper.activeIndex != 0){
                 //    $('.slidealert').css('display','none');
                 //}
             }
        });
  }
}
</script>

<style lang=less scoped>
#content {
  .swiper-container{
	 width: 100%;
     height: 15.36rem;
     margin-top: .91rem;
     .title{
      width: 7.01rem;
      line-height: .27rem;
      border-radius: .2rem;
      font-size: .18rem;
      margin:  .3rem auto .48rem;
      background: #ED7097;
      position: relative;
      div{
        width: 6.75rem;
        font-size: .32rem;
        line-height: .44rem;
        color: #ffffff;
        padding: .36rem .47rem  .4rem .4rem;
      }
      img{
      	display: block;
        margin: 0 auto;
        width: 90%;
        height: 5rem;
        padding-bottom: .5rem;
      }
      span{
        position: absolute;
        width: .76rem;
        height: .67rem;
        background: url("http://cdn.yihuzhijia.cn/static/hkjj/images/ren.png") no-repeat;
        background-size: .76rem auto;
        right: .1rem;
        bottom: -.2rem;
      }
    }
     .content{
      margin: 0 .2rem .2rem;
      .content-wrap{
        position: relative;
        input[type=radio]{
          position: absolute;
          left: 0;
          top: 0;
          width: .7rem;
          height: .7rem;
          line-height: .7rem;
          text-align: center;
          border: 1px solid #D9D9D9;
          border-radius: .35rem ;
          background: transparent;  /*注意radio,checkbox在iphone有默认颜色*/
        }
        label {
          padding-left: .33rem;
          padding-top: .1rem;
          font-size: .28rem;
          line-height: .5rem;
          color: #4C4C4C;
          flex: 1;
        }
        input[type='radio']:checked+span{

        }
        input[type='radio']:checked.wrong+span{
          background:red;
          color: #ffffff;
        }
        input[type='radio']:checked.right+span{
          background:green;
          color: #ffffff;
        }
        span{
          display: inline-block;
          width: .7rem;
          height: .7rem;
          line-height: .7rem;
          text-align: center;
          border: 1px solid #D9D9D9;
          border-radius: .35rem ;
          color: #a1a1a1;
        }
        span.correct{
          background:green;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
