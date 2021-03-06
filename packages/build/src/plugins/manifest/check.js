const { addErrorInfo } = require('../../error/info')
const { serializeObject } = require('../../log/serialize')
const { THEME } = require('../../log/theme')

// Check that plugin inputs match the validation specified in "manifest.yml"
// Also assign default values
const checkInputs = function({
  inputs,
  manifest: { inputs: rules = [] },
  package,
  pluginPackageJson,
  loadedFrom,
  origin,
}) {
  try {
    const inputsA = addDefaults(inputs, rules)
    checkRequiredInputs({ inputs: inputsA, rules, package, pluginPackageJson, loadedFrom, origin })
    checkUnknownInputs({ inputs: inputsA, rules, package, pluginPackageJson, loadedFrom, origin })
    return inputsA
  } catch (error) {
    error.message = `${error.message}

${THEME.errorSubHeader('Plugin inputs')}
${serializeObject(inputs)}`
    throw error
  }
}

// Add "inputs[*].default"
const addDefaults = function(inputs, rules) {
  const defaults = rules.filter(hasDefault).map(getDefault)
  return Object.assign({}, ...defaults, inputs)
}

const hasDefault = function(rule) {
  return rule.default !== undefined
}

const getDefault = function({ name, default: defaultValue }) {
  return { [name]: defaultValue }
}

// Check "inputs[*].required"
const checkRequiredInputs = function({ inputs, rules, package, pluginPackageJson, loadedFrom, origin }) {
  const missingInputs = rules.filter(rule => isMissingRequired(inputs, rule))
  if (missingInputs.length === 0) {
    return
  }

  const names = missingInputs.map(getName)
  const error = new Error(`Required inputs for plugin "${package}": ${names.join(', ')}`)
  addInputError({ error, name: names[0], package, pluginPackageJson, loadedFrom, origin })
  throw error
}

const isMissingRequired = function(inputs, { name, required }) {
  return required && inputs[name] === undefined
}

const getName = function({ name }) {
  return name
}

// Check each "inputs[*].*" property for a specific input
const checkUnknownInputs = function({ inputs, rules, package, pluginPackageJson, loadedFrom, origin }) {
  const knownInputs = rules.map(getName)
  const unknownInputs = Object.keys(inputs).filter(name => !knownInputs.includes(name))
  if (unknownInputs.length === 0) {
    return
  }

  const unknownInputsMessage = getUnknownInputsMessage({ package, knownInputs, unknownInputs })
  const error = new Error(`${unknownInputsMessage}
Check your plugin configuration to be sure that:
  - the input name is spelled correctly
  - the input is included in the plugin's available configuration options
  - the plugin's input requirements have not changed`)
  const [name] = unknownInputs
  addInputError({ error, name, package, pluginPackageJson, loadedFrom, origin })
  throw error
}

const getUnknownInputsMessage = function({ package, knownInputs, unknownInputs }) {
  const unknownInputsStr = unknownInputs.map(quoteWord).join(', ')

  if (knownInputs.length === 0) {
    return `Plugin "${package}" does not accept any inputs but you specified: ${unknownInputsStr}`
  }

  const knownInputsStr = knownInputs.map(quoteWord).join(', ')
  return `Unknown inputs for plugin "${package}": ${unknownInputsStr}
Plugin inputs should be one of: ${knownInputsStr}`
}

const quoteWord = function(word) {
  return `"${word}"`
}

// Add error information
const addInputError = function({ error, name, package, pluginPackageJson, loadedFrom, origin }) {
  addErrorInfo(error, {
    type: 'pluginInput',
    plugin: { package, pluginPackageJson },
    location: { event: 'load', package, input: name, loadedFrom, origin },
  })
}

module.exports = { checkInputs }
