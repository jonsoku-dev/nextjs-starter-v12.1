import { Environment, Network, RecordSource, Store } from 'relay-runtime'

export function createServerNetwork() {
  return Network.create(async (params, variables) => {
    const response = await fetch('https://api.spacex.land/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
    })

    return await response.json()
  })
}

export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  })
}
