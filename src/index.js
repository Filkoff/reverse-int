module.exports = function reverse (n) {
  const s = n.toString().split('').reverse().join('')
    return parseInt(s)
}
