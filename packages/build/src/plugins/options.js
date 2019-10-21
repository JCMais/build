const DEFAULT_PLUGINS_DIR = __dirname

// Load plugin options (specified by user in `config.plugins`)
const getPluginsOptions = function({ config: { plugins: pluginsOptions } }) {
  return [...DEFAULT_PLUGINS, ...pluginsOptions].map(normalizePluginOptions).filter(isPluginEnabled)
}

const DEFAULT_PLUGINS = [{ id: '@netlify/functions', type: `${DEFAULT_PLUGINS_DIR}/functions/index.js`, core: true }]

const normalizePluginOptions = function(pluginOptions) {
  const { type, id: pluginId, core, enabled, config: pluginConfig } = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...pluginOptions
  }
  return { pluginId, type, core, enabled, pluginConfig }
}

const DEFAULT_PLUGIN_OPTIONS = { enabled: true, core: false, config: {} }

const isPluginEnabled = function({ enabled }) {
  return String(enabled) !== 'false'
}

module.exports = { getPluginsOptions }
