import PostLengthFilter from "../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import withLoading from "../shared/lib/hoc/withLoading.tsx";
import PostList from "../widgets/PostList/PostList.tsx";
import {useCallback, useEffect, useState} from "react";
import type {Post, PostDTO} from "../entities/post/model/Post.ts";
import type { Comment } from '../entities/comment/model/Comment.ts';
import {fetchComments} from "../entities/comment/api/commentsApi.ts";
import {filterByLength} from "../features/PostLengthFilter/lib/filterByLength.ts";
import {usePosts} from "../features/PostList/model/hooks/usePosts.ts";

const PostListWithLoading = withLoading(PostList);

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const { data: postsData } = usePosts<PostDTO[]>(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
    const [isLoadingAll, setIsLoadingAll] = useState(true);
    const [filtered, setFiltered] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPostsAndComments() {
            try {
                const commentsData = await fetchComments();

                const commentsByPostId = commentsData.reduce((acc, comment) => {
                    if (!acc[comment.postId]) {
                        acc[comment.postId] = [];
                    }
                    acc[comment.postId].push(comment);
                    return acc;
                }, {} as Record<number, Comment[]>);

                const postsWithComments = postsData?.map(post => ({
                    ...post,
                    comments: commentsByPostId[post.id] || []
                }));

                setPosts(postsWithComments ?? []);
                setFiltered(postsWithComments ?? []);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setIsLoadingAll(false);
            }
        }

        fetchPostsAndComments();
    }, [postsData]);

    const handleLengthChange = useCallback((min: number, max: number) => {
        setFiltered(filterByLength(posts, min, max));
    }, [posts]);

    return(
        <>
            <h1>All posts</h1>

            <PostLengthFilter onChange={handleLengthChange} />

            <PostListWithLoading isLoading={isLoadingAll} posts={filtered} />
        </>
    )
}