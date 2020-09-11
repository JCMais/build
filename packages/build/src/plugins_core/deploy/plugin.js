const { startBuildbotClient, closeBuildbotClient, deploySiteWithBuildbotClient } = require('./buildbot_client')

const onPostBuild = async function({ constants: { BUILDBOT_SERVER_SOCKET } }) {
  const client = await startBuildbotClient(BUILDBOT_SERVER_SOCKET)
  await deploySiteWithBuildbotClient(client)
  await closeBuildbotClient(client)
}

module.exports = { onPostBuild }
