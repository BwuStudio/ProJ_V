
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Pages from './router/index'
import store from './store/store'
import Element from 'element-ui'
import Globel_Comp from '@/components/common/globel/globel'

import '../src/less/element/theme/index.css'
import './less/index.less'

Vue.config.productionTip = false

// 加载 Element UI
Vue.use(Element)

// 加载全局组件
Vue.use(Globel_Comp)

// 加载页面组件
Vue.use(Pages)

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
