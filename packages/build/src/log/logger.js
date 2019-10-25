const { inspect } = require('util')

const { redactString } = require('./redact')

// This should be used instead of `console.log()` in order to:
//  - serialize objects
//  - redact secrets
const log = function(...args) {
  const state = { prefixSet: false }
  const string = args.map(arg => serializeArg(arg, state)).join(' ')
  console.log(string)
}

const serializeArg = function(arg, state) {
  const argA = typeof arg === 'string' ? arg : inspect(arg, { depth: Infinity })
  const argB = redactString(argA)
  return argB
}

module.exports = { log }