import styles from "@/styles/Header.module.css"
import Link from 'next/link'
import Head from "next/head";
import type { AppProps } from 'next/app'
import 'react-notion-x/src/styles.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>bob&apos;s home</title>
            </Head>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>bob&apos;s home</Link>
                    <ul className={styles.menu}>
                        <li><Link href="/">홈</Link></li>
                        <li><Link href="/introduce">소개</Link></li>
                        <li><Link href="/contact">연락처</Link></li>
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
