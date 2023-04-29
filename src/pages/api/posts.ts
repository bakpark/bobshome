import { Post, PostType, getPostsByType } from '@/domain/post';
import type { NextApiRequest, NextApiResponse } from 'next';

type PostsResponse = {
    posts: Post[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostsResponse>
) {
    try {
        const posts = await getPostsByType(PostType.NOTION);
        res.status(200).json({ posts })
    } catch (err) {
        res.status(500).json({ posts: [] })
    }
}
