// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Rx from 'rxjs/Rx'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4
import { Subject } from 'rxjs/Subject' // required for domStreams option
import axios from 'axios'
import VueRx from 'vue-rx'
import lodash from 'lodash'

import App from './app'
import router from './router'
import store from './store'

// RxJS config
// Vue.use(VueRx, Rx)
// or
Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject
})

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
