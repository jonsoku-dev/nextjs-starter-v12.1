import type { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { getInitialPreloadedQuery, getRelayProps } from 'relay-nextjs/app'
import { ThemeProvider } from 'styled-components'

import { getClientEnvironment } from '@/lib/relay_client_environment'
import { defaultTheme } from '@/lib/styles/theme'

const clientEnv = getClientEnvironment()
const initialPreloadedQuery = getInitialPreloadedQuery({
  createClientEnvironment: () => getClientEnvironment()!,
})

function ExampleApp({ Component, pageProps }: AppProps) {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery)
  const env = relayProps.preloadedQuery?.environment ?? clientEnv!

  return (
    <ThemeProvider theme={defaultTheme}>
      <RelayEnvironmentProvider environment={env}>
        <Component {...pageProps} {...relayProps} />
      </RelayEnvironmentProvider>
    </ThemeProvider>
  )
}

export default ExampleApp
