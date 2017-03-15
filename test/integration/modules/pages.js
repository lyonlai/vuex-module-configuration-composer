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

let pagesComponent

test.before(() => {
  pagesComponent = Vue.extend({
    computed: {
      ...mapState('pages', [
        'page'
      ]),
      ...mapGetters('pages', [
        'hasSelectedPage',
        'isAccountPageSelected',
        'isMyDetailPageSelected'
      ])
    },
    methods: {
      ...mapActions('pages', [
        'updatePage'
      ])
    }
  })
})

test('Pages module, select page to account will update state & getters', t => {
  let pagesInstant

  pagesInstant = new pagesComponent({
    store: createStore()
  })

  t.is(pagesInstant.page, '', 'should have initial page as empty')

  t.is(pagesInstant.hasSelectedPage, false)

  t.is(pagesInstant.isAccountPageSelected, false)

  t.is(pagesInstant.isMyDetailPageSelected, false)

  pagesInstant.updatePage('account')

  t.is(pagesInstant.page, 'account', 'should have initial page as empty')

  t.is(pagesInstant.hasSelectedPage, true)

  t.is(pagesInstant.isAccountPageSelected, true)

  t.is(pagesInstant.isMyDetailPageSelected, false)

  pagesInstant.$destroy()
})
