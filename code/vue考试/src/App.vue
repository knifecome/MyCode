<template>
  <div id="app">
    <exam-enter v-if="isEnterShow.a"></exam-enter>
    <exam-header :exercises='exercises' :page="page"></exam-header>
    <exam-content :exercises='exercises' :page="page" :totalNum="totalNum"></exam-content>
    <exam-footer :isSubmitModalShow="isSubmitModalShow" v-if="isFooterShow.a"></exam-footer>
    <exam-submitModal v-if="isSubmitModalShow.a" :isSubmitModalShow="isSubmitModalShow" :isScoreShow="isScoreShow" :isFooterShow="isFooterShow"></exam-submitModal>
    <exam-score v-if="isScoreShow.a" :totalNum="totalNum"></exam-score>
  </div>
</template>

<script>
import Enter from './components/Enter/Enter'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import SubmitModal from './components/SubmitModal/SubmitModal'
import Score from './components/Score/Score'
import data from "../data.json"
export default {
  name: 'app',
  data(){
    return{
      exercises:[],
      page:{
          a:''
      },
      isEnterShow:{
          a:false
      },
      isFooterShow:{
          a:true
      },
      isSubmitModalShow:{
          a:false
      },
      isScoreShow:{
          a:false
      },
      totalNum:{
          a:0
      }
    }
  },
  components:{
    'exam-header':Header,
    'exam-content':Content,
    'exam-footer':Footer,
    'exam-submitModal':SubmitModal,
    'exam-score':Score,
    'exam-enter':Enter
  },
  created(){
    this.exercises = data;
  }
}
</script>

<style>
#app {

}
</style>
