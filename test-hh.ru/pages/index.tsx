import Head from 'next/head'
import { Main } from '../components/Main/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test hh.ru app</title>
        <meta name="description" content="Test hh.ru app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}
