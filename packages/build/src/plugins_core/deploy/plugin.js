const {
  env: { NETLIFY_BUILD_EVENTS_ORDER },
} = require('process')

const { startBuildbotClient, closeBuildbotClient, deploySiteWithBuildbotClient } = require('./buildbot_client')

const onBuild = async function({ constants: { BUILDBOT_SERVER_SOCKET } }) {
  const client = await startBuildbotClient(BUILDBOT_SERVER_SOCKET)
  await deploySiteWithBuildbotClient(client)
  await closeBuildbotClient(client)
}

module.exports = NETLIFY_BUILD_EVENTS_ORDER === '1' ? { onBuild } : { onPostBuild: onBuild }
