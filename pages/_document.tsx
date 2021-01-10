import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '~/lib/styletron'
import { Sheet } from 'styletron-engine-atomic'

interface Props {
  stylesheets: Sheet[]
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage((App) => (props) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ))
    const stylesheets = 'getStylesheets' in styletron
      ? styletron.getStylesheets()
      : []
    return { ...page, stylesheets }
  }

  render() {
    const { stylesheets } = this.props
    return (
      <Html>
        <Head>
          {stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument