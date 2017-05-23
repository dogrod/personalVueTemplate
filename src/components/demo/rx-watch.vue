<template lang="jade">
  div
    h4 Watch
    div
      button(v-on:click="num++") add
      div source: {{ num }}  -> result: {{ num$ }}
</template>

<script>
// https://github.com/xufei/blog/issues/39
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/delay'
export default {
  name: 'rx-watch',
  data() {
    return {
      num: 1
    }
  },
  subscriptions() {
    return {
      num$: this.$watchAsObservable('num')
        .pluck('newValue')
        .startWith(this.num)
        .map(a => a + 1)
        .delay(3000)
    }
  }
}
</script>
