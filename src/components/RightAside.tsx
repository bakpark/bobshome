import React from 'react'
import styles from "@/styles/Side.module.css"
import Link from 'next/link'

type Props = {
};

function ContentsNavigator({ }: Props) {
    return (
        <div className={styles.container}>
            <aside className={styles.contents_navigator}>
                <ul className={styles.contents}>
                    <h2>Contents</h2>
                    <li><Link href="/notion/02fa9c0eaf414ddf83901efc2b0fc168">스크래핑</Link></li>
                    <li><Link href="/notion/STUDY-86c92699d5794bf99c7390be36a3ed14">Study-ing</Link></li>
                    <li><Link href="/notion/e96c2cb5835f49a8910bbb26111c4d59">토이 프로젝트</Link></li>
                </ul>
            </aside>
        </div>
    );
}

export default ContentsNavigator;