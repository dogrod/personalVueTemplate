import Vue from 'vue'
import Router from 'vue-router'
import App from '@/app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        name: 'Hello',
        component: r => require.ensure([], () => r(require('@/components/hello/hello')), 'hello')
      }, {
        path: 'demo',
        name: 'Demo',
        component: r => require.ensure([], () => r(require('@/components/demo/demo')), 'demo')
      }]
    }
  ]
})
