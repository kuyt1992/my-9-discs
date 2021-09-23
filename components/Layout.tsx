import { VFC } from 'react'
import Head from 'next/head'

import { Header } from './commons/Header'
import { Footer } from './commons/Footer'

type Props = {
  children: React.ReactNode
  title: string
}

const Layout: VFC<Props> = (props) => {
  const { children, title = 'HP by Next.js' } = props
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 bg-gray-100 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col w-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
