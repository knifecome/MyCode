<template>
	<div id="deleteModal">
		<section class="modal-wrap3" id="modal-wrap3" v-if="deleteModalshow.a"></section>
        <section class="wrap3" id="wrap3" v-if="deleteModalshow.a">
            <p>提示</p>
            <p>确认删除这条回复?</p>
            <div class="btn"><input type="button" value="确定" id="btn-confirm" @click.stop='removeGoods(goods.a)'><input type="button" value="取消" id="btn-cancel" @click.stop='deleteModalshow.a=false'></div>
        </section>
	</div>
</template>

<script>
	export default{
		props:['goods','deleteModalshow'],
		methods:{
			removeGoods(arr){
				 _.remove(arr, function(item) {
              return item.isChecked;
          });
                 this.goods.a = [];
                 this.goods.a = arr;
            	 this.deleteModalshow.a = false;
			}
		}
	}
</script>

<style lang=less scoped>
@ff1:"Microsoft Yahei Light";
@ff2:"Microsoft Yahei";
@color1:#a1a1a1;
@color2:#e1e1e1;
@color3:#e34b28;
@color4:#4c4c4c;
	.modal-wrap3{
    	position: fixed;
    	left: 0;
    	top: 0;
    	right: 0;
    	bottom: 0;
    	background: rgba(0,0,0,0.3);
  	}
  	.wrap3{
    position: fixed;
    width: 4.59rem;
    border-radius: 10px;
    background:#ffffff;
    left: 50%;
    top:50%;
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
