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

let MyDetailsComponent

const name = 'Joe Jackson'
const email = 'joe@blah.com'

test.before(() => {
  MyDetailsComponent = Vue.extend({
    computed: {
      ...mapState('pages/my-detail', [
        'name',
        'email'
      ]),
      ...mapGetters('pages/my-detail', [
        'firstName',
        'lastName'
      ])
    },
    methods: {
      ...mapActions('pages/my-detail', [
        'loadDetail',
        'resetState'
      ])
    }
  })
})

test('My details module, load detail should update related fields.', t => {
  let mydetailsInstance

  mydetailsInstance = new MyDetailsComponent({
    store: createStore()
  })

  mydetailsInstance.resetState()

  t.is(mydetailsInstance.name, '')

  t.is(mydetailsInstance.email, '')

  t.is(mydetailsInstance.getFirstName, undefined)

  t.is(mydetailsInstance.getLastName, undefined)

  mydetailsInstance.loadDetail({
    name,
    email
  })

  debugger

  t.is(mydetailsInstance.name, name)

  t.is(mydetailsInstance.email, email)

  t.is(mydetailsInstance.firstName, 'Joe')

  t.is(mydetailsInstance.lastName, 'Jackson')

  mydetailsInstance.$destroy()
})
