import React from 'react'
import styles from "@/styles/Side.module.css"

type Props = {
};

function RightAside({ }: Props) {
    return (
        <aside className={styles.right_sidebar}>
            <ul className={styles.recent_posts}>
                <h2>Posts</h2>
                <li><a href="/notion/02fa9c0eaf414ddf83901efc2b0fc168">스크래핑</a></li>
                <li><a href="/notion/STUDY-86c92699d5794bf99c7390be36a3ed14">Study-ing</a></li>
                <li><a href="/notion/e96c2cb5835f49a8910bbb26111c4d59">토이프로젝트</a></li>
            </ul>
        </aside>
    );
}

export default RightAside;