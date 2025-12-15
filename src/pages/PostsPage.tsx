import PostLengthFilter from "../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import withLoading from "../shared/lib/hoc/withLoading.tsx";
import PostList from "../widgets/PostList/PostList.tsx";
import {useCallback, useEffect, useState} from "react";
import type {Post} from "../entities/post/model/Post.ts";
import type { Comment } from '../entities/comment/model/Comment.ts';
import {fetchPosts} from "../entities/post/api/postsApi.ts";
import {fetchComments} from "../entities/comment/api/commentsApi.ts";
import {filterByLength} from "../features/PostLengthFilter/lib/filterByLength.ts";

const PostListWithLoading = withLoading(PostList);

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filtered, setFiltered] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPostsAndComments() {
            try {
                const [postsData, commentsData] = await Promise.all([
                    fetchPosts(8),
                    fetchComments()
                ]);

                const commentsByPostId = commentsData.reduce((acc, comment) => {
                    if (!acc[comment.postId]) {
                        acc[comment.postId] = [];
                    }
                    acc[comment.postId].push(comment);
                    return acc;
                }, {} as Record<number, Comment[]>);

                const postsWithComments = postsData.map(post => ({
                    ...post,
                    comments: commentsByPostId[post.id] || []
                }));

                setPosts(postsWithComments);
                setFiltered(postsWithComments);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPostsAndComments();
    }, []);

    const handleLengthChange = useCallback((min: number, max: number) => {
        setFiltered(filterByLength(posts, min, max));
    }, [posts]);

    return(
        <>
            <h1>All posts</h1>

            <PostLengthFilter onChange={handleLengthChange} />

            <PostListWithLoading isLoading={isLoading} posts={filtered} />
        </>
    )
}