// src/pages/_document.tsx
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { createRelayDocument, RelayDocument } from 'relay-nextjs/document'

interface DocumentProps {
  relayDocument: RelayDocument
}

class ExampleDocument extends NextDocument<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const relayDocument = createRelayDocument()

    const view = ctx.renderPage
    ctx.renderPage = () =>
      view({
        enhanceApp: (App) => relayDocument.enhance(App),
      })

    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      relayDocument,
    }
  }

  render() {
    const { relayDocument } = this.props

    return (
      <Html>
        <Head>
          <relayDocument.Script />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default ExampleDocument
