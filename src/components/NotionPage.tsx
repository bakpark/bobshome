import * as React from 'react'

import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { NotionRenderer } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import styles from "@/styles/Post.module.css"
import LeftAsdie from '@/components/LeftAside';
import RightAside from '@/components/RightAside';

export type Post = {
    title: string;
    pageId: string;
    recordMap: ExtendedRecordMap;
};

export const NotionPage = ({ post }: { post: Post }) => {
    console.log('post', post)
    if (!post.recordMap) {
        return null
    }
    const title = getPageTitle(post.recordMap)
    console.log(title, post.recordMap)

    return (
        <>
            <div>
                <div>
                    <div className={styles.header_banner}>
                        <div className={styles.title_container}>
                            <h1>{post.title}</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.center_div}>
                    <LeftAsdie />
                    <section className={styles.posts}>
                        <NotionRenderer
                            recordMap={post.recordMap}
                            fullPage={true}
                            darkMode={false}
                            components={{ Code, Collection, Equation }}
                            mapPageUrl={(pageId) => "/posts/" + pageId}
                        />
                    </section>
                    <RightAside />
                </div>
            </div>
        </>
    )
}

export default NotionPage;