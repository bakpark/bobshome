import * as React from 'react'
import { rootNotionPageId } from '@/lib/config'
import notion from '@/lib/notion'
import NotionPage from '@/components/NotionPage'
import { getPageTitle } from 'notion-utils'
import { Page } from '@/components/NotionPage'
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    console.log('root', rootNotionPageId)
    const recordMap = await notion.getPage(rootNotionPageId)
    const page = {
        title: getPageTitle(recordMap),
        pageId: rootNotionPageId,
        recordMap: recordMap
    }
    return { props: { page } }
}

export default function PostPage({ page }: { page: Page }) {
    return (
        <NotionPage page={page}></NotionPage>
    );
}