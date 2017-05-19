<template lang="jade">
  div
    layout
      router-view
</template>

<script>
  import layout from './views/layout/layout.vue'
  export default {
    name: 'app',
    components: {
      layout
    }
  }
</script>
