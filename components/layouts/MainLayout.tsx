import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { NavBar } from '../NavBar'
import styles from './MainLayout.module.css'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Home - Fernando</title>
      <meta name="description" content="Home Page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <main className={styles.main}>
      {children}
    </main>
  </div>
)