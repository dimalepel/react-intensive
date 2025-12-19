import PostCard from "../../entities/post/ui/PostCard.tsx"
import styles from './PostList.module.css'
import type { PostDTO } from '../../entities/post/model/Post.ts';
import {useMemo} from "react";

interface PostListProps {
    posts: PostDTO[];
}

export default function PostList({ posts }: PostListProps) {

    const postCards = useMemo(() => {
        return posts.map(post => (
            <PostCard
                id={post.id}
                title={post.title}
                content={post.body}
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