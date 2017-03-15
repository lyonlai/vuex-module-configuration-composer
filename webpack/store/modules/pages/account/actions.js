import types from './mutation-types'

export default {
  resetState ({ commit }) {
    commit(types.resetState)
  },
  updateAccount ({ commit }, account) {
    commit(types.updateAccount, account)
  }
}
