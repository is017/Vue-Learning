// 创建vuex中的store
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

// 响应组件中的动作
const actions = {
  up(context, value) {
    context.commit('UP', value)
  },
  down(context, value) {
    context.commit('DOWN', value)
  },
  upOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('UP', value)
    }
  }

}

// 操作数据(state)
const mutations = {
  UP(state, value) {
    state.sum += value
  },
  DOWN(state, value) {
    state.sum -= value
  },

}

// 存储数据
const state = {
  sum: 0,
  subject: '前端',
  framework: 'Vue'
}

// 对state的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

// 创建并导出store
export default new Vuex.Store({
  actions, mutations, state, getters
})
