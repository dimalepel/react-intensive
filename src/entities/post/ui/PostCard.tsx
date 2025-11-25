import styles from './PostCard.module.css'

interface PostCardProps {
    title: string;
    content: string;
}

export default function PostCard({ title, content } : PostCardProps) {
    return (
        <li className={styles['post-card']}>
            <h2 className={styles['post-card__title']}>{ title }</h2>
            <p>{ content }</p>
        </li>
    )
}