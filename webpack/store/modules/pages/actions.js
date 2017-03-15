import types from './mutation-types'

export default {
  resetState ({ commit }) {
    commit(types.resetState)
  },
  updatePage ({ commit }, page) {
    commit(types.updatePage, page)
  }
}
