import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleFront = {
  state    : {
    count: 0,
    todos: [
      {id: 1, text: '111', done: true},
      {id: 2, text: '222', done: false},
      {id: 3, text: '333', done: true}
    ]
  },
  getters  : {
    donetodos(state){
      return state.todos.filter(todo=>todo.done);
    },
    donetodosCount(state, getters){
      return getters.donetodos.length;
    }
  },
  mutations: {
    increment(state){
      state.count++;
    },
    decrement(state){
      state.count--;
    }
  },
  actions  : {
    increment ({commit}) {
      commit('increment')
    }
  }

}

const moduleBack = {
  state    : {},
  getters  : {},
  mutations: {},
  actions  : {}
}

export default new Vuex.Store({
  modules: {
    front: moduleFront,
    back : moduleBack
  }
})

