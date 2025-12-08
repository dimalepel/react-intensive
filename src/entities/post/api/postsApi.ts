import type { PostDTO } from '../model/Post.ts';

export async function fetchPosts(limit = 20): Promise<PostDTO[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

    if (!res.ok) throw new Error('Ошибка сети');

    return res.json();
}