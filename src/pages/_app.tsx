import styles from "@/styles/Post.module.css"
import Head from "next/head";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-notion-x/src/styles.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
                <title>bob's home</title>
            </Head>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <a href="#" className={styles.logo}>bob's home</a>
                    <ul className={styles.menu}>
                        <li><a href="/">홈</a></li>
                        <li><a href="#">소개</a></li>
                        <li><a href="#">연락처</a></li>
                    </ul>
                </nav>
            </header>
            <Component {...pageProps} />
            <footer className={styles.footer}>
                <p>© 2023 All rights reserved.</p>
            </footer>
        </>
    )
}
