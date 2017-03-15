export default [
  'updatePage',
  'resetState',
].reduce((acc, value) => {
  acc[value] = value
  return acc
}, {})
