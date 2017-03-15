export default {
  isCreditAccount (state) {
    return state.account === 'credit'
  },
  isDebitAccount (state) {
    return state.account === 'debit'
  }
}
