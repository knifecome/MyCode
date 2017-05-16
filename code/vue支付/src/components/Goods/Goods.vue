<template>
	<div id="goods">
		  <header>
        	<span></span>
        	<span>购物车</span>
        	<span @click.stop=changeshow>{{show.a==false?'编辑':'完成'}}</span>
    	</header>
      <form action="" id="form2">
        <!--图书列表-->
        <section class="wrapper">
            <section class="book-item2 flex fs" v-for="(item,index) in goods.a">
                <input type="checkbox" :id="item.id" class="choose" :checked='item.isChecked' @click="select(index)"><label :for="item.id"></label>
                <img src="./images/book.png" alt=""/>
                <div>
                    <h3 v-if="!show.a">{{item.title}}</h3>
                    <template  v-else>
                        <div class="btn-component">
                            <a class="sub" @click="sub(index)">-</a>
                            <input type="number" :value="item.count" min="1" v-model.trim.number="item.count">
                            <a class="add" @click="add(index)">+</a>
                        </div>
                    </template>
                    <p>x<em class="number">{{item.count}}</em></p>
                    <p>总价值<span>￥<em class="price">{{item.price*item.count}}</em></span></p>
                    <p>使用积分<span>0</span></p>
                </div>
            </section>
            <section class="daijinquan flex sb"><span>代金券</span><em>不使用代金券</em></section>
            <section class="dis20"></section>
        </section>


        <!--计算-->
        <section class="count">
            <p>总计 <span>￥530.00( 8000积分 )</span> =商品金额￥596.00</p>
            <p>- 已付定金￥66.00</p>
        </section>
        <section class="dis232"></section>
        <section class="last">
            <!--总价格-->
            <section class="totalprice">
                <div class="flex sb">
                    <!--<span class="allchoose"></span>-->
                    <input type="checkbox" id="checkbox3"><label for="checkbox3" id="all" @click="checkAll"></label>
                    <span>总计 : ￥ <em id="totalprice">{{total}}</em>.00</span>
                </div>
                <div class="flex sb">
                    <span>全选</span>
                    <span>使用积分<em>3000</em></span>
                    <span>不含运费</span>
                </div>
            </section>
            <!--结算-->
            <footer class="flex sb">
                <input type="button" value="付定金" id="dingjin" v-if="!show.a">
                <input type="button" value="删除" id="shanchu" style="margin: 0 auto" v-if="show.a" @click.stop="deleteGoods">
                <input type="button" value="结算" id="jiesuan" v-if="!show.a" @click.stop="finalpay">
            </footer>

            <!--提示框-->
          <section class="alertbox" v-if="alertmodal">{{msg}}</section>

        </section>
    </form>
	</div>

</template>

<script>
	export default{
		props : ['goods','show','deleteModalshow'],
    data(){
      return {
        checkAllFlag:false,
        alertmodal : false,
        msg : ''
      }
    },
		methods:{
			changeshow(){
				this.show.a = !this.show.a;
			},
      select(index){
        this.goods.a[index].isChecked = !this.goods.a[index].isChecked
      },
      add(index){
          this.goods.a[index].count++;
      },
      sub(index){
          this.goods.a[index].count--;
              if(this.goods.a[index].count<1){
                    this.goods.a[index].count=1;
                }
      },
      checkAll(){
          this.checkAllFlag = !this.checkAllFlag;
          var _this = this;
          this.goods.a.forEach(function(item,index){
             if(!_this.checkAllFlag){
                 item.isChecked = false;
             }else{
                 item.isChecked = true;
             }
         })
      },
      deleteGoods(){
          var index = _.findIndex(this.goods.a,function(item){
              return item.isChecked == true;
          });
          if (index == -1) {
              this.alertmodal = true;
              this.msg = '请选择需要删除的商品';
              var _this = this;
              setTimeout(function(){
                  _this.alertmodal = false;
              },1000)
          } else {
             this.deleteModalshow.a = !this.deleteModalshow.a;
          }
      },
      finalpay(){
          var index = _.findIndex(this.goods.a,function(item){
              return item.isChecked == true;
          });
          if (index == -1) {
              this.alertmodal = true;
              this.msg = '请选择需要购买的商品';
              var _this = this;
              setTimeout(function(){
                  _this.alertmodal = false;
              },1000)
          } else {
              alert('成功');
          }
      }
	  },
    computed : {
            //计算总价格
            total(){
                var sum = 0;
                this.filterGoods.forEach(function(item){
                    sum += item.price * item.count;
                });
                return sum;
            },
            filterGoods(){
                return this.goods.a.filter(function(item){
                    return item.isChecked;
                });
            }
        },
	}
</script>

<style lang=less scoped>
@ff1:"Microsoft Yahei Light";
@ff2:"Microsoft Yahei";
@color1:#a1a1a1;
@color2:#e1e1e1;
@color3:#e34b28;
@color4:#4c4c4c;
#goods{
  height: 100%;
  position: relative;
  background:#ffffff;
	header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: .8rem;
      background: #ffffff;
      border-bottom: 1px solid #e1e1e1;
      padding: 0 .5rem;
      span:nth-of-type(1){
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border-top: 1px solid #a1a1a1;
        border-left: 1px solid #a1a1a1;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      span:nth-of-type(2){
        font-size: .32rem;
      }
      span:nth-of-type(3){
        font-size: .26rem;
        color: #a1a1a1;
      }
    }
  form{
      position: relative;
      .book-item2{
        margin: .3rem  .3rem  0 .2rem;
        height: 2.5rem;
        background: #ffffff;
        border-bottom: 1px solid @color2;
        input[type=checkbox]{
          display: none;
        }
        label {
          display: inline-block;
          /*-webkit-transition: background 0.5s linear;*/
          width: .5rem;
          height: .5rem;
          border-radius: .2rem;
          background: url("./images/no.png") no-repeat;
          background-color: transparent;
          background-size: .4rem auto;
          margin-right: .3rem;
          margin-top: .7rem;
          position: relative;
        }
        input[type='checkbox']:checked+label {
          background: url(./images/yes.png) no-repeat;
          background-size: .4rem auto;
          background-position: 0 0;
        }
        img{
          margin-right: .4rem;
          width: 1.8rem;
          height: 1.8rem;
        }
        div{
          font-family: @ff1;
          .btn-component{
            width: 2.47rem;
            height: .64rem;
            border: 1px solid #a1a1a1;
            border-radius: 5px;
            margin-bottom: .1rem;
            a{
              float: left;
              width: .8rem;
              line-height: .6rem;
              color: #000;
              font-size: .29rem;
              background: transparent;
              display: inline-block;
              text-align: center;
            }
            input{
              float: left;
              width: .81rem;
              line-height: .6rem;
              text-align: center;
              font-size: .36rem;
              color: red;
              border-left:1px solid #a1a1a1;
              border-right:1px solid #a1a1a1;
            }
          }
          h3{
            display: block;
            font-size: .32rem;
            height: .32rem;
            line-height: .32rem;
            color: #010101;
            margin-bottom: .2rem;
          }
          p:nth-of-type(1){
            height: .3rem;
            line-height: .3rem;
            font-size: .30rem;
            color: #000;
            font-family: @ff1;
            margin-bottom: .2rem;
          }
          p:nth-of-type(2){
            height: .26rem;
            line-height: .26rem;
            font-size: .26rem;
            color: @color1;
            margin-bottom: .14rem;
            span{
              font-family: @ff2;
              color: #e34b28;
              padding-left: .1rem;
            }
          }
          p:nth-of-type(3){
            height: .22rem;
            line-height: .22rem;
            font-size: .22rem;
            color: @color1;
            span{
              font-family: @ff2;
              color: #e34b28;
              padding-left: .1rem;
            }
          }
        }
      }
      .daijinquan{
        background: #ffffff;
        padding: 0 .5rem;
        line-height: .8rem;
        background: url(./images/l-arrow-right.png) no-repeat 7.1rem center;
        background-size: .2rem auto;
        span{
          color: rgb(161, 161, 161);
        }
      }
      .dis20{
        height: .2rem;
        background: #f9f9f9;
      }
      /*计算*/
      .count{
        border-bottom: 1px solid @color2;
        color: @color4;
        /*margin-bottom: 3.59rem;*/
        background: #ffffff;
        padding: .2rem 0 .18rem .3rem;

        p{
          font-family: @ff1;
          font-size: .24rem;
          color: #4c4c4c;
          height: .24rem;
          line-height: .24rem;
          span{
            color: @color3;
          }
        }
        p:nth-of-type(2){
          padding-left: 1.5rem;
          margin-top: .2rem;
        }
      }
      .dis232{
        height: 2.32rem;
        background: #f9f9f9;
      }
      /*定位在最后*/
      .last{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        background: #ffffff;
        /*总价格*/
        .totalprice{
          padding: .16rem .3rem .18rem .3rem;
          background: #ffffff;
          border-bottom: 1px solid @color2;
          div:nth-of-type(1){
            input[type=checkbox]{
              display: none;
            }
            label {
              display: inline-block;
              width: .50rem;
              height: .50rem;
              border-radius: .2rem;
              background: url("./images/no.png") no-repeat;
              background-size: .4rem auto;
              position: relative;
            }
            input[type='checkbox']:checked+label {
              background: url(./images/yes.png) no-repeat 0 0;
              background-size: .4rem auto;
            }
            span:nth-of-type(1){
              font-size: .32rem;
              font-family: @ff2;
              color: @color3;
            }
          }
          div:nth-of-type(2){
            color: @color4;
            font-size: .17rem;
            font-family: @ff1;
            span:nth-of-type(1){
              margin-left: .03rem;
            }
            span:nth-of-type(2){
              font-size: .22rem;
              color: @color1;
              margin-left: 2.7rem;
              em{
                font-size: .22rem;
                color: @color3;
                font-family: @ff2;
                margin-left: .2rem;
              }
            }
            span:nth-of-type(3){
              font-size: .22rem;
              color: @color1;
              font-family: @ff1;
            }
          }
        }
        footer{
          padding: .15rem .3rem .15rem .3rem;
          input{
            width: 1.5rem;
            height: .68rem;
            line-height: .68rem;
            border-radius: 8px;
            color: #ffffff;
            font-size: .3rem;
            text-align: center;
          }
          #dingjin{
            background: @color3;
          }
          #shanchu{
            background: #d9d9d9;
          }
          #jiesuan{
            background: #ed7097;
          }
        }
      }
    }
  .alertbox{
    position: fixed;
    left: 50%;
    bottom: 1.8rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 3rem;
    height: .5rem;
    line-height: .5rem;
    background: rgba(0,0,0,.5);
    color: #ffffff;
    text-align: center;
    font-size: .26rem;
  }
}
</style>