<template lang="jade">
  div
    h4 Single Value
    div {{ single$ }}

    h4 Array
    ul
      li(v-for="item of arr0$") {{ item }}
    ul
      li(v-for="item of arr1$") {{ item }}

    h4 Interval
    div {{ interval$ }}

    h4 High-order
    div {{ high$ }}
</template>

<script>
// https://github.com/xufei/blog/issues/39
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/of'

import 'rxjs/add/observable/from'
import 'rxjs/add/operator/toArray'

import 'rxjs/add/observable/interval'

import 'rxjs/add/observable/range'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeAll'

const single$ = Observable.of(Math.PI)
const arr0$ = Observable.of([1, 1, 2, 3, 5, 8, 13])
const arr1$ = Observable.from([1, 1, 2, 3, 5, 8, 13]).toArray()
const interval$ = Observable.interval(1000)

const high$ = Observable.range(1, 5)
  .map(item => Observable.interval(item * 1000))
  .mergeAll()

export default {
  name: 'rx-simple',
  subscriptions: {
    single$,
    arr0$,
    arr1$,
    interval$,
    high$
  }
}
</script>

<style lang="stylus">
</style>
