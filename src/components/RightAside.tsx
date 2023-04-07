import React from 'react'
import styles from "@/styles/Side.module.css"
import Post from '@/pages/posts/[pageId]';

type Props = {
};

function RightAside({ }: Props) {
    return (
        <aside className={styles.right_sidebar}>
            <ul className={styles.recent_posts}>
                <h2>Posts</h2>
                <li><a href="#">게시물 1</a></li>
                <li><a href="#">게시물 2</a></li>
                <li><a href="#">게시물 3</a></li>
            </ul>
        </aside>
    );
}

export default RightAside;