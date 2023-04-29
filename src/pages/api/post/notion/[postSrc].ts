import { PostType, createPost, getPostByTypeAndSrc, increaseVisitorCount } from '@/domain/post';
import notion from '@/lib/notion';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as notionTypes from 'notion-types';
import { getPageTitle } from 'notion-utils';

export interface NotionPostResponse {
    postId: number,
    title: string,
    recordMap: notionTypes.ExtendedRecordMap
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<NotionPostResponse>
) {
    try {
        const notionPageId = req.query['postSrc'] as string
        const post = await getPostByTypeAndSrc(PostType.NOTION, notionPageId);

        const recordMap = await notion.getPage(notionPageId)
        const title = getPageTitle(recordMap)
        const postId = post === undefined ?
            await createPost(title, PostType.NOTION, notionPageId) : post.id
        increaseVisitorCount(postId!)

        res.status(200).json({ postId: postId!, title: title, recordMap: recordMap })
    } catch (err: any) {
        console.log("error occured in api", req.url, err.message)
        res.status(500).end()
    }
}
