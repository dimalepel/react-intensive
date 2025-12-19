import styles from './PostCard.module.css'
import CommentList from "../../../widgets/CommentList/ui/CommentList.tsx";
import {Link} from "react-router-dom";
import {useGetCommentsByPostIdQuery} from "../../comment/api/commentsApi.ts";

interface PostCardProps {
    id: number,
    title: string,
    content: string,
}

export default function PostCard({ id, title, content } : PostCardProps) {
    const { data: comments = [] } = useGetCommentsByPostIdQuery(String(id))

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