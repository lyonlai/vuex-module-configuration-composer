export default {
  state: {
    balance: 0,
    error: null
  },
  getters: {
    hasMoney(state) {
      return state.balance > 0;
    }
  },
  actions: {
    updateBalance({commit, state}, amount) {
      if (state.balance + amount > 0) {
        commit('clearError');
        commit('updateBalance', amount);
      } else {
        commit('updateError', 'insufficient fund');
      }
    }
  },
  mutations: {
    updateBalance(state, amount) {
      state.balance = state.balance + amount;
    },
    updateError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  }
};
