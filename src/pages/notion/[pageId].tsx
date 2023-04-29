
import NotionPage, { Page } from '@/components/NotionPage';
import { host } from '@/lib/config';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { NotionPostResponse } from '../api/post/notion/[postSrc]';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const pageId = context.query['pageId'] as string;

    const res = await fetch(host + "/api/post/notion/" + pageId)
    const resBody = await res.json() as NotionPostResponse

    if (resBody === null) {
        return { props: {} }
    }
    const page: Page = {
        title: resBody.title,
        pageId: pageId,
        recordMap: resBody.recordMap
    }

    return { props: { page } };
};

export default function PostPage({ page }: { page: Page }) {
    return (
        <NotionPage page={page}></NotionPage>
    );
}