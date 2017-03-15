export default {
  splittedName (state) {
    return state.name.split(' ')
  },
  firstName (state, getters) {
    const [firstName] = getters.splittedName
    return firstName
  },
  lastName (state, getters) {
    const [firstName, lastName] = getters.splittedName
    return lastName
  }
}
