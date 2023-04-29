// post.ts
import { Database } from 'sqlite';
import connect from './db';

export interface Post {
    id: number;
    visitor: number;
    title: string;
    post_type: string;
    post_src: string;
}

export enum PostType{
    NOTION
}

export const createPost = async (title: string, postType: PostType, postSrc: string): Promise<number | undefined> => {
    const db: Database = await connect();
    const result = await db.run('INSERT INTO posts (visitor, title, post_type, post_src) VALUES (?, ?, ?, ?)',
        0, title, postType, postSrc);

    return result.lastID;
};

export const increaseVisitorCount = async (postId: number): Promise<void> => {
    const db: Database = await connect();
    await db.run('UPDATE posts SET visitor = visitor + 1 WHERE id = ?', postId);
};

export const getPostById = async (postId: number): Promise<Post | undefined> => {
    const db: Database = await connect();
    const post = await db.get<Post>('SELECT * FROM posts WHERE id = ?', postId);

    return post;
};

export const getPostByTypeAndSrc = async (postType: PostType, postSrc: string): Promise<Post | undefined> => {
    const db: Database = await connect();
    const post = await db.get<Post>('SELECT * FROM posts WHERE post_type = ? and post_src = ?', postType, postSrc);

    return post;
}

export const getPostsByType = async (postType: PostType): Promise<Post[]> => {
    const db: Database = await connect();
    const posts = await db.all<Post[]>('SELECT * FROM posts WHERE post_type = ?', postType);

    return posts;
};