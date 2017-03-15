export default [
  'updateAccount',
  'resetState'
].reduce((acc, value) => {
  acc[value] = value
  return acc
}, {})
