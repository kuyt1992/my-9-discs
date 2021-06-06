import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { RecoilRoot } from 'recoil'

import { AppInit } from '../components/AppInit'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <AppInit />
    </RecoilRoot>
  )
}

export default MyApp
