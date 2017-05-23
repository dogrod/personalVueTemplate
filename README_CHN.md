# 个人项目使用的 Vue 项目模版 Edit By [dogrod](https://github.com/dogrod)
> 一个使用了 Vue 全家桶的项目模版。同时支持 flow 静态类型检测（默认），jade / stylus（对应[功能分支](https://github.com/dogrod/personalVueTemplate/tree/feature/jade-stylus)）

## 配置路由（使用了 ensure 对文件进行按需加载）

> 路由配置文件路径: src/Router/index.js

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

## 使用 flow 对 .vue 文件进行静态类型检查

1. 在 script 部分使用 ``` /* @flow */ ``` 或者 ``` // @flow ```
2. 使用 flow 语法声明变量类型
3. 运行 ``` npm run flow ``` 命令进行静态类型检查
4. 如果没有类型错误你会看到 ``` Found 0 errors ``` （可能你也看不到）

## TO-DO

- [ ] EsLint 规则优化 ( 全局 )
- [x] 支持 Flow ( 全局 )
- [ ] Stylus 的支持从 master 分支剥离 ( 剥离至 [feature/jade-stylus 分支](https://github.com/dogrod/personalVueTemplate/tree/feature/jade-stylus) )
- [x] 支持 Jade / Pug ( 详情查看 [feature/jade-stylus 分支](https://github.com/dogrod/personalVueTemplate/tree/feature/jade-stylus) )
- [x] 支持 RxJS ( 详情查看 [feature/jade-stylus-RxJS 分支](https://github.com/dogrod/personalVueTemplate/tree/feature/jade-stylus-rxjs) )

## 构建步骤

``` bash
# 安装依赖
npm install

# 开发服务会以热加载的方式运行在 localhost:8080
npm run dev

# 构建打包项目
npm run build

# 构建打包项目并查看分析报告
npm run build --report

# 运行单元测试
npm run unit

# 运行 e2e 测试
npm run e2e

# 运行所有测试
npm test
```
---
> This template is created by Vue-cli

> For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
