// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import lodash from 'lodash'

import App from './app'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// clone axios to Vue.$http
Vue.prototype.$http = axios
Vue.prototype._ = lodash

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
