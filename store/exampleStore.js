

export const state = () => ({
  counter: 0,
  example: 'static',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  getExampleData(state, data) {
    state.example = data
  },
}

export const actions = {
  increment({ commit }) {
    commit('increment')
  },

  getExampleData() {

  },
}
