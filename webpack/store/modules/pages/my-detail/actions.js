import types from './mutation-types'

export default {
  resetState ({ commit }) {
    commit(types.resetState)
  },
  loadDetail ({ dispatch }, { name, email }) {
    dispatch('updateName', name)
    dispatch('updateEmail', email)
  },
  updateName ({ commit }, name) {
    commit(types.updateName, name)
  },
  updateEmail ({ commit }, email) {
    commit(types.updateEmail, email)
  }
}
