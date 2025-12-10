import styles from './PostCard.module.css'
import CommentList from "../../../widgets/CommentList/ui/CommentList.tsx";
import type { Comment } from '../../comment/model/Comment.ts';
import {Link} from "react-router-dom";

interface PostCardProps {
    id: number,
    title: string,
    content: string,
    comments: Comment[]
}

export default function PostCard({ id, title, content, comments } : PostCardProps) {
    return (
        <li className={styles['post-card']}>
            <h2 className={styles['post-card__title']}>
                <Link to={`/posts/${id}`}>{ title }</Link>
            </h2>
            <p>{ content }</p>
            <CommentList comments={comments}/>
        </li>
    )
}