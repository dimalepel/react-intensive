import type { Comment } from '../model/Comment.ts';

export async function fetchComments(): Promise<Comment[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);

    if (!res.ok) throw new Error('Ошибка сети');

    return res.json();
}