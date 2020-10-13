import { getExample } from '~/clients/exampleClient'

export const state = () => ({
  counter: 0,
  example: 'static',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  getExampleData(state, payload) {
    state.example = payload
  },
}

export const actions = {
  increment({ commit }) {
    commit('increment')
  },

  async getExampleData({ commit }) {
    const { data } = await getExample()
    commit('getExampleData', data)
  },
}
