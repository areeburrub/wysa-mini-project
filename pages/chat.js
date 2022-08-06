import Head from 'next/head'
import styles from '../styles/Chat.module.css'
import {ChatBox, ThemeMenu}  from '../src/components'
import { useTheme } from "../src/context/ThemeContext";

export default function Chat() {
  
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>Wysa.AI - Chat</title>
        <meta name="description" content="Chat with Wysa Bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{background: `linear-gradient(239.26deg, ${theme.background1} 63.17%, ${theme.background2} 94.92%)`}}>
        <ThemeMenu/>
        <div className={styles.title}>Chat</div>
        <ChatBox />
      </main>
    </div>
  );
}
