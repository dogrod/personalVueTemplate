# Personal Vue Template Edit By [dogrod](https://github.com/dogrod)
> Vue.js 2 family bucket used Project Template.

> Chinese Version [中文说明](https://github.com/dogrod/personalVueTemplate/blob/master/README_CHN.md)

## Config Router

> config file path: src/Router/index.js

```
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

```

## Use flow to check type for .vue file

1. Call flow at the start of your script part such as ``` /* @flow */ ``` or ``` // @flow ```
2. Use flow Syntax to declare variable type
3. Run ``` npm run flow ``` command to check type
4. You'll see ``` Found 0 errors ``` ( Impossible!!! LOL )

> Use axios via ``` this.$http ``` or ``` Vue.$http ```

> Use lodash via ``` this._ ``` or ``` Vue._ ```

## TO-DO

- [ ] EsLint Rules Optimization ( Globally )
- [x] Flow Support ( Globally )
- [ ] Separate Stylus Support from master branch ( On [feature/jade-stylus branch](https://github.com/dogrod/personalVueTemplate/tree/feature/jade-stylus) )
- [x] Jade / Pug Support ( On [feature/jade-stylus branch](https://github.com/dogrod/personalVueTemplate/tree/feature/jade-stylus) )
- [x] RxJS Support ( On [feature/jade-stylus-RxJS branch](https://github.com/dogrod/personalVueTemplate/tree/feature/jade-stylus-rxjs) )

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
---
> This template is created by Vue-cli

> For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
