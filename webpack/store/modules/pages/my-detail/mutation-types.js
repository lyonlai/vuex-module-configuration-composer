export default [
  'updateName',
  'updateEmail',
  'resetState'
].reduce((acc, value) => {
  acc[value] = value
  return acc
}, {})
