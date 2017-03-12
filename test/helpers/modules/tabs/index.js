export default {
  state: {
    tab: ''
  },
  getters: {
    hasSelectedTab(state) {
      return !state.tab;
    }
  },
  actions: {
    updateTab({commit}, tab) {
      commit('updateTab', tab);
    }
  },
  mutations: {
    updateTab(state, payload) {
      state.tab = tab
    }
  }
};
