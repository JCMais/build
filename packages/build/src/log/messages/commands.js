const { getCommandDescription } = require('../description')
const { getLogHeaderFunc } = require('../header_func')
const { log, logMessage } = require('../logger')
const { THEME } = require('../theme')

const logCommand = function({ logs, event, buildCommandOrigin, package, index, error }) {
  const description = getCommandDescription({ event, buildCommandOrigin, package })
  const logHeaderFunc = getLogHeaderFunc(error)
  logHeaderFunc(logs, `${index + 1}. ${description}`)
  logMessage(logs, '')
}

const logBuildCommandStart = function(logs, buildCommand) {
  log(logs, THEME.highlightWords(`$ ${buildCommand}`))
}

const logCommandSuccess = function(logs) {
  logMessage(logs, '')
}

module.exports = {
  logCommand,
  logBuildCommandStart,
  logCommandSuccess,
}
