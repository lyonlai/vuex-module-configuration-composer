import types from './mutation-types'

export default {
  resetState ({ commit }) {
    commit(types.resetState)
  },
  updateBalance({ state, commit }, amount) {
    const isOverWithdraw = (state.balance + amount) < 0

    commit(types.clearError)

    if (isOverWithdraw) {
      return commit(types.updateError, 'over withdraw your account')
    }

    return commit(types.updateBalance, amount)
  }
}
