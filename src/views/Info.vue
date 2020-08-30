<template>
<div>hello info conpoment</div>
  <button type="button" @click="add()">添加</button>
</template>

<script>
import store from '@/store'
export default {
  name: 'Info',
  store,
  data () {
    return {
      msg: 'test'
    }
  },
  mounted () {
    window.vue = this
  },
  methods: {
    add () {
      console.log('add event frm info!')
      store.commit('increase')
    },
    outPut () {
      console.log('outPut test')
    }
  }
}
</script>

<style scoped>
</style>
