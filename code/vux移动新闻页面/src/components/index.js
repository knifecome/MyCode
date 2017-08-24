/**
 * @author 周浪 <zhoulanga@zbj.com>
 * @date   2017/6/8
 * @desc   需全局注册的组件
 */

import Vue from 'vue'
import './bs-element-ui'
import bsLayout from '@/components/bs-layout'

import Axios from 'axios'

Vue.prototype.$axios = Axios;

Vue.component('BsLayout', bsLayout);

