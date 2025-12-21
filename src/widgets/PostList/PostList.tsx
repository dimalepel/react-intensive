import PostCard from "../../entities/post/ui/PostCard.tsx"
import styles from './PostList.module.css'
import type { PostDTO } from '../../entities/post/model/types.ts';
import ItemList from "../../shared/ui/ItemList/ItemList.tsx";

interface PostListProps {
    posts: PostDTO[];
}

export default function PostList({ posts }: PostListProps) {
    return (
        <ItemList
            items={posts}
            getKey={post => post.id}
            className={styles["post-list"]}
            renderItem={post => (
                <PostCard post={post} />
            )}
        />
    )
}