import styles from "@/styles/Header.module.css";
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import Link from 'next/link';
import NextNprogress from 'nextjs-progressbar';
import 'react-notion-x/src/styles.css';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* Add the NextNprogress component */}
            <NextNprogress
                color="#29D" // Change the color of the progress bar
                startPosition={0.3}
                stopDelayMs={200}
                height={3} // Change the height of the progress bar
                options={{ easing: 'ease', speed: 500, showSpinner: true }}
            />
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
