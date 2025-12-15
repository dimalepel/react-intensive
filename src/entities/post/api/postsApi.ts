import { fetchComments } from '../../comment/api/commentsApi.ts';
import type { PostDTO } from '../model/Post.ts';
import type { Comment } from '../../comment/model/Comment.ts';

// Получение всех постов
export async function fetchPosts(limit = 20): Promise<PostDTO[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

    if (!res.ok) throw new Error('Ошибка сети');

    return res.json();
}

// Получение деталей поста по Id поста
export async function fetchPostById(postId: string | undefined): Promise<PostDTO> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (!res.ok) throw new Error('Ошибка сети');

    return res.json();
}

// Получение постов по Id пользователя
export async function fetchPostsByUserId(userId: string | undefined): Promise<PostDTO[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);

    if (!res.ok) throw new Error('Ошибка сети');

    return res.json();
}

// Получение всех постов с комментариями
export async function fetchPostsWithComments(limit = 20): Promise<(PostDTO & { comments: Comment[] })[]> {
    const [postsData, commentsData] = await Promise.all([
        fetchPosts(limit),
        fetchComments()
    ]);

    const commentsByPostId = commentsData.reduce((acc, comment) => {
        if (!acc[comment.postId]) acc[comment.postId] = [];
        acc[comment.postId].push(comment);
        return acc;
    }, {} as Record<number, Comment[]>);

    return postsData.map(post => ({
        ...post,
        comments: commentsByPostId[post.id] || []
    }));
}