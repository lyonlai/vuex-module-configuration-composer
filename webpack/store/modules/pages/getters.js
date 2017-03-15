export default {
  hasSelectedPage (state) {
    return !!state.page
  },
  isAccountPageSelected (state) {
    return state.page === 'account'
  },
  isMyDetailPageSelected (state) {
    return state.page === 'my-detail'
  }
}
