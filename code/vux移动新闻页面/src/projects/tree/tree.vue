<template>
  <div id="tree">
      <m-tree :data="treeList"></m-tree>
  </div>
</template>

<script>
  var data = [{
    title: "目录",
    children: [
    {
      title: "我的音乐",
      children: [{
        title: "周杰伦",
        children: [{
          title: "发如雪"
        }]
      }, {title: "王杰", children: [{
          title: "一场游戏一场梦"
        }]
      }]
    },
    {
      title: "我的照片"
    }
    ]
  }];
import mTree from './inc/m-tree.vue'
export default {
  name: 'tree',
  data(){
      return{
          treeList:data
      }
  },
  components:{
      mTree
  }
}
</script>


