// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/components'

import VueJsonp from 'vue-jsonp'
import VueScroller from 'vue-scroller'
import  { ToastPlugin } from 'vux'

Vue.use(VueJsonp);
Vue.use(VueScroller);
Vue.use(ToastPlugin)
//element ui
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
//Vue.use(ElementUI);

//默认样式
//import '../static/css/reset.css'

//外框组件
//import './components/bs-layout/index.vue'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
