export default {
  hasMoney (state) {
    return state.balance > 0
  },
  hasError (state) {
    return !!state.error
  }
}
