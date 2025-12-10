import {useEffect, useState} from "react";
import type {Post} from "../entities/post/model/Post.ts";
import {fetchPostById} from "../entities/post/api/postsApi.ts";
import {fetchComments} from "../entities/comment/api/commentsApi.ts";
import type {Comment} from "../entities/comment/model/Comment.ts";
import {useParams} from "react-router-dom";
import withLoading from "../shared/lib/hoc/withLoading.tsx";

import PostDetail from "../entities/post/ui/PostDetail.tsx";

const PostDetailWithLoading = withLoading(PostDetail);

export default function PostDetailPage() {
    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams<{id: string}>()

    useEffect(() => {
        async function fetchPostByIdAndComments() {
            try {
                const [postData, commentsData] = await Promise.all([
                    fetchPostById(id),
                    fetchComments()
                ]);

                const commentsByPostId = commentsData.reduce((acc, comment) => {
                    if (!acc[comment.postId]) {
                        acc[comment.postId] = [];
                    }
                    acc[comment.postId].push(comment);
                    return acc;
                }, {} as Record<number, Comment[]>);

                const postWithComments = {
                    ...postData,
                    comments: commentsByPostId[postData.id] || []
                }

                setPost(postWithComments)
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPostByIdAndComments();
    }, [id]);

    return <PostDetailWithLoading isLoading={isLoading} post={post}/>
}