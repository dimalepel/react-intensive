import Header from "../../widgets/LayoutHeader/Header.tsx";
import Footer from "../../widgets/LayoutFooter/Footer.tsx";
import PostList from "../../widgets/PostList/PostList.tsx";
import styles from './MainLayout.module.css'
import withLoading from "../lib/hoc/withLoading.tsx";
import {useCallback, useEffect, useState} from "react";
import type { Post } from '../../entities/post/model/Post.ts';
import type { Comment } from '../../entities/comment/model/Comment.ts';
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import {filterByLength} from "../../features/PostLengthFilter/lib/filterByLength.ts";
import { fetchPosts } from '../../entities/post/api/postsApi.ts'
import {fetchComments} from "../../entities/comment/api/commentsApi.ts";

const PostListWithLoading = withLoading(PostList);

export default function MainLayout() {
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

    return (<>
        <Header />
        <main className={styles.main}>
            <div className={styles.main__container}>
                <PostLengthFilter onChange={handleLengthChange} />

                <PostListWithLoading isLoading={isLoading} posts={filtered} />
            </div>
        </main>
        <Footer />
    </>)
}
