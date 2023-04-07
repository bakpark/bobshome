
import { getPageTitle } from 'notion-utils'
import notion from '@/lib/notion'
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import NotionPage from '@/components/NotionPage';
import { Post } from '@/components/NotionPage'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const pageId = context.query['pageId'] as string;
    console.log('pageId:', pageId)

    const recordMap = await notion.getPage(pageId)
    const post = {
        title: getPageTitle(recordMap),
        pageId: pageId,
        recordMap: recordMap
    }

    return { props: { post } };
};

export default function PostPage({ post }: { post: Post }) {
    return (
        <NotionPage post={post}></NotionPage>
    );
}