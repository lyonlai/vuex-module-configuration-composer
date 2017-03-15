export default [
  'updateBalance',
  'updateError',
  'clearError',
  'resetState'
].reduce((acc, value) => {
  acc[value] = value
  return acc
}, {})
