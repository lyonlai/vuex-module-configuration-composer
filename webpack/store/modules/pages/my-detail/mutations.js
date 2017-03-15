import types from './mutation-types'
import { initialState } from './state'

export default {
  [types.resetState] (state) {
    const initial = initialState()
    Object.keys(state).forEach(key => {
      state[key] = initial[key]
    })
  },
  [types.updateName] (state, name) {
    state.name = name
  },
  [types.updateEmail] (state, email) {
    state.email = email
  }
}
