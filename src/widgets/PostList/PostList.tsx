import PostCard from "../../entities/post/ui/PostCard.tsx"
import styles from './PostList.module.css'
import type { Post } from '../../entities/post/model/Post.ts';
import {useMemo} from "react";

interface PostListProps {
    posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
    const postCards = useMemo(() => {
        return posts.map(post => (
            <PostCard
                id={post.id}
                title={post.title}
                content={post.body}
                comments={post.comments}
                key={post.id}
            />
        ));
    }, [posts]);

    return (
        <ul className={styles['post-list']}>
            { postCards }
        </ul>
    )
}