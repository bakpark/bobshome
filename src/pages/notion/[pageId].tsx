
import { getPageTitle } from 'notion-utils'
import notion from '@/lib/notion'
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import NotionPage from '@/components/NotionPage';
import { Page } from '@/components/NotionPage'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const pageId = context.query['pageId'] as string;

    const recordMap = await notion.getPage(pageId)
    const page: Page = {
        title: getPageTitle(recordMap),
        pageId: pageId,
        recordMap: recordMap
    }

    return { props: { page } };
};

export default function PostPage({ page }: { page: Page }) {
    return (
        <NotionPage page={page}></NotionPage>
    );
}