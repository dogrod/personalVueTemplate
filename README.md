# Personal Vue Template Build By [dogrod](https://github.com/dogrod)
> Vue.js 2 family bucket used Project Template.

## Use flow to check type for .vue file

1. Comment out your Template / Style part surround with ``` /* */ ```
2. Comment out your Script open / close Tag line with ``` // ```
3. Use flow Syntax to declare variable type
4. Run ``` npm run flow ``` command to check type
5. You'll see ``` Found 0 errors ``` ( Impossible!!! LOL )

## TO-DO

- [ ] EsLint Rules Optimization ( Globally )
- [x] Flow Support ( Globally )
- [ ] Separate Stylus Support from master branch ( To feature branch )
- [ ] Jade / Pug Support ( With feature branch )

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
