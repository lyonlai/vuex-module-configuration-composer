export default {
  state: {
    account: ''
  },
  getters: {
    hasSelectedAccount(state) {
      return !state.account;
    },
    isDebitAccount(state) {
      return state.account === 'debit';
    },
    isCreditAccount(state) {
      return state.account === 'credit';
    }
  },
  actions: {
    selectAccount({commit}, account) {
      commit('selectAccount', account);
    },
    selectDebitAccount({dispatch}) {
      dispatch('selectAccount', 'debit');
    },
    selectCreditAccount({dispatch}) {
      dispatch('selectAccount', 'credit');
    }
  },
  mutations: {
    selectAccount(state, account) {
      state.account = account;
    }
  }
};
