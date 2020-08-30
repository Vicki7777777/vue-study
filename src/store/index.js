import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increase () {
      this.state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
