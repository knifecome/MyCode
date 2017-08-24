<template>
  <div class="vux">
    <view-box>
      <x-header
        slot="header"
        class="header"
        :left-options="{showBack:true,backText:'Back'}"
      >
        <div slot="overwrite-left">直播</div>
        <div>新闻</div>
        <div slot="right">搜索</div>
      </x-header>

      <!--用的别名-->
      <sc
        :lock-y="true"
      ><!--锁定Y方向-->
        <div class="tab">
          <tab>
            <tab-item selected>推荐</tab-item>  <!--selected表示正选中的-->
            <tab-item>要闻</tab-item>
            <tab-item>游戏</tab-item>
            <tab-item>科技</tab-item>
            <tab-item>娱乐</tab-item>
            <tab-item>体育</tab-item>
          </tab>
        </div>
      </sc>

      <scroller
        class="my-scroller"
        :on-refresh="refresh"
        refresh-text="loading"
        :on-infinite="infinite"
        ref="myRef"
      >
        <swiper
          :list="swiperList"
          v-model="swiperIndex"
          :loop="true"
        ></swiper>

        <marquee
          class="my-marquee"
        >
          <marquee-item v-for="(value,key) in marqueeList">{{value.title}}</marquee-item>
        </marquee>

        <panel
          :list="dataList"
        ></panel>
      </scroller>


      <tabbar slot="bottom">
          <tabbar-item>
            <img src="./imgs/1.png" slot="icon">
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item>
            <img src="./imgs/2.png" slot="icon">
            <span slot="label">推荐</span>
          </tabbar-item>
          <tabbar-item>
            <img src="./imgs/3.png" slot="icon">
            <span slot="label">我的</span>
          </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import {
  ViewBox,
  XHeader,
  Tabbar,
  TabbarItem,
  Tab,
  TabItem,
  Scroller as sc,
  Swiper,
  Marquee,
  MarqueeItem,
  Panel
} from 'vux'

var refreshKey = ['A','B01','B02','B03','B04','B05','B06','B07','B08','B09','B010'];
var key = 0;

function getRefreshKey() {
  var keyValue = refreshKey[key];
  key++;
  if(key == (refreshKey.length-1)){
      key = 0;
  }
  return keyValue;
}
export default {
  name: 'vux',
  data () {
    var dataList = [];
   /* for(var i=0;i<10;i++){
        dataList.push({
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        })
    }*/
    return{
      swiperList: [/*{
        url: 'javascript:',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '送你一辆车'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/3.jpg',
        title: '送你一次旅行'
      }*/],
      swiperIndex:0,   //当前轮播图第几张显示
      dataList:[],
      marqueeList:[]
    }
  },
  methods: {
    refresh(){
      this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html',{
          miss:'00',
          refresh:getRefreshKey()
      }).then(data => {
          console.log(data)
        /*刷新新闻列表*/
        this.dataList =  data.list.filter(item => {
          return item.addata === null;
        }).map(item => {
          return{
            src:item.picInfo[0].url,
            title:item.title,
            desc:item.digest,
            url:item.link
          }
        })

        this.$refs.myRef.finishPullToRefresh();

        //this.$vux.toast.show('加载完成')
        this.$vux.toast.text(`当前一共刷新了${this.dataList.length}条数据`,'top')
      })
    },
    infinite(){

    }
  },
  components:{
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    sc,
    Swiper,
    Marquee,
    MarqueeItem,
    Panel
  },
  created(){
      this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data => {
          //console.log(data);

          /*轮播图*/
          this.swiperList =  data.focus.filter(item => {
              return item.addata === null;
          }).map(item => {  //这个map是数组调用的一个方法
              return{
                  url:item.link,
                  img:item.picInfo[0].url,
                  title:item.title
              }
          })

          /*跑马灯数据*/
        this.marqueeList =  data.live.filter(item => {
          return item.addata === null;
        }).map(item => {
          return{
            title:item.title
          }
        })

          /*新闻列表*/
        this.dataList =  data.list.filter(item => {
          return item.addata === null;
        }).map(item => {
          return{
            src:item.picInfo[0].url,
            title:item.title,
            desc:item.digest,
            url:item.link
          }
        })
      })
  }
}
</script>


<style lang="less">
  .vux{
    height: 100%;
    .header{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1;
    }
    .tab{
      width: 600px;  /*tab总宽度设置为600px,有6个子tab-item,则每一个tab-item宽度为100px*/
      margin-top: 46px;
    }
    .my-scroller{
      top: 90px;
    }
    .loading-layer{
      padding-bottom: 90px;
    }
  }
  .my-marquee{
    margin: 10px;
  }
  .weui-media-box__hd,.weui-media-box__hd img{
    width: 102px!important;
    height: 78px!important;
  }
  .weui-media-box__bd{
    height: 78px;
  }

</style>
