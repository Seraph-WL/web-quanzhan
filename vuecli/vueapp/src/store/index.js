import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modalA = {
  state: {
    str:"hello world",
    num:0
  },
  // mutations:修改状态，传值
  mutations: {
    add(state,i){
      state.num+=i;
    }
  },
  // getters:计算过滤操作
  getters:{
    sum(state){
      return state.num+100
    }
  },
  // actions:异步修改状态
  actions: {
    addAction({commit}){
      commit("add",1)
    }
  }
}

const modalB = {
  state:{
    num:123
  }
}

export default new Vuex.Store({
  modules: {
    a:modalA,
    b:modalB
  }
})
