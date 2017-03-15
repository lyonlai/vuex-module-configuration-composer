import test from 'ava';
import {
  default as Vuex,
  mapActions,
  mapGetters,
  mapState
} from 'vuex';
import Vue from 'vue';
import { createStore } from '../../helpers/store'
require('../../../webpack/store.js');

Vue.use(Vuex)

let BalanceComponent

test.before(() => {
  BalanceComponent = Vue.extend({
    computed: {
      ...mapState('pages/account/balance', [
        'balance',
        'error'
      ]),
      ...mapGetters('pages/account/balance', [
        'hasMoney',
        'hasError'
      ])
    },
    methods: {
      ...mapActions('pages/account/balance', [
        'updateBalance',
        'resetState'
      ])
    }
  })
})


test('Account module, update account to debit will update state & getters', t => {
  let balanceInstance

  balanceInstance = new BalanceComponent({
    store: createStore()
  })

  balanceInstance.resetState()

  t.is(balanceInstance.balance, 0)

  t.is(balanceInstance.error, null)

  t.is(balanceInstance.hasError, false)

  t.is(balanceInstance.hasMoney, false)

  balanceInstance.updateBalance(10)

  t.is(balanceInstance.balance, 10)

  t.is(balanceInstance.error, null)

  t.is(balanceInstance.hasError, false)

  t.is(balanceInstance.hasMoney, true)

  balanceInstance.$destroy()
})

test('Account module, update account to credit will update state & getters', t => {
  let balanceInstance

  balanceInstance = new BalanceComponent({
    store: createStore()
  })

  balanceInstance.resetState()

  t.is(balanceInstance.balance, 0)

  t.is(balanceInstance.error, null)

  t.is(balanceInstance.hasError, false)

  t.is(balanceInstance.hasMoney, false)

  balanceInstance.updateBalance(-10)

  t.is(balanceInstance.balance, 0)

  t.is(balanceInstance.error, 'over withdraw your account')

  t.is(balanceInstance.hasError, true)

  t.is(balanceInstance.hasMoney, false)

  balanceInstance.$destroy()
})
