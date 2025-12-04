import styles from './PostCard.module.css'
import CommentList from "../../../widgets/CommentList/ui/CommentList.tsx";
import type { Comment } from '../../comment/model/Comment.ts';

interface PostCardProps {
    title: string;
    content: string;
    comments: Comment[]
}

export default function PostCard({ title, content, comments } : PostCardProps) {
    return (
        <li className={styles['post-card']}>
            <h2 className={styles['post-card__title']}>{ title }</h2>
            <p>{ content }</p>
            <CommentList comments={comments}/>
        </li>
    )
}