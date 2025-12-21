import PostCard from "../../entities/post/ui/PostCard.tsx"
import styles from './PostList.module.css'
import type { Post } from '../../entities/post/model/Post.ts';
import {memo} from "react";

interface PostListProps {
    posts: Post[];
}

const PostList =  memo(function PostList({ posts }: PostListProps) {
    return (
        <ul className={styles['post-list']}>
            { posts.map(post => (
                <PostCard
                    title={post.title}
                    content={post.body}
                    comments={post.comments}
                    key={post.id}
                />
            )) }
        </ul>
    )
})

export default PostList;