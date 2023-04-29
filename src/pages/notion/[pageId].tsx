import NotionPage, { Page } from '@/components/NotionPage';
import { host } from '@/lib/config';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import * as notionTypes from 'notion-types';

export interface NotionPostResponse {
    postId: number,
    title: string,
    recordMap: notionTypes.ExtendedRecordMap
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const pageId = context.query['pageId'] as string;

    try {
        const res = await fetch(host + "/api/post/notion/" + pageId)
        const resBody = await res.json() as NotionPostResponse

        const page: Page = {
            title: resBody.title,
            pageId: pageId,
            recordMap: resBody.recordMap
        }

        return { props: { page } };
    } catch (e: any) {
        console.log("host:", host, " error ", e.message)
        throw e
    }
};

export default function PostPage({ page }: { page: Page }) {
    return (
        <NotionPage page={page}></NotionPage>
    );
}