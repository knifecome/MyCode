<template>
  <div id="m-tree">
    <div class="tree-menu-comm tree-menu">
      <ul>
        <li v-for="item of data">
          <div class="tree-title" style="padding-left: 16px">
            <span><strong>{{item.title}}</strong><i class="ico"></i></span>
          </div>
          <ul>
            <li v-for="item2 of item.children">
              <div class="tree-title" style="padding-left: 32px">
                <span><strong>{{item2.title}}</strong><i class="ico"></i></span>
              </div>
              <ul>
                <li v-for="item3 of item2.children">
                  <div class="tree-title" style="padding-left: 48px">
                    <span><strong>{{item3.title}}</strong><i class="ico"></i></span>
                  </div>
                  <ul>
                    <li v-for="item4 of item3.children">
                      <div class="tree-title" style="padding-left: 64px">
                        <span><strong>{{item4.title}}</strong><i class="ico"></i></span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tree',
    props:{
        data:{
            type:Array,
            default:[]
        }
    },
    components:{
      
    }
  }
</script>

<style>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .tree-menu {
    width: 360px;
    height: 100%;
    padding: 0px 12px;
    border-right: 1px solid #e6e9f0;
  }

  .tree-menu-comm span {
    display: block;
    font-size: 12px;
    position: relative;
  }

  .tree-contro .ico {
    background-position: 3px -92px;
  }

  .tree-title .ico {
    position: absolute;
    left: -13px;
    top: 0;
    width: 15px;
    height: 26px;
    background: url('../imgs/folder-tree.png') no-repeat 4px -43px;
    opacity: 0.8;
  }

  .tree-menu-comm span strong {
    display: block;
    width: 82%;
    position: relative;
    line-height: 22px;
    padding: 2px 0;
    padding-left: 5px;
    color: #161719;
    font-weight: normal;
  }

  .tree-nav {
    background: #e7f2fe;
    border: 1px solid #bfdaf4;
    padding-left: 14px;
    margin-left: 0px;
  }

  .tree-title {
    border: 1px solid #fff;
    margin-top: 1px;
  }
  /*无箭头*/

  .tree-contro-none .ico {
    background-position: -999px -99px;
  }
  /*箭头朝下*/

  .tree-contro .ico {
    background-position: 3px -92px;
  }
</style>
