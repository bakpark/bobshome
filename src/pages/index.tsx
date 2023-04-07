import * as React from 'react'
import { rootNotionPageId } from '@/lib/config'
import notion from '@/lib/notion'
import NotionPage from '@/components/NotionPage'
import { getPageTitle } from 'notion-utils'
import { Post } from '@/components/NotionPage'

export const getStaticProps = async () => {
    console.log('root', rootNotionPageId)
    const recordMap = await notion.getPage(rootNotionPageId)
    const post = {
        title: getPageTitle(recordMap),
        pageId: rootNotionPageId,
        recordMap: recordMap
    }
    return { props: { post } }
}

export default function PostPage({ post }: { post: Post }) {
    return (
        <NotionPage post={post}></NotionPage>
    );
}