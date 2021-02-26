import Head from 'next/head'
import {Header} from '../../styles/pages/Home'
import SEO from '../components/SEO'

export default function Home(): JSX.Element {
  const title = 'Devcommerce, your best e-commerce'
  return (
    <>
      <Head>
        <title>Welcome | Hello!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO title={title} shoudExcludeTitleSuffix image="background.png" />
      <main>
        <Header>Hello</Header>
      </main>
    </>
  )
}
