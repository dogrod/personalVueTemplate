<template>
  <div class="hello">
    <img src="../../assets/images/logo.png">
    <h1>{{ message }}</h1>
    <h1>{{ concatString(message) }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
/* @flow */

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    message() {
      return this.$store.state.demo.msg
    },
  },
  methods: {
    /**
    * 注释规范
    * @param {String} value 输入的参数
    * @return {String} 返回的值
    */
    concatString(value: String) {
      return (`${value.toString()}哈哈哈`)
    }
  }
}
</script>

<style lang="stylus">
// Add scoped attribute to limit CSS to this component only
$color = #a3a4a5

h1, h2
  font-weight normal
  color $color

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

</style>
