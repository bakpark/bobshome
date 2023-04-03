import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Post.module.css"
import NotionPost from "@/components/NotionPost"

export default function Home() {
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
                        <li><a href="#">홈</a></li>
                        <li><a href="#">소개</a></li>
                        <li><a href="#">연락처</a></li>
                    </ul>
                </nav>
                <div className={styles.header_banner}>
                    <div className={styles.title_container}>
                        <h1>게시글 제목</h1>
                        <p className={styles.post_date}>2023. 04. 03</p>
                    </div>
                </div>
            </header>
            <div className={styles.center_div}>
                <aside className={styles.left_sidebar}>
                    <div className={styles.profile_picture}>
                        <img src="me.jpeg" alt="Profile picture"></img>
                    </div>
                    <div className={styles.greeting}>
                        <h2>박범준</h2>
                        <p>몰입경험을 중요하게 생각합니다.</p>
                    </div>
                </aside>
                <section className={styles.posts}>
                    <NotionPost pageId="cc7fafe8c7a64a1086b0ab1e99b8a528"></NotionPost>
                </section>
                <aside className={styles.right_sidebar}>
                    <ul className={styles.recent_posts}>
                        <h2>Posts</h2>
                        <li><a href="#">게시물 1</a></li>
                        <li><a href="#">게시물 2</a></li>
                        <li><a href="#">게시물 3</a></li>
                    </ul>
                    <div className={styles.visitors}>
                        <p>Total<br />3</p>
                        <p>오늘 방문자수 <span id={styles.today_visitors}></span></p>
                    </div>
                </aside>
            </div>
            <footer className={styles.footer}>
                <p>© 2023 All rights reserved.</p>
            </footer>
        </>
    )
}