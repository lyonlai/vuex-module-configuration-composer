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

let AccountComponent

test.before(() => {
  AccountComponent = Vue.extend({
    computed: {
      ...mapState('pages/account', [
        'account'
      ]),
      ...mapGetters('pages/account', [
        'isCreditAccount',
        'isDebitAccount'
      ])
    },
    methods: {
      ...mapActions('pages/account', [
        'updateAccount',
        'resetState'
      ])
    }
  })
})


test('Account module, update account to debit will update state & getters', t => {
  let accountInstant

  accountInstant = new AccountComponent({
    store: createStore()
  })

  accountInstant.resetState()

  t.is(accountInstant.account, '', 'should have initial account as empty')

  t.is(accountInstant.isDebitAccount, false)

  t.is(accountInstant.isCreditAccount, false)

  accountInstant.updateAccount('debit')

  t.is(accountInstant.account, 'debit')

  t.is(accountInstant.isDebitAccount, true)

  t.is(accountInstant.isCreditAccount, false)

  accountInstant.$destroy()
})

test('Account module, update account to credit will update state & getters', t => {
  let accountInstant

  accountInstant = new AccountComponent({
    store: createStore()
  })

  accountInstant.resetState()

  t.is(accountInstant.account, '', 'should have initial account as empty')

  t.is(accountInstant.isDebitAccount, false)

  t.is(accountInstant.isCreditAccount, false)

  accountInstant.updateAccount('credit')

  t.is(accountInstant.account, 'credit')

  t.is(accountInstant.isDebitAccount, false)

  t.is(accountInstant.isCreditAccount, true)

  accountInstant.$destroy()
})
