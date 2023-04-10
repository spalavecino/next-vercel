import '@/styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react'

type NewxtPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode; // o JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NewxtPageWithLayout
}

export default function App({ Component, pageProps }) {
  const getLayout = (Component.getLayout || ((page) => page))

  return getLayout(<Component {...pageProps} />)
}
