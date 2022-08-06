import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Login}  from '../src/components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wysa.AI - Login</title>
        <meta name="description" content="Login to Peace - Wysa.AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Login/>
      </main>

    </div>
  )
}
