import React from 'react'
import { graphql, usePreloadedQuery } from 'react-relay'
import type { RelayProps } from 'relay-nextjs'
import { withRelay } from 'relay-nextjs'

import { getClientEnvironment } from '@/lib/relay_client_environment'
import type { pages_listFilmsQuery } from '@/queries/__generated__/pages_listFilmsQuery.graphql'

const FilmListQuery = graphql`
  query pages_listFilmsQuery($limit: Int = 10) {
    launchesPast(limit: $limit) {
      id
    }
  }
`

function FilmList({
  preloadedQuery,
}: RelayProps<Record<string, unknown>, pages_listFilmsQuery>) {
  const query = usePreloadedQuery(FilmListQuery, preloadedQuery)
  console.log(query.launchesPast)
  return <div></div>
}

export default withRelay(FilmList, FilmListQuery, {
  createClientEnvironment: () => getClientEnvironment()!,
  createServerEnvironment: async () => {
    const { createServerEnvironment } = await import(
      '@/lib/server/relay_server_environment'
    )

    return createServerEnvironment()
  },
})
