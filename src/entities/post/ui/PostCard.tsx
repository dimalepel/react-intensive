import styles from './PostCard.module.css'
import CommentList from "../../../widgets/CommentList/ui/CommentList.tsx";
import {Link} from "react-router-dom";
import {useGetCommentsByPostIdQuery} from "../../comment/api/commentsApi.ts";
import type {PostDTO} from "../model/types.ts";
import {memo} from "react";

interface PostCardProps {
    post: PostDTO
}

const PostCard = memo(function PostCard({ post } : PostCardProps) {
    const { data: comments = [] } = useGetCommentsByPostIdQuery(String(post.id))

    return (
        <li className={styles['post-card']}>
            <h2 className={styles['post-card__title']}>
                <Link to={`/posts/${post.id}`}>{ post.title }</Link>
            </h2>
            <p>{ post.body }</p>
            <CommentList comments={comments}/>
        </li>
    )
})

export default PostCard;