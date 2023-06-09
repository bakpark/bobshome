import * as React from 'react'

import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { NotionRenderer } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import styles from "@/styles/Post.module.css"
import ContentsNavigator from '@/components/RightAside';

export type Page = {
    title: string;
    pageId: string;
    recordMap: ExtendedRecordMap;
};

export const NotionPage = ({ page }: { page: Page }) => {
    if (!page.recordMap) {
        return null
    }
    const title = getPageTitle(page.recordMap)

    return (
        <>
            <div>
                <div>
                    <div className={styles.header_banner}>
                        <div className={styles.title_container}>
                            <h1>{page.title}</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.center_div}>
                    <section className={styles.posts}>
                        <NotionRenderer
                            recordMap={page.recordMap}
                            fullPage={true}
                            darkMode={false}
                            components={{ Code, Collection, Equation }}
                            mapPageUrl={(pageId) => "/notion/" + pageId}
                        />
                    </section>
                    <ContentsNavigator />
                </div>
            </div>
        </>
    )
}

export default NotionPage;